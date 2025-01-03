import { ReferencePageProps } from '@/utils/generate-props-for-reference-page'
import { getClickableStyles } from '@/utils/get-clickable-styles'
import { httpResponseCodeMeaning } from '@/utils/http-response-code-meaning'
import { inactiveColor } from '@/utils/inactive-color'
import {
  Title,
  Flex,
  Badge,
  useMantineTheme,
  Text,
  Accordion,
  createStyles,
  Tabs,
  clsx,
  Collapse,
  Spoiler,
  DefaultProps,
  MantineColor,
  Tooltip,
} from '@mantine/core'
import { IconFile, IconFileCode } from '@tabler/icons-react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { JsonViewer } from './JsonViewer'
import { SchemaObject } from 'konfig-lib'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import {
  OperationParameterDocumentation,
  OperationParameterDocumentationProps,
} from './OperationParameterDocumentation'
import { schemaTypeLabel } from '@/utils/schema-type-label'
import { CollapsibleChevron } from './CollapsibleChevron'
import { Prism, PrismStylesNames } from '@mantine/prism'
import { highlightJsonLines } from '@/utils/highlight-json-lines'
const OpenAPISampler = require('openapi-sampler')

const useStyles = createStyles((theme) => ({
  item: {
    border: getClickableStyles(theme).border,
    '&[data-active="true"]': {
      boxShadow: theme.shadows.sm,
    },
  },
  noSchema: {
    // set pointer so it doesn't look clickable
    cursor: 'default',

    // set svg to display: none
    '& svg': {
      display: 'none',
    },
  },
}))

type ResponseDocumentationObject = {
  responseCode: string
  description: string
  schema: SchemaObject | null | undefined
}

type FieldDocumentationWithDepth = OperationParameterDocumentationProps & {
  properties?: FieldDocumentationWithDepth[]
  path: string
}

class ResponsesState {
  responseCode: string
  responses: ResponseDocumentationObject[]
  highlightJsonPath: string[] = []

  // To handle oneOf case
  schemaIndex: number = 0

  propertiesExpanded: {
    [path: string]: boolean
  }
  constructor({
    responseCode,
    responses,
  }: {
    responseCode: string
    responses: ResponseDocumentationObject[]
  }) {
    makeAutoObservable(this)
    this.responseCode = responseCode
    this.responses = responses
    this.propertiesExpanded = {}
  }

  setSchemaIndex(index: number) {
    this.schemaIndex = index
  }

  setResponseCode(responseCode: string) {
    this.responseCode = responseCode
  }

  getPropertiesExpanded(path: string) {
    if (this.propertiesExpanded[path] === undefined) {
      this.propertiesExpanded[path] = false
    }
    return this.propertiesExpanded[path]
  }

  setPropertiesExpanded(path: string, value: boolean) {
    this.propertiesExpanded[path] = value
  }

  expandAllProperties() {
    Object.keys(this.propertiesExpanded).forEach((key) => {
      this.propertiesExpanded[key] = true
    })
  }

  collapseAllProperties() {
    Object.keys(this.propertiesExpanded).forEach((key) => {
      this.propertiesExpanded[key] = false
    })
  }

  get anyPropertiesExpanded() {
    return Object.values(this.propertiesExpanded).some((expanded) => expanded)
  }

  get anyCollapsibleProperties() {
    // iterate through all fields and check if they have any properties
    return this.fields.some((field) => (field.properties?.length ?? 0) > 0)
  }

  get responseObject() {
    const responseObject = this.responses.find(
      (response) => response.responseCode === this.responseCode
    )
    if (responseObject === undefined) {
      throw new Error('Response object not found')
    }
    return responseObject
  }

  get responseObjectSchemaLabel(): string | null {
    const schema = this.responseObjectSchema
    if (schema === null) return null
    return schemaTypeLabel({ schema })
  }

  get responseObjectSchemaDescription(): string {
    return this.responseObjectSchema?.description ?? ''
  }

