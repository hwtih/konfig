import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AgrimetricsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="agrimetrics-typescript-sdk"
      metaDescription={`Radical new answers are needed to feed a growing population and protect our planet. 

Agrimetrics provides data and tools to agrifood businesses, researchers and policy-makers to address our most pressing global food challenges. This is a unique opportunity for the food and farming sectors, working together, to drive sustainable productivity.`}
      company="Agrimetrics"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/logo.png"
      companyKebabCase="agrimetrics"
      clientNameCamelCase="agrimetrics"
      homepage="agrimetrics.co.uk"
      lastUpdated={new Date("2024-03-24T20:43:46.972Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["agriculture","sustainability","agritech","data"]}
      methods={[
  {
    "url": "/authenticate",
    "method": "getJwt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Get JWT",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/status",
    "method": "getCatalogApiStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Get status of catalog API.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/query",
    "method": "cutShapeBoundaryAndRetrieve",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query Layer",
    "typeScriptTag": "queryLayer",
    "description": "Query and download sections of one or more layers",
    "parameters": [
      {
        "name": "layer",
        "schema": "array",
        "required": true,
        "description": "A layer to query"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}",
    "method": "listLayersWithinDataset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Query Dataset",
    "typeScriptTag": "queryDataset",
    "description": "List layers within dataset",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "This parameter corresponds to the Agrimetrics Catalogue dataset ID.",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/layers",
    "method": "ingestFileNewLayer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Dataset",
    "typeScriptTag": "manageDataset",
    "description": "Ingest file to new layer",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "fileUri",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://api.agrimetrics.co.uk/file-management/data-sets/5e74c298-515d-408d-8926-974abc696092/files/samplehabitats.zip"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/shapefile",
    "method": "convertToGeoJson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shapefile",
    "typeScriptTag": "shapefile",
    "description": "Receive a shapefile and return GeoJson",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}",
    "method": "deleteLayer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Delete layer",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful. Layer Deleted."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}",
    "method": "metadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Query Layer",
    "typeScriptTag": "queryLayer",
    "description": "Get layer metadata",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}",
    "method": "addGeoTiff",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Add a GeoTIFF to a layer",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "datetime",
        "schema": "string",
        "description": "",
        "example": "20130310T180000Z"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "413",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/files",
    "method": "removeFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Delete a file from a layer",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "fileUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://api-test.agrimetrics.co.uk/file-management/data-sets/11111111-2222-3333-4444-55555555555/files/example.zip"
      },
      {
        "name": "filename",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "example.tif"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/ingest",
    "method": "ingestFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Ingest a file to a layer",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://api.agrimetrics.co.uk/file-management/data-sets/5e74c298-515d-408d-8926-974abc696092/files/samplehabitats.zip"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "samplehabitats.zip"
      },
      {
        "name": "datetime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "20130310T180000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful. Tile ingested correctly."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/style",
    "method": "removeStyle",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Delete the style from a layer, if one has been set",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Style deleted"
      },
      {
        "statusCode": "400",
        "description": "You probably tried to delete the style from an unstyled layer. Please verify the layer ID.\n"
      }
    ]
  },
  {
    "url": "/layers/{layerId}/style",
    "method": "getStyle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Get the style for a layer, if one has been set",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Query was successful but no style found."
      }
    ]
  },
  {
    "url": "/layers/{layerId}/style",
    "method": "autoGenerateStyle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Auto-generate and set layer style",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LU_CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/style",
    "method": "setStyle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Manage Layer",
    "typeScriptTag": "manageLayer",
    "description": "Set layer style",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/search",
    "method": "searchGeometry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query Layer",
    "typeScriptTag": "queryLayer",
    "description": "Search within layer",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/search/cost",
    "method": "calculateCost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query Layer",
    "typeScriptTag": "queryLayer",
    "description": "Calculate query cost",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/layers/{layerId}/search/statistics",
    "method": "calculateStatisticsWithinGeometry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Query Layer",
    "typeScriptTag": "queryLayer",
    "description": "Get layer statistics",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "geometry",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "time",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-01T00:00:00.000Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/serviceDefinition",
    "method": "createNewDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Service Definition",
    "typeScriptTag": "serviceDefinition",
    "description": "Create new service definition",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a420450f-ef42-4fc9-a137-69456bdad016"
      },
      {
        "name": "layerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Geospatial Layer"
      },
      {
        "name": "service",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SERVICE"
      },
      {
        "name": "WFS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WFS"
      },
      {
        "name": "WCS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WCS"
      },
      {
        "name": "WMS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WMS"
      },
      {
        "name": "WMTS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WMTS"
      },
      {
        "name": "OGCApiFeatures",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OGCAPIFEATURES"
      },
      {
        "name": "OGCApiTiles",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OGCAPITILES"
      },
      {
        "name": "temporal",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "datastore",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Datastore Name"
      },
      {
        "name": "geoserverHostName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "geoserver-test.agrimetrics.co.uk"
      },
      {
        "name": "geometryField",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "geom"
      },
      {
        "name": "billable",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultEPSGCode",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 4326
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/serviceDefinition/{layerId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Service Definition",
    "typeScriptTag": "serviceDefinition",
    "description": "Delete service definition",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/serviceDefinition/{layerId}",
    "method": "getByLayerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Service Definition",
    "typeScriptTag": "serviceDefinition",
    "description": "Get service definition",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/serviceDefinition/{layerId}",
    "method": "updateExistingDefinition",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Service Definition",
    "typeScriptTag": "serviceDefinition",
    "description": "Update service definition",
    "parameters": [
      {
        "name": "layerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "billable",
        "schema": "object",
        "description": ""
      },
      {
        "name": "defaultEPSGCode",
        "schema": "number",
        "description": "",
        "example": 4326
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-requests",
    "method": "listUserAccessRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "lists a users data requests",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-requests",
    "method": "createSingleAccessRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "create a single access request",
    "parameters": [
      {
        "name": "projectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTNAME"
      },
      {
        "name": "projectManagerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTMANAGERNAME"
      },
      {
        "name": "projectManagerEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTMANAGEREMAIL"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASETID"
      },
      {
        "name": "datasetName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASETNAME"
      },
      {
        "name": "geoJsonAOI",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shapefileAOI",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedFormat",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTEDFORMAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-requests/{requestId}",
    "method": "getRequestedData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "gets the data for the approved request",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-requests/{requestId}",
    "method": "updateRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "updates a data request",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-requests/{uniqueLinkId}/approve",
    "method": "grantUserAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "approve data access",
    "parameters": [
      {
        "name": "uniqueLinkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIQUELINKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Data Access request not found"
      }
    ]
  },
  {
    "url": "/data-requests/{uniqueLinkId}/reject",
    "method": "rejectUserAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "reject data access",
    "parameters": [
      {
        "name": "uniqueLinkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIQUELINKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Data Access request not found"
      }
    ]
  },
  {
    "url": "/data-requests/{uniqueLinkId}/geometry",
    "method": "getGeoJsonGeometry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "Get geometry for data request as GeoJSON",
    "parameters": [
      {
        "name": "uniqueLinkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIQUELINKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Data Access request not found"
      }
    ]
  },
  {
    "url": "/data-requests/{requestId}/download",
    "method": "getResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dataRequest",
    "typeScriptTag": "dataRequest",
    "description": "Get the results of your data request",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication required."
      },
      {
        "statusCode": "403",
        "description": "The request has not been approved yet OR it has been rejected OR you are not authorised for this data access request."
      },
      {
        "statusCode": "404",
        "description": "No request found by that ID."
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": "This data access request has expired."
      }
    ]
  },
  {
    "url": "/datasets/swagger-ui/{swaggerFile}",
    "method": "getSwaggerFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features Swagger",
    "parameters": [
      {
        "name": "swaggerFile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SWAGGERFILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/datasets/apicss/{cssFile}",
    "method": "getStyleForCssFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API CSS",
    "parameters": [
      {
        "name": "cssFile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSSFILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wms",
    "method": "queryLayerWithOpenGis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WMS",
    "typeScriptTag": "wms",
    "description": "Web Map Service (WMS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wms",
    "method": "queryWithOpenGis",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "WMS",
    "typeScriptTag": "wms",
    "description": "Web Maps Service (WMS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wmts",
    "method": "queryDataSetWmts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WMTS",
    "typeScriptTag": "wmts",
    "description": "Web Map Tile Service (WMTS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wfs",
    "method": "queryDataWithOpenGis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WFS",
    "typeScriptTag": "wfs",
    "description": "Web Feature Service (WFS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wfs",
    "method": "queryDataOpenGis",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "WFS",
    "typeScriptTag": "wfs",
    "description": "Web Feature Service (WFS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wfs",
    "method": "queryDataOpenGis",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WFS",
    "typeScriptTag": "wfs",
    "description": "Web Feature Service (WFS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1",
    "method": "featuresQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/openapi",
    "method": "queryFeaturesOpenapi",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/conformance",
    "method": "featuresQueryConformance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/functions",
    "method": "queryFeaturesFunction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/collections",
    "method": "queryFeaturesCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}",
    "method": "featuresQueryOgc",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}/queryables",
    "method": "featuresQueryables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}/items",
    "method": "queryFeaturesCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}/items/{featureId}",
    "method": "featuresQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGCAPI",
    "typeScriptTag": "ogcapi",
    "description": "OGC-API-Features query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "featureId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATUREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1",
    "method": "queryTilesV1",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/conformance",
    "method": "getConformance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/collections",
    "method": "queryCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}",
    "method": "queryCollectionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}/queryables",
    "method": "queryCollectionQueryables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}/tiles/{tileMatrixSetId}",
    "method": "getTilesCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "tileMatrixSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIXSETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}/map/tiles/{tileMatrixSetId}/{tileMatrix}/{tileRow}/{tileCol}",
    "method": "getQueryTilesCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "tileMatrixSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIXSETID"
      },
      {
        "name": "tileMatrix",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIX"
      },
      {
        "name": "tileRow",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tileCol",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "f",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "F"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/tileMatrixSets",
    "method": "queryTileMatrixSets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/ogc/tiles/v1/tileMatrixSets/{tileMatrixSetId}",
    "method": "queryTileMatrixSets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OGC API Tiles",
    "typeScriptTag": "ogcApiTiles",
    "description": "OGC API Tiles query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "tileMatrixSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIXSETID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wmts/rest/{layerName}/{style}/tilejson/{imageFormat}",
    "method": "queryTilejsonImageFormat",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WMTS REST",
    "typeScriptTag": "wmtsRest",
    "description": "WMTS Service query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "layerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAYERNAME"
      },
      {
        "name": "style",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STYLE"
      },
      {
        "name": "imageFormat",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGEFORMAT"
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORMAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wmts/rest/{layerName}/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",
    "method": "queryTileMatrixSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WMTS REST",
    "typeScriptTag": "wmtsRest",
    "description": "WMTS Service query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "layerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAYERNAME"
      },
      {
        "name": "style",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STYLE"
      },
      {
        "name": "tileMatrixSet",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIXSET"
      },
      {
        "name": "tileMatrix",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIX"
      },
      {
        "name": "tileRow",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tileCol",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORMAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wmts/rest/{layerName}/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}/{J}/{I}",
    "method": "serviceQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WMTS REST",
    "typeScriptTag": "wmtsRest",
    "description": "WMTS Service query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "layerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAYERNAME"
      },
      {
        "name": "style",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STYLE"
      },
      {
        "name": "tileMatrixSet",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIXSET"
      },
      {
        "name": "tileMatrix",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TILEMATRIX"
      },
      {
        "name": "tileRow",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "tileCol",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "j",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "i",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORMAT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wcs",
    "method": "queryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WCS",
    "typeScriptTag": "wcs",
    "description": "Web Coverage Service (WCS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/datasets/{datasetId}/wcs",
    "method": "queryData",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "WCS",
    "typeScriptTag": "wcs",
    "description": "Web Coverage Service (WMS) query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/services/{datasetId}/{paramOne}",
    "method": "restServiceQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ESRI",
    "typeScriptTag": "esri",
    "description": "ESRI REST Service query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "paramOne",
        "schema": "string",
        "required": true,
        "description": "Additional path element",
        "example": "PARAMONE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest/services/{datasetId}/{paramOne}/{paramTwo}",
    "method": "restServiceQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ESRI",
    "typeScriptTag": "esri",
    "description": "ESRI REST Service query",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "paramOne",
        "schema": "string",
        "required": true,
        "description": "Additional path element",
        "example": "PARAMONE"
      },
      {
        "name": "paramTwo",
        "schema": "string",
        "required": true,
        "description": "Additional path element",
        "example": "PARAMTWO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/categories",
    "method": "listValidCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "List all the valid categories of datasets.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags",
    "method": "listValidTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "List all the valid tags that can be set on a data set.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/linked-data/concepts",
    "method": "listConcepts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Graph",
    "typeScriptTag": "graph",
    "description": "List all concepts in linked data graph.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of all concepts"
      }
    ]
  },
  {
    "url": "/data-sets",
    "method": "listAllDataSets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "List all data sets.",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "List of data set ids"
      },
      {
        "name": "creator",
        "schema": "array",
        "description": "The creator of the data set."
      },
      {
        "name": "keywords",
        "schema": "array",
        "description": "Tags describing the data set. keywords is deprecated - use tags instead"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "Tags describing the data set."
      },
      {
        "name": "tagRelationship",
        "schema": "string",
        "description": "Note - This feature will no longer be available as we are in the process of moving to a different backend and will soon be removed. If provided, include data sets that have been tagged with concepts that are related to the values provided in the `tags` parameter. If not provided, only include data sets tagged with exact matches."
      },
      {
        "name": "category",
        "schema": "array",
        "description": "Indicates the type of data"
      },
      {
        "name": "spatialCoverage",
        "schema": "array",
        "description": "The region the data is applicable to."
      },
      {
        "name": "text",
        "schema": "string",
        "description": "Note - Use extendedText. This field has been deprecated. Free text search for data sets.",
        "example": "Weather"
      },
      {
        "name": "extendedText",
        "schema": "string",
        "description": "Free text search for data sets matching title; summary; description; tags; concepts; and source.",
        "example": "Soil"
      },
      {
        "name": "identities",
        "schema": "array",
        "description": "Only show datasets accessible by these identities. Can be 'PUBLIC', a user ID or an organisation ID."
      },
      {
        "name": "onlyFeatured",
        "schema": "boolean",
        "description": "Defines whether to return only featured data sets"
      },
      {
        "name": "showEditable",
        "schema": "boolean",
        "description": "Defines whether my editable data sets should be shown."
      },
      {
        "name": "showHidden",
        "schema": "boolean",
        "description": "Defines whether hidden data sets should be shown."
      },
      {
        "name": "pageNum",
        "schema": "integer",
        "description": "Set the page number. Should not be specified in conjunction with offset or limit."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Set the page size. Should not be specified in conjunction with offset or limit."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Set the pagination offset. Should not be specified in conjunction with pageNum or pageSize."
      },
      {
        "name": "searchType",
        "schema": "string",
        "description": "Choose whether to search across all metadata on a data set, or just the title."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Set the pagination limit. Should not be specified in conjunction with pageNum or pageSize."
      },
      {
        "name": "legacyConcepts",
        "schema": "boolean",
        "description": "Note - This feature will no longer be available once we move to a different backend. \"Format response to convert any new concepts to legacy concepts\""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Criterion by which to order the results"
      },
      {
        "name": "exchange",
        "schema": "string",
        "description": "The private data exchange for which to retrieve records"
      },
      {
        "name": "metadataStandardName",
        "schema": "array",
        "description": ""
      },
      {
        "name": "draftStatus",
        "schema": "array",
        "description": ""
      },
      {
        "name": "publishedStatus",
        "schema": "array",
        "description": ""
      },
      {
        "name": "licence",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets",
    "method": "createSingleCatalogEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Create a single data set catalog entry.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}",
    "method": "deleteSingleDataSet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Delete a Data Set",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}",
    "method": "getSingleCatalogEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get a single data set catalog entry.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}",
    "method": "updateSingleCatalogEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Update a single data set catalog entry.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alternativeTitles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "scoringURI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endpointKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "derivedFrom",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creator",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataReliability",
        "schema": "string",
        "description": ""
      },
      {
        "name": "license",
        "schema": "string",
        "description": ""
      },
      {
        "name": "licence",
        "schema": "object",
        "description": ""
      },
      {
        "name": "resources",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dataFormats",
        "schema": "array",
        "description": ""
      },
      {
        "name": "spatialCoverage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "spatialResolution",
        "schema": "number",
        "description": ""
      },
      {
        "name": "geospatialExtent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "temporalCoverage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "temporalExtent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "temporalResolution",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workflowKeywords",
        "schema": "array",
        "description": ""
      },
      {
        "name": "taxonomyKeywords",
        "schema": "array",
        "description": ""
      },
      {
        "name": "accrualPeriodicity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issued",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "number",
        "description": ""
      },
      {
        "name": "published",
        "schema": "number",
        "description": ""
      },
      {
        "name": "publishedStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modified",
        "schema": "number",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricingDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "distributions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "approvalForAccessNumber",
        "schema": "number",
        "description": ""
      },
      {
        "name": "approvalForAccessStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "metadataContact",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lineage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "characterSet",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hierarchyLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataLanguage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataCharacterSet",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataStandardName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataStandardVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "coordinateReferenceSystemId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "spatialRepresentationType",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}",
    "method": "updateSingleEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Update a single data set catalog entry.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "entryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTRYTYPE"
      },
      {
        "name": "exchange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alternativeTitles",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scoringURI",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endpointKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isOwner",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "publisher",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "published",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "metadataModified",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "usedBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "derivedFrom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entitlements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entitlementsByIdentity",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dataReliability",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "license",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "licence",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "landingPage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resources",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dataFormats",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "pricingDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "spatialCoverage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "spatialResolution",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "geospatialExtent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "temporalCoverage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "temporalResolution",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accrualPeriodicity",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "distributions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "issued",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modified",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "keywords",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "topics",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workflowKeywords",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "taxonomyKeywords",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "concepts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dataSet",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "services",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sampleData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "image",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "coordinateReferenceSystemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "spatialRepresentationType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lineage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fromTemplate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadataContact",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "publicContact",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalForAccessNumber",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalForAccessStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "characterSet",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hierarchyLevel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadataLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadataCharacterSet",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadataStandardName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadataStandardVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draftStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "draftNotes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "publishedStatus",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/draft",
    "method": "discardDraftChanges",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Discards the draft changes on a data set catalog entry.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Draft changes were discarded."
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/draft",
    "method": "getDraftChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get the draft changes on a data set catalog entry.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/draft-status",
    "method": "setDraftStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Set the draft status for the data set catalog entry.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "status",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/fileDataset",
    "method": "getFileDatasetId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get file dataset id from dataset",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/fileDataset",
    "method": "createFileDataset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Create and attach file dataset",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/access",
    "method": "getEntitlements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get the entitlements on a data set.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/access",
    "method": "setEntitlements",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Set the entitlements and on a data set for all identities.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "entitlements",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/validationReport",
    "method": "getValidationReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get the schematron validation report using the data sets validation profile",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/draft/validationReport",
    "method": "getValidationReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get the schematron validation report using the data sets validation profile",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/images/{imageType}/{imageId}",
    "method": "getRawImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image",
    "typeScriptTag": "image",
    "description": "Get an image used in the catalogue.",
    "parameters": [
      {
        "name": "imageType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGETYPE"
      },
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGEID"
      },
      {
        "name": "thumbnail",
        "schema": "string",
        "required": false,
        "description": "Whether to provide a thumbnail image. If set to true and no thumbnail exists, the full image will be returned",
        "default": "false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The image for the data set."
      }
    ]
  },
  {
    "url": "/data-sets/{dataSetId}/image",
    "method": "setImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Set the image for a data set.",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The imageUrl for the data set."
      }
    ]
  },
  {
    "url": "/access-requests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccessRequest",
    "typeScriptTag": "accessRequest",
    "description": "",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "requestingEntityId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entityId",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The outstanding access requests for the data set."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/access-requests",
    "method": "createNewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccessRequest",
    "typeScriptTag": "accessRequest",
    "description": "",
    "parameters": [
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "requestingEntityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTINGENTITYID"
      },
      {
        "name": "requesterName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requesterEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestMessage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTMESSAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The outstanding access requests for the data set."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/access-requests/{requestId}",
    "method": "deleteRequestById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccessRequest",
    "typeScriptTag": "accessRequest",
    "description": "",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "dataSetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "97130f06-6242-463f-bf19-0dd6f5a58cfb"
      },
      {
        "name": "accepted",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dismiss access requests for the data set."
      }
    ]
  },
  {
    "url": "/import",
    "method": "dataSets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Import",
    "typeScriptTag": "import",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Import was successful."
      }
    ]
  },
  {
    "url": "/templates",
    "method": "listPermissionsToView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "List all templates you have permission to view.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates",
    "method": "createCatalogEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Create a new template for creating catalogue entries.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "dataSet",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entitlements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "creatorEntitlements",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "exchange",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{templateId}",
    "method": "deleteSpecificTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Delete a specific template",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{templateId}",
    "method": "getSpecificTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Get a specific template",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned from API responses, includes id and other required properties"
      }
    ]
  },
  {
    "url": "/templates/{templateId}",
    "method": "updateTemplateItem",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update a template",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataSet",
        "schema": "object",
        "description": ""
      },
      {
        "name": "entitlements",
        "schema": "array",
        "description": ""
      },
      {
        "name": "creatorEntitlements",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned from API responses, includes id and other required properties"
      }
    ]
  },
  {
    "url": "/templates/{templateId}",
    "method": "updateTemplateItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Template",
    "typeScriptTag": "template",
    "description": "Update a template",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "dataSet",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entitlements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "creatorEntitlements",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "exchange",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returned from API responses, includes id and other required properties"
      }
    ]
  },
  {
    "url": "/harvest/{group}/csw",
    "method": "xmlDataOnGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Harvest",
    "typeScriptTag": "harvest",
    "description": "Harvest xml data on the given group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/harvest/{group}/csw",
    "method": "xmlDataOnGroupPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Harvest",
    "typeScriptTag": "harvest",
    "description": "Harvest xml data on the given group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/harvest/{group}/dcat",
    "method": "getNonSpatialDataForGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataset",
    "typeScriptTag": "dataset",
    "description": "Get the DCAT metadata for the given group. This will retrieve metadata for all the non spatial datasets in the public domain.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Catalog API"
      apiBaseUrl="https://api-test.agrimetrics.co.uk/catalog"
      apiVersion=""
      endpoints={70}
      sdkMethods={99}
      schemas={158}
      parameters={322}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/agrimetrics/openapi.yaml"
      developerDocumentation="developer.agrimetrics.co.uk/reference/retrieve-api-key"
    />
  );
}
  