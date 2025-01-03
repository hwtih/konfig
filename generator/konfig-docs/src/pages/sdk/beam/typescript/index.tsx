import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BeamTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="beam-typescript-sdk"
      metaDescription={`Beam is the intelligent way to manage risk with laser precision in real time.

Beam's state-of-the-art software solution sources traditional and alternative data to give you a real-time affordability analysis of your customer and makes manual analysis, fragmented data sources, high costs and slow processes a thing of the past so that you and your team get better data with sharper insight.

Beam makes it easy and seamless to access multiple data sources like bank statements from multiple accounts, bureau data and alternative data for thin-file customers, giving you the most up-to-date and precise view of your customer's financial position so that your organisation can make accelerated credit decisions.

Our completely digital customer onboarding process allows for near-instant credit approval.

Beam's API-first solution reduces credit decision-making time from days to seconds while helping you forecast your customer's income and expenses instantly. Beam Console's audit-ready reporting dashboard lets your admin, risk and underwriting teams easily and efficiently manage your customer data from one place.`}
      company="Beam"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/logo.jpg"
      companyKebabCase="beam"
      clientNameCamelCase="beam"
      homepage="beamlend.com/"
      lastUpdated={new Date("2024-03-29T20:45:46.288Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","financial_services","risk_management","data_management","credit_decisions","financial_data"]}
      methods={[
  {
    "url": "/v1/applications/applications/{application_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Get Application By Id",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/applicants/{applicant_id}",
    "method": "getApplicantDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Get Applicant",
    "parameters": [
      {
        "name": "applicantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/applications/revet",
    "method": "submitRevetApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Revet Submission",
    "parameters": [
      {
        "name": "applications",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "application_config_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/applications/revet_upload",
    "method": "submitCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Revet Csv Submission",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "application_config_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/get_template",
    "method": "getCsvTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Revet Csv Template",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/application_configs/connections_available",
    "method": "listConnectionsAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application_configs",
    "typeScriptTag": "applicationConfigs",
    "description": "Get Connections Available",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/application_configs/{app_config_id}",
    "method": "getApplicationConfigById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application_configs",
    "typeScriptTag": "applicationConfigs",
    "description": "Get Application Configs By Id",
    "parameters": [
      {
        "name": "appConfigId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/personal_info_connections/{connection_id}",
    "method": "getOrganisationsPersonalConnectionsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "personal_info_connections",
    "typeScriptTag": "personalInfoConnections",
    "description": "Get Organisation Personal Connections By Id",
    "parameters": [
      {
        "name": "connectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/transactions/labelled",
    "method": "getLabelledTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Labelled Transactions",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/affordability",
    "method": "getAffordability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Affordability",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/income_analysis",
    "method": "getIncomeAnalysis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Income Analysis",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/risk_insights",
    "method": "getRiskInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Risk Insights",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/liquidity_score",
    "method": "getLiquidityScore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Liquidity Score",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/expenses_analysis",
    "method": "getExpenseInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Expense Insights",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/recrunch",
    "method": "rerunCrunchAnalysis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Rerun Crunch Analysis",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bank_connections/{application_id}/rethread",
    "method": "rerunThreadAnalysis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Rerun Thread Analysis",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions/{application_id}",
    "method": "getLabelledTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Labelled Transactions",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/liquidity/{application_id}",
    "method": "getLiquidityScore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bank_connections",
    "typeScriptTag": "bankConnections",
    "description": "Get Liquidity Score",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing/outstanding_bill_amount",
    "method": "getOutstandingBillAmount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "billing",
    "typeScriptTag": "billing",
    "description": "Get Outstanding Bill Amount",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing/billable_events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "billing",
    "typeScriptTag": "billing",
    "description": "List Events",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing/pricing",
    "method": "getPricing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "billing",
    "typeScriptTag": "billing",
    "description": "Get Pricing",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/payments/peach",
    "method": "getPeachWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payments",
    "typeScriptTag": "payments",
    "description": "Peach Webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/payments/peach",
    "method": "createPeachWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payments",
    "typeScriptTag": "payments",
    "description": "Peach Webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/applications",
    "method": "getOrganisationApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Get Organisation Applications",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/applicants",
    "method": "getApplicantsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Get Organisations Applicants",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/applicants",
    "method": "submitApplicant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Create Applicant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "applications",
    "typeScriptTag": "applications",
    "description": "Create Application",
    "parameters": [
      {
        "name": "application_config_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      },
      {
        "name": "applicant_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5eb7cf5a86d9755df3a6c593"
      },
      {
        "name": "redirect_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REDIRECT_URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organisations",
    "typeScriptTag": "organisations",
    "description": "Get Organisation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/application_configs/data_point_args",
    "method": "getDataPointArgs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application_configs",
    "typeScriptTag": "applicationConfigs",
    "description": "Get Data Point Args",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/application_configs",
    "method": "getByOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application_configs",
    "typeScriptTag": "applicationConfigs",
    "description": "Get Application Configs By Organisation",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/application_configs/application_configs",
    "method": "createConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "application_configs",
    "typeScriptTag": "applicationConfigs",
    "description": "Create Application Config",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "connections",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "default_redirect_url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/personal_info_connections",
    "method": "getOrganisationsPersonalConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "personal_info_connections",
    "typeScriptTag": "personalInfoConnections",
    "description": "Get Organisations Personal Connections",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/white_label/config",
    "method": "updateOrgConfig",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "white_label",
    "typeScriptTag": "whiteLabel",
    "description": "Update Org Whitelabel",
    "parameters": [
      {
        "name": "display_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primary_colour_hex",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondary_colour_hex",
        "schema": "string",
        "description": ""
      },
      {
        "name": "image_base64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "welcome_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "welcome_description",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="FastAPI"
      apiBaseUrl="https://api.beamlend.com"
      apiVersion="0.1.0"
      endpoints={31}
      sdkMethods={33}
      schemas={126}
      parameters={41}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beam/openapi.yaml"
      developerDocumentation="docs.beamlend.com/api/"
    />
  );
}
  