  get responseObjectSchemaList(): SchemaObject[] | null {
    const responseObject = this.responseObject
    if (responseObject.schema?.allOf !== undefined) {
      if (responseObject.schema.allOf.length === 1) {
        const schema = responseObject.schema.allOf[0]
        if ('$ref' in schema) {
          throw new Error('$ref not expected in schema')
        }
        return [
          {
            ...schema,
            description: responseObject.schema.description
              ? responseObject.schema.description
              : schema.description,
          },
        ]
      }
    }
    if (responseObject.schema === null) return null
    if (responseObject.schema === undefined) return null
    if ('$ref' in responseObject.schema)
      throw new Error('$ref not expected in schema')
    const schema = responseObject.schema
    if (schema.oneOf !== undefined) {
      return schema.oneOf as SchemaObject[]
    }
    return [schema]
  }

  get responseObjectSchema(): SchemaObject | null {
    const schemas = this.responseObjectSchemaList
    return schemas?.[this.schemaIndex] ?? null
  }

  get fields(): FieldDocumentationWithDepth[] {
    const schema = this.responseObjectSchema
    if (schema === null) return []
    if (schema.type === 'object') {
      if (schema.properties === undefined) return []
      const fields = Object.entries(schema.properties).map(
        ([name, schema]) => ({
          name,
          schema,
        })
      )
      return this.fieldsWithDepth(fields)
    } else if (schema.type === 'array') {
      if ('$ref' in schema.items) {
        throw new Error('$ref not expected in schema')
      }
      const fields = [
        {
          name: '$item',
          schema: schema.items,
        },
      ]
      return this.fieldsWithDepth(fields)
    }
    return []
  }

  setHighlightPath(dataPath: string) {
    this.highlightJsonPath = JSON.parse(dataPath)
  }

  get example(): object | null {
    if (this.responseObjectSchema === null) return null
    return OpenAPISampler.sample(this.responseObjectSchema)
  }

  fieldsWithDepth(
    fields: { name: string; schema: SchemaObject }[],
    path: string = ''
  ): FieldDocumentationWithDepth[] {
    const fieldsWithDepth: FieldDocumentationWithDepth[] = []
    for (const field of fields) {
      if (field.schema.allOf !== undefined) {
        if (field.schema.allOf.length === 1) {
          const isNullable = 'nullable' in field.schema && field.schema.nullable
          const schema = field.schema.allOf[0]
          if ('$ref' in schema) {
            throw new Error('$ref not expected in schema')
          }
          schema.description =
            'description' in field.schema
              ? field.schema.description
              : schema.description
          if (isNullable) {
            ;(schema as any).nullable = true
          }
          const recursiveFields = this.fieldsWithDepth(
            [{ name: field.name, schema }],
            path
          )
          fieldsWithDepth.push(...recursiveFields)
        }
      } else if (
        field.schema.type === 'object' ||
        field.schema.properties !== undefined
      ) {
        const newPath = path + PATH_DELIMITER + field.name
        if (field.schema.properties !== undefined) {
          // object with properties
          const objectFields = Object.entries(field.schema.properties).map(
            ([name, schema]) => ({
              name,
              schema,
            })
          )
          const properties = this.fieldsWithDepth(objectFields, newPath)
          fieldsWithDepth.push({
            name: field.name,
            schema: schemaTypeLabel({ schema: field.schema }),
            description: field.schema.description,
            deprecated: field.schema.deprecated,
            properties,
            path: newPath,
          })
        } else {
          // object without properties
          fieldsWithDepth.push({
            name: field.name,
            schema: schemaTypeLabel({ schema: field.schema }),
            description: field.schema.description,
            path: newPath,
            deprecated: field.schema.deprecated,
          })
        }
      } else if (field.schema.type === 'array') {
        const newPath = path + PATH_DELIMITER + field.name
        if (field.schema.items !== undefined) {
          if ('$ref' in field.schema.items) {
            throw new Error('$ref not expected in schema')
          }
          if (
            field.schema.items.type === 'object' ||
            field.schema.items.properties !== undefined
          ) {
            if (field.schema.items.properties === undefined) {
              // array of free-form objects
              fieldsWithDepth.push({
                name: field.name,
                schema: schemaTypeLabel({ schema: field.schema }),
                description: field.schema.description,
                path: newPath,
                deprecated: field.schema.deprecated,
              })
            } else {
              // array of objects with properties
              const objectFields = Object.entries(
                field.schema.items.properties
              ).map(([name, schema]) => ({
                name,
                schema,
              }))
              const properties = this.fieldsWithDepth(
                objectFields,
                newPath + PATH_DELIMITER + '$item'
              )
              fieldsWithDepth.push({
                name: field.name,
                schema: schemaTypeLabel({ schema: field.schema }),
                description: field.schema.description,
                properties,
                path: newPath,
                deprecated: field.schema.deprecated,
              })
            }
          } else if (field.schema.items.type === undefined) {
            // array of any, don't put any properties
            fieldsWithDepth.push({
              name: field.name,
              schema: schemaTypeLabel({ schema: field.schema }),
              description: field.schema.description,
              path: newPath,
              deprecated: field.schema.deprecated,
            })
          } else {
            const name = '$item'
            const objectFields = [
              {
                name,
                schema: field.schema.items,
              },
            ]
            const properties = this.fieldsWithDepth(
              objectFields,
              newPath + PATH_DELIMITER + name
            )
            fieldsWithDepth.push({
              name: field.name,
              schema: schemaTypeLabel({ schema: field.schema }),
              description: field.schema.description,
              properties,
              path: newPath,
              deprecated: field.schema.deprecated,
            })
          }
        } else {
          // array without items
          fieldsWithDepth.push({
            name: field.name,
            schema: schemaTypeLabel({ schema: field.schema }),
            description: field.schema.description,
            path: newPath,
            deprecated: field.schema.deprecated,
          })
        }
      } else {
        // scalar non-array
        fieldsWithDepth.push({
          name: field.name,
          schema: schemaTypeLabel({ schema: field.schema }),
          description: field.schema.description,
          path: path + PATH_DELIMITER + field.name,
          deprecated: field.schema.deprecated,
        })
      }
    }

    return fieldsWithDepth
  }

  get exampleString(): string | null {
    return this.highlightLines?.jsonString ?? null
  }

  get highlightLines(): ReturnType<typeof highlightJsonLines> | null {
    if (this.example === null) return null
    return highlightJsonLines({
      json: this.example,
      path: this.highlightJsonPath,
    })
  }

  get firstLine() {
    return this.highlightLines?.highlightedLines[0] ?? null
  }
}

const ResponsesStateContext = createContext<ResponsesState | null>(null)

export const OperationReferenceResponses = observer(
  ({
    responses,
    operation,
  }: Pick<ReferencePageProps, 'responses' | 'operation'>) => {
    return (
      <div className="my-20 ">
        {/* <V1 responses={responses} /> */}
        <V2 responses={responses} />
      </div>
    )
  }
)

const V2 = observer(({ responses }: Pick<ReferencePageProps, 'responses'>) => {
  const responsesMapped = Object.entries(responses).map(
    ([responseCode, response]) => {
      // get schemaobject from first content type
      // if schema is null the response object could be like
      // "200": {
      //  "description": "Successful response"
      // }
      const schemaObject = response.content
        ? response.content[Object.keys(response.content)[0]].schema
        : null

      if (schemaObject != null && '$ref' in schemaObject) {
        throw new Error('$ref not expected in schema')
      }

      return {
        responseCode,
        description: response.description,
        schema: schemaObject,
      }
    }
  )

  return (
    <ResponsesStateContext.Provider
      value={
        new ResponsesState({
          responseCode: responsesMapped[0].responseCode,
          responses: responsesMapped,
        })
      }
    >
      <ResponseDocumentation />
    </ResponsesStateContext.Provider>
  )
})

const tabStyles = {
  tab: clsx(
    'text-xs px-3 py-1',
    'data-[active=true]:bg-mantine-gray-100 text-mantine-gray-700 data-[active=true]:hover:bg-mantine-gray-100 data-[active=true]:text-black',
    'dark:text-mantine-gray-500 data-[active=true]:dark:bg-mantine-gray-900 data-[active=true]:dark:text-white'
  ),
  tabsList: 'border-mantine-gray-100 dark:border-mantine-gray-900',
}

const ResponseDocumentation = observer(() => {
  const responsesState = useContext(ResponsesStateContext)
  return (
    <>
      <div className="pb-3 flex items-center mb-8 border-b border-b-mantine-gray-100 dark:border-b-mantine-gray-900">
        <Title order={4}>Response fields</Title>
        <Tabs
          classNames={{ ...tabStyles, root: 'ml-4 sm:ml-12' }}
          defaultValue="gallery"
          onTabChange={(value) => {
            if (value !== null) {
              responsesState?.setResponseCode(value)
            }
          }}
          variant="pills"
          value={responsesState?.responseCode}
        >
          <Tabs.List>
            {responsesState?.responses.map((response) => {
              if (
                response.description === '' ||
                response.description === undefined
              ) {
                console.log(response.description)
              }
              return response.description !== undefined &&
                response.description !== '' ? (
                <Tooltip
                  key={response.responseCode}
                  withArrow
                  classNames={{
                    tooltip:
                      'text-xs dark:bg-mantine-gray-900 dark:text-mantine-gray-100',
                  }}
                  label={response.description}
                >
                  <Tabs.Tab value={response.responseCode}>
                    {response.responseCode}
                  </Tabs.Tab>
                </Tooltip>
              ) : (
                <Tabs.Tab
                  key={response.responseCode}
                  value={response.responseCode}
                >
                  {response.responseCode}
                </Tabs.Tab>
              )
            })}
          </Tabs.List>
        </Tabs>
      </div>
      {responsesState?.responseObjectSchema !== null ? (
        <ResponseFieldsDocumentation />
      ) : (
        <div className="text-mantine-gray-600">No response fields.</div>
      )}
    </>
  )
})

const ResponseFieldsDocumentation = observer(() => {
  const responsesState = useContext(ResponsesStateContext)

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-between">
      <div className="sm:w-1/2">
        {responsesState?.responseObjectSchemaList?.length !== undefined &&
          responsesState?.responseObjectSchemaList?.length > 1 && (
            <div className="mb-6">
              <Tabs
                classNames={tabStyles}
                variant="pills"
                defaultValue="gallery"
                value={responsesState?.schemaIndex.toString()}
                onTabChange={(value) => {
                  if (value !== null) {
                    responsesState?.setSchemaIndex(parseInt(value))
                  }
                }}
              >
                <Tabs.List>
                  {responsesState?.responseObjectSchemaList.map((_, i) => (
                    <Tabs.Tab key={i} value={i.toString()}>
                      Schema {i + 1}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs>
            </div>
          )}
        <div className="w-full pb-3 border-b dark:border-mantine-gray-900 border-mantine-gray-100">
          <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
            <OperationParameterDocumentation
              name=""
              schema={responsesState?.responseObjectSchemaLabel ?? ''}
              description={responsesState?.responseObjectSchemaDescription}
              deprecated={false}
            />
          </Spoiler>
          <div className="w-full flex justify-end">
            {responsesState?.anyCollapsibleProperties && (
              <button
                onClick={() =>
                  responsesState?.anyPropertiesExpanded
                    ? responsesState?.collapseAllProperties()
                    : responsesState?.expandAllProperties()
                }
                className="text-sm flex-nowrap whitespace-nowrap py-1 px-3 dark:hover:bg-mantine-gray-800 hover:bg-mantine-gray-100 rounded-md"
              >
                {responsesState?.anyPropertiesExpanded
                  ? 'Collapse all...'
                  : 'Expand all...'}
              </button>
            )}
          </div>
        </div>
        {responsesState && (
          <ResponseFieldDocumentationContents
            depth={0}
            fields={responsesState.fields}
          />
        )}
      </div>
      <div className="mt-6 sm:mt-0 sm:w-1/2">
        <div className="mb-2 text-xs"></div>
        <ResponseExample />
      </div>
    </div>
  )
})

const ResponseExample = observer(() => {
  const responsesState = useContext(ResponsesStateContext)
  if (responsesState?.highlightLines === null) return null
  const styles: DefaultProps<PrismStylesNames> = {
    styles: {
      scrollArea: {
        height: 720,
      },
    },
    classNames: {
      root: 'rounded-md overflow-hidden',
    },
  }
  const jsonString = responsesState?.exampleString ?? ''

  const highlightLines = {
    ...Object.fromEntries(
      Array.from(
        { length: jsonString.split('\n').length },
        (_, i) =>
          [i + 1, { color: 'dark' }] as [number, { color: MantineColor }]
      ).filter(
        ([i]) =>
          responsesState?.highlightLines &&
          !responsesState?.highlightLines.highlightedLines.includes(i)
      )
    ),
  }
  const prismRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (responsesState === null) return
    // if first line is 1, do not scroll to the top
    if (responsesState.firstLine === 1) return
    if (responsesState.firstLine === null) return

    // find div with attribute "data-radix-scroll-area-viewport"
    const viewportRef = prismRef.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    )
    if (viewportRef === null) return
    if (viewportRef === undefined) return

    // find first <pre> tag from ref
    const pre = prismRef.current?.querySelector('pre')
    if (pre === null) return
    if (pre === undefined) return

    // find nth div where n is firstLine
    const div = pre.children[responsesState.firstLine - 1] as HTMLDivElement
    if (div === null) return
    if (div === undefined) return

    viewportRef.scrollTo({ top: div.offsetTop - 44.2, behavior: 'smooth' })
  }, [responsesState?.firstLine])

  return (
    <div className="sticky top-[calc(var(--mantine-header-height,0px)+1rem)]">
      <Prism
        ref={prismRef}
        colorScheme="dark"
        highlightLines={{ ...highlightLines }}
        withLineNumbers
        {...styles}
        language={'json'}
      >
        {jsonString}
      </Prism>
    </div>
  )
})

const PATH_DELIMITER = '.'
const ResponseFieldDocumentationContents = observer(
  ({
    fields,
    depth,
  }: {
    fields: FieldDocumentationWithDepth[]
    depth: number
  }) => {
    return (
      <div
        className={clsx({
          'ml-4': depth > 0,
        })}
      >
        {fields.map((field) => {
          return (
            <ResponseFieldDocumentationField
              key={field.name}
              field={field}
              depth={depth}
            />
          )
        })}
      </div>
    )
  }
)

const ResponseFieldDocumentationField = observer(
  ({ field, depth }: { field: FieldDocumentationWithDepth; depth: number }) => {
    const responsesState = useContext(ResponsesStateContext)
    const opened = responsesState?.getPropertiesExpanded(field.path) ?? false
    const toggle = () =>
      responsesState?.setPropertiesExpanded(field.path, !opened)
    return (
      <>
        <div
          data-path={JSON.stringify(
            field.path.substring(1).split(PATH_DELIMITER)
          )}
          onMouseEnter={(e) => {
            const dataPath = e.currentTarget.getAttribute('data-path')
            if (dataPath === null) return
            responsesState?.setHighlightPath(dataPath)
          }}
          onMouseLeave={(e) => {
            responsesState?.setHighlightPath('[]')
          }}
          className={clsx(
            'hover:bg-mantine-gray-100 dark:hover:bg-mantine-gray-900',
            'border-b dark:border-mantine-gray-900 border-mantine-gray-100 py-5 px-3'
          )}
        >
          <OperationParameterDocumentation
            key={field.name}
            {...field}
            name={field.name === '$item' ? '' : field.name}
          />
          {field.properties && field.properties.length > 0 && (
            <button
              onClick={() => toggle()}
              className="mt-4 ml-auto px-3 flex items-center py-1 rounded-md dark:hover:bg-mantine-gray-800 hover:bg-mantine-gray-100"
            >
              <span className="text-sm mr-3 dark:text-mantine-gray-500">
                {opened ? 'Hide properties' : 'Show properties'}
              </span>
              <CollapsibleChevron opened={opened} />
            </button>
          )}
        </div>
        <Collapse in={opened}>
          {field.properties && field.properties.length > 0 && (
            <ResponseFieldDocumentationContents
              fields={field.properties}
              depth={depth + 1}
            />
          )}
        </Collapse>
      </>
    )
  }
)

function ResponseCodeTab({
  code,
  description,
}: {
  code: string
  description: string
}) {
  return (
    <>
      <Flex gap="xs" align="center">
        <Title order={6}>
          {code} {httpResponseCodeMeaning(code)}
        </Title>
        {code.startsWith('2') ? (
          <Badge color="blue">Success</Badge>
        ) : (
          <Badge color="red">Error</Badge>
        )}
      </Flex>
      {description && (
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      )}
    </>
  )
}

function V1({ responses }: Pick<ReferencePageProps, 'responses'>) {
  const { classes, cx } = useStyles()
  const [value, setValue] = useState<string | null>(null)
  const theme = useMantineTheme()

  return (
    <Accordion
      value={value}
      onChange={(responseCode) => {
        if (responseCode === null) return setValue(responseCode)
        if (responses[responseCode] === undefined) return
        if (responses[responseCode].content === undefined) {
          return
        }
        const contentObject = responses[responseCode].content
        if (contentObject === undefined) return

        if (contentObject[Object.keys(contentObject)[0]].schema === undefined)
          return

        setValue(responseCode)
      }}
      variant="separated"
    >
      {Object.entries(responses).map(([responseCode, response]) => {
        // get schemaobject from first content type
        // if schema is null the response object could be like
        // "200": {
        //  "description": "Successful response"
        // }
        const schemaObject = response.content
          ? response.content[Object.keys(response.content)[0]].schema
          : null

        return (
          <Accordion.Item
            className={classes.item}
            value={responseCode}
            key={responseCode}
          >
            {/* 1. Render response code
                          2. Render meaning of response code like "OK" for 200 and "Not Found" for 404 in same text box as (1)
                          3. Render green "Success" badge next to 2xx codes and red "Error" badge next to 4xx and 5xx codes
                          4. Render response description if it exists under the response code + badge
                       */}
            <Accordion.Control
              className={cx({
                [classes.noSchema]: schemaObject === null,
              })}
              px="md"
            >
              <ResponseCodeTab
                code={responseCode}
                description={response.description}
              />
            </Accordion.Control>
            <Accordion.Panel>
              <Tabs
                styles={{
                  tab: {
                    color: inactiveColor(theme),
                    '&[data-active="true"]': {
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.white
                          : theme.black,
                      ...getClickableStyles(theme),
                      ':hover': {
                        ...getClickableStyles(theme),
                      },
                    },
                  },
                }}
                variant="pills"
                defaultValue="example"
              >
                <Tabs.List>
                  <Tabs.Tab
                    w="100px"
                    value="example"
                    icon={<IconFile size="0.8rem" />}
                  >
                    Example
                  </Tabs.Tab>
                  <Tabs.Tab
                    w="138px"
                    value="schema"
                    icon={<IconFileCode size="0.8rem" />}
                  >
                    JSON Schema
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="example" pt="xs">
                  {schemaObject && !('$ref' in schemaObject) && (
                    <JsonViewer
                      collapsed={3}
                      displayObjectSize={false}
                      displayDataTypes={false}
                      enableClipboard={true}
                      name={false}
                      src={OpenAPISampler.sample(schemaObject as any)}
                    ></JsonViewer>
                  )}
                </Tabs.Panel>

                <Tabs.Panel value="schema" pt="xs">
                  {schemaObject && !('$ref' in schemaObject) && (
                    <JsonViewer
                      collapsed={3}
                      displayObjectSize={false}
                      displayDataTypes={false}
                      enableClipboard={true}
                      name={false}
                      src={schemaObject}
                    />
                  )}
                </Tabs.Panel>
              </Tabs>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
