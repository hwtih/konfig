import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function KeapTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="keap-typescript-sdk"
      metaDescription={`With Keap, you'll easily capture, organize, track, and nurture all of your leads to increase sales and revenue.

To ensure your success, Keap also offers expert coaching, in-depth training, outstanding support, and a dedicated community of entrepreneurs.

Business owners, we're here to help you grow without the growing pains. You've built your business from the ground up. And no one knows it better than you do. But while the thought of letting go terrifies you, the idea of growing excites you.

You need to scale in a way that keeps your business healthy, your customers happy, and your team thriving. Keap's powerful sales and marketing automation engine is built to do exactly that, providing automated personalization features, strategic guidance, coaching, and an active user community to help every step of the way.

For 20 years, Keap has helped empower and liberate small businesses so they can strengthen their families, communities and the global economy. Keap originally pioneered the sales and marketing automation software market under the Infusionsoft brand, and is now breaking new ground with Pro and Max editions. Headquartered in Chandler, Arizona, the company is on a mission to simplify growth for 1 million small businesses worldwide by 2030.

Recent awards:
#1 Best Products for Sales
#1 All-in-one CRM
#3 Top 50 Products for Small Businesses
Top 100 Best Workplaces for Millennials in US`}
      company="Keap"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keap/logo.png"
      companyKebabCase="keap"
      clientNameCamelCase="keap"
      homepage="keap.com"
      lastUpdated={new Date("2024-03-27T20:29:17.115Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keap/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keap/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm","marketing","automation","small_business"]}
      methods={[
  {
    "url": "/v1/account/profile",
    "method": "getProfileInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Info",
    "typeScriptTag": "accountInfo",
    "description": "Retrieve account profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the company that owns/uses this account"
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
    "url": "/v1/account/profile",
    "method": "updateProfileInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Account Info",
    "typeScriptTag": "accountInfo",
    "description": "Updates an account profile",
    "parameters": [
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "business_goals",
        "schema": "array",
        "description": ""
      },
      {
        "name": "business_primary_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "business_secondary_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "business_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_ext",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about the company that owns/uses this account"
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
    "url": "/v1/affiliates",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List Affiliates",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "description": "Optional affiliate parent ID to query on"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": "Optional contact ID to query on"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Optional affiliate name to query on"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Count to offset the returned results by",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      },
      {
        "name": "parentId",
        "schema": "string",
        "description": "Optional affiliate code to query on"
      },
      {
        "name": "programId",
        "schema": "string",
        "description": "Optional affiliate program ID to query on"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Optional affiliate status to query on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates",
    "method": "createSingleAffiliate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "Create an affiliate",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notify_on_lead",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notify_on_sale",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "track_leads_for",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/affiliates/commissions",
    "method": "getCommissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List Commissions",
    "parameters": [
      {
        "name": "affiliateId",
        "schema": "integer",
        "description": "Affiliate to retrieve commissions for",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "Retrieve Affiliate Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/programs",
    "method": "listCommissionPrograms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List Commission Programs",
    "parameters": [
      {
        "name": "affiliateId",
        "schema": "integer",
        "description": "Id of the affiliate you would like programs for",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Count to offset the returned results by",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/redirectlinks",
    "method": "getRedirects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List Affiliate Redirects",
    "parameters": [
      {
        "name": "affiliateId",
        "schema": "string",
        "description": "Affiliate ID to search by"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Count to offset the returned results by",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/summaries",
    "method": "listSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List affiliate summaries",
    "parameters": [
      {
        "name": "affiliateIds",
        "schema": "array",
        "description": "Ids of the affiliates you would like a summary for"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/{affiliateId}/clawbacks",
    "method": "listClawbacks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List Affiliate clawbacks",
    "parameters": [
      {
        "name": "affiliateId",
        "schema": "string",
        "required": true,
        "description": "affiliateId",
        "example": "AFFILIATEID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Count to offset the returned results by",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Optional inclusive start date"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Optional inclusive end date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/{affiliateId}/payments",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "List Affiliate payments",
    "parameters": [
      {
        "name": "affiliateId",
        "schema": "integer",
        "required": true,
        "description": "affiliateId",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Count to offset the returned results by",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Inclusive start date"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Inclusive end date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/affiliates/{id}",
    "method": "getSingleAffiliate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Affiliate",
    "typeScriptTag": "affiliate",
    "description": "Retrieve an affiliate",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/appointments",
    "method": "listAllAppointments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "List Appointments",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Optionally find appointments with a contact",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/appointments",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Create an Appointment",
    "parameters": [
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
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remind_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "user",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/appointments/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Retrieve Appointment Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/appointments/model/customFields",
    "method": "addCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Create a Custom Field",
    "parameters": [
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
      },
      {
        "name": "group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "user_group_id",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/appointments/{appointmentId}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Delete an Appointment",
    "parameters": [
      {
        "name": "appointmentId",
        "schema": "integer",
        "required": true,
        "description": "appointmentId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/appointments/{appointmentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Retrieve an Appointment",
    "parameters": [
      {
        "name": "appointmentId",
        "schema": "integer",
        "required": true,
        "description": "appointmentId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/appointments/{appointmentId}",
    "method": "updateValues",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Update an Appointment",
    "parameters": [
      {
        "name": "appointmentId",
        "schema": "integer",
        "required": true,
        "description": "appointmentId",
        "example": 0
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
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remind_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "user",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/appointments/{appointmentId}",
    "method": "replaceValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Appointment",
    "typeScriptTag": "appointment",
    "description": "Replace an Appointment",
    "parameters": [
      {
        "name": "appointmentId",
        "schema": "integer",
        "required": true,
        "description": "appointmentId",
        "example": 0
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
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remind_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "user",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/campaigns",
    "method": "getAllCampaigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "List Campaigns",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      },
      {
        "name": "searchText",
        "schema": "string",
        "description": "Optional text to search"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/campaigns/goals/{integration}/{callName}",
    "method": "achieveGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Achieve API Goal",
    "parameters": [
      {
        "name": "callName",
        "schema": "string",
        "required": true,
        "description": "callName",
        "example": "CALLNAME"
      },
      {
        "name": "integration",
        "schema": "string",
        "required": true,
        "description": "integration",
        "example": "INTEGRATION"
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaignId}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Retrieve a Campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "campaignId",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of Campaign properties to include in the response. (The fields `goals` and `sequences` aren't included, by default.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/campaigns/{campaignId}/sequences/{sequenceId}/contacts",
    "method": "removeMultipleFromSequence",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Remove Multiple from Campaign Sequence",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "campaignId",
        "example": 0
      },
      {
        "name": "sequenceId",
        "schema": "integer",
        "required": true,
        "description": "sequenceId",
        "example": 0
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/campaigns/{campaignId}/sequences/{sequenceId}/contacts",
    "method": "addMultipleToSequence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Add Multiple to Campaign Sequence",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "campaignId",
        "example": 0
      },
      {
        "name": "sequenceId",
        "schema": "integer",
        "required": true,
        "description": "sequenceId",
        "example": 0
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaignId}/sequences/{sequenceId}/contacts/{contactId}",
    "method": "removeContactFromSequence",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Remove from Campaign Sequence",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "campaignId",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "sequenceId",
        "schema": "integer",
        "required": true,
        "description": "sequenceId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/campaigns/{campaignId}/sequences/{sequenceId}/contacts/{contactId}",
    "method": "addToSequence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign",
    "typeScriptTag": "campaign",
    "description": "Add to Campaign Sequence",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "campaignId",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "sequenceId",
        "schema": "integer",
        "required": true,
        "description": "sequenceId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "List Companies",
    "parameters": [
      {
        "name": "companyName",
        "schema": "string",
        "description": "Optional company name to query on"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/companies",
    "method": "createOrUpdateWithOptInReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Create a Company",
    "parameters": [
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_NAME"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fax_number",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "opt_in_reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Retrieve Company Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/companies/{companyId}",
    "method": "getSingleCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Retrieve a Company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "companyId",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/companies/{companyId}",
    "method": "updateWithOptInReason",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Update a Company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "companyId",
        "example": 0
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_NAME"
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fax_number",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "opt_in_reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/contacts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "List Contacts",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "Optional email address to query on"
      },
      {
        "name": "familyName",
        "schema": "string",
        "description": "Optional last name or surname to query on"
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": "Optional first name or forename to query on"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of Contact properties to include in the response. (Some fields such as `lead_source_id`, `custom_fields`, and `job_title` aren't included, by default.)"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "description": "How to order the data i.e. ascending (A-Z) or descending (Z-A)"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from on LastUpdated ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to on LastUpdated ex. `2017-01-01T22:17:59.039Z`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/contacts",
    "method": "createOrUpdateWithOptInReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create a Contact",
    "parameters": [
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "anniversary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contact_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email_addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fax_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lead_source_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "opt_in_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "origin",
        "schema": "object",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "preferred_locale",
        "schema": "string",
        "description": "",
        "example": "en_US"
      },
      {
        "name": "preferred_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "social_accounts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "spouse_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contacts",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create or Update a Contact",
    "parameters": [
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "anniversary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contact_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email_addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fax_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lead_source_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "opt_in_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "origin",
        "schema": "object",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "preferred_locale",
        "schema": "string",
        "description": "",
        "example": "en_US"
      },
      {
        "name": "preferred_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "social_accounts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "spouse_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "duplicate_option",
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
    "url": "/v1/contacts/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve Contact Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/contacts/model/customFields",
    "method": "addCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create a Custom Field",
    "parameters": [
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
      },
      {
        "name": "group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "user_group_id",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contacts/{contactId}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Delete a Contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/contacts/{contactId}",
    "method": "updateWithOptInReason",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Update a Contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "updateMask",
        "schema": "array",
        "description": "An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped."
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "anniversary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contact_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email_addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fax_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lead_source_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "opt_in_reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "origin",
        "schema": "object",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "phone_numbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "preferred_locale",
        "schema": "string",
        "description": "",
        "example": "en_US"
      },
      {
        "name": "preferred_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "social_accounts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "spouse_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
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
    "url": "/v1/contacts/{contactId}/creditCards",
    "method": "getCreditCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve Credit Cards",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/contacts/{contactId}/creditCards",
    "method": "addCreditCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create a Credit Card",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "card_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "card_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "consent_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiration_month",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiration_year",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maestro_issue_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maestro_start_date_month",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maestro_start_date_year",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name_on_card",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verification_code",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contacts/{contactId}/emails",
    "method": "listEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "List Emails",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Optional email address to query on"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/contacts/{contactId}/emails",
    "method": "createEmailRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Create an Email Record",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "clicked_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "headers",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "opened_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "original_provider",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "original_provider_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plain_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_source_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "received_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_from_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_from_reply_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_to_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENT_TO_ADDRESS"
      },
      {
        "name": "sent_to_bcc_addresses",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_to_cc_addresses",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contacts/{contactId}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Remove Applied Tags",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "ids",
        "example": "IDS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/contacts/{contactId}/tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "List Applied Tags",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/contacts/{contactId}/tags",
    "method": "applyTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Apply Tags",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contacts/{contactId}/tags/{tagId}",
    "method": "removeAppliedTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Remove Applied Tag",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "tagId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/contacts/{contactId}/utm",
    "method": "insertUtmFor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Insert UTMs for a Contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contact to insert UTMs for",
        "example": 0
      },
      {
        "name": "keapSourceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6088383224687662"
      },
      {
        "name": "utmCampaign",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "spring_sale"
      },
      {
        "name": "utmContent",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "textlink"
      },
      {
        "name": "utmMedium",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cpc"
      },
      {
        "name": "utmSource",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "google"
      },
      {
        "name": "utmTerm",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "financial_consulting"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contacts/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Retrieve a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "id",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of Contact properties to include in the response. (Some fields such as `lead_source_id`, `custom_fields`, and `job_title` aren't included, by default.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/emailAddresses/{email}",
    "method": "replaceEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Email Address",
    "typeScriptTag": "emailAddress",
    "description": "Replace an Email Address",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "email",
        "example": "EMAIL"
      },
      {
        "name": "opted_in",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/emails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "List Emails",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Optional Contact Id to find Emails for",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Optional email address to query on"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "ordered",
        "schema": "boolean",
        "description": "Optional boolean to turn off ORDER BY in SQL query",
        "default": true
      },
      {
        "name": "sinceSentDate",
        "schema": "string",
        "description": "Optional date to query on, emails sent since the provided date, must be present if untilDate is provided"
      },
      {
        "name": "untilSentDate",
        "schema": "string",
        "description": "Optional date to query on, email sent until the provided date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/emails",
    "method": "recordCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Create an Email Record",
    "parameters": [
      {
        "name": "clicked_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "headers",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "opened_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "original_provider",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "original_provider_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plain_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_source_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "received_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_from_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_from_reply_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_to_address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENT_TO_ADDRESS"
      },
      {
        "name": "sent_to_bcc_addresses",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sent_to_cc_addresses",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emails/queue",
    "method": "sendToContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Send an Email",
    "parameters": [
      {
        "name": "address_field",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plain_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emails/sync",
    "method": "createRecords",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Create a set of Email Records",
    "parameters": [
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "errors",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emails/unsync",
    "method": "batchUnsync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Un-sync a batch of Email Records",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emails/{id}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Delete an Email Record",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/emails/{id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Email",
    "typeScriptTag": "email",
    "description": "Retrieve an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/files",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "List Files",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Filter based on Contact Id, if user has permission to see Contact files.",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Filter files based on name, with '*' preceding or following to indicate LIKE queries."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "permission",
        "schema": "string",
        "description": "Filter based on the permission of files (USER or COMPANY), defaults to BOTH."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter based on the type of file."
      },
      {
        "name": "viewable",
        "schema": "string",
        "description": "Include public or private files in response (PUBLIC or PRIVATE), defaults to BOTH."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/files",
    "method": "uploadBase64Encoded",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Upload File",
    "parameters": [
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "public",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "file_data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_DATA"
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "file_association",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_ASSOCIATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/files/{fileId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Delete File",
    "parameters": [
      {
        "name": "fileId",
        "schema": "integer",
        "required": true,
        "description": "fileId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/files/{fileId}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Retrieve File",
    "parameters": [
      {
        "name": "fileId",
        "schema": "integer",
        "required": true,
        "description": "fileId",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of File properties to include in the response. (Some fields such as `file_data` aren't included, by default.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/files/{fileId}",
    "method": "replaceBase64EncodedFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Replace File",
    "parameters": [
      {
        "name": "fileId",
        "schema": "integer",
        "required": true,
        "description": "fileId",
        "example": 0
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      },
      {
        "name": "public",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "file_data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_DATA"
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "is_public",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "file_association",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_ASSOCIATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/hooks",
    "method": "listStoredHookSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "List Stored Hook Subscriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/hooks",
    "method": "createHookSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "Create a Hook Subscription",
    "parameters": [
      {
        "name": "eventKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hookUrl",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/hooks/event_keys",
    "method": "listEventTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "List Hook Event Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/hooks/{key}",
    "method": "deleteHookSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "Delete a Hook Subscription",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "key",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/hooks/{key}",
    "method": "getHookSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "Retrieve a Hook Subscription",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "key",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/hooks/{key}",
    "method": "modifySubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "Update a Hook Subscription",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "key",
        "example": "KEY"
      },
      {
        "name": "eventKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hookUrl",
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
    "url": "/v1/hooks/{key}/delayedVerify",
    "method": "delayedVerifySubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "Verify a Hook Subscription, Delayed",
    "parameters": [
      {
        "name": "xHookSecret",
        "schema": "string",
        "required": true,
        "description": "X-Hook-Secret",
        "example": "X-HOOK-SECRET"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "key",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/hooks/{key}/verify",
    "method": "verifyHookSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "REST Hooks",
    "typeScriptTag": "restHooks",
    "description": "Verify a Hook Subscription",
    "parameters": [
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "key",
        "example": "KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/locales/countries",
    "method": "listCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locale",
    "typeScriptTag": "locale",
    "description": "List Countries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/locales/countries/{countryCode}/provinces",
    "method": "listCountryProvinces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locale",
    "typeScriptTag": "locale",
    "description": "List a Country's Provinces",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "countryCode",
        "example": "COUNTRYCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/locales/defaultOptions",
    "method": "listDropdownDefaultOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locale",
    "typeScriptTag": "locale",
    "description": "List dropdown default options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/merchants",
    "method": "getAllAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchant",
    "typeScriptTag": "merchant",
    "description": "List Merchants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/notes",
    "method": "listAllNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "List Notes",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Filter based on the contact id assigned to the note.",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Filter based on the user id assigned to the note.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/notes",
    "method": "createNewNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Create a Note",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/notes/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Retrieve Note Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/notes/model/customFields",
    "method": "addCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Create a Custom Field",
    "parameters": [
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
      },
      {
        "name": "group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "user_group_id",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/notes/{noteId}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Delete a Note",
    "parameters": [
      {
        "name": "noteId",
        "schema": "integer",
        "required": true,
        "description": "noteId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/notes/{noteId}",
    "method": "getSingleNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Retrieve a Note",
    "parameters": [
      {
        "name": "noteId",
        "schema": "integer",
        "required": true,
        "description": "noteId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/notes/{noteId}",
    "method": "updateNoteValues",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Update a Note",
    "parameters": [
      {
        "name": "noteId",
        "schema": "integer",
        "required": true,
        "description": "noteId",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/notes/{noteId}",
    "method": "replaceAllValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Note",
    "typeScriptTag": "note",
    "description": "Replace a Note",
    "parameters": [
      {
        "name": "note",
        "schema": "integer",
        "required": true,
        "description": "note",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/oauth/connect/userinfo",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Info",
    "typeScriptTag": "userInfo",
    "description": "Retrieve User Info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/opportunities",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "List Opportunities",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "description": "Returns opportunities that match any of the contact's `given_name`, `family_name`, `company_name`, and `email_addresses` (searches `EMAIL1` only) fields as well as `opportunity_title`"
      },
      {
        "name": "stageId",
        "schema": "integer",
        "description": "Returns opportunities for the provided stage id",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Returns opportunities for the provided user id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/opportunities",
    "method": "createNewOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "Create an Opportunity",
    "parameters": [
      {
        "name": "affiliate_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "date_created",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "estimated_close_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "include_in_forecast",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "last_updated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next_action_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next_action_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "opportunity_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "opportunity_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_TITLE"
      },
      {
        "name": "projected_revenue_high",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "projected_revenue_low",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "stage",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/opportunities",
    "method": "replaceValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "Replace an Opportunity",
    "parameters": [
      {
        "name": "affiliate_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "date_created",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "estimated_close_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "include_in_forecast",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "last_updated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next_action_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "next_action_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "opportunity_notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "opportunity_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_TITLE"
      },
      {
        "name": "projected_revenue_high",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "projected_revenue_low",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "stage",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/opportunities/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "Retrieve Opportunity Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/opportunities/{opportunityId}",
    "method": "getSingleOpportunity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "Retrieve an Opportunity",
    "parameters": [
      {
        "name": "opportunityId",
        "schema": "integer",
        "required": true,
        "description": "opportunityId",
        "example": 0
      },
      {
        "name": "optionalProperties",
        "schema": "array",
        "description": "Comma-delimited list of Opportunity properties to include in the response. (Some fields such as `custom_fields` aren't included, by default.)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/opportunities/{opportunityId}",
    "method": "updateValues",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "Update an Opportunity",
    "parameters": [
      {
        "name": "opportunityId",
        "schema": "integer",
        "required": true,
        "description": "opportunityId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/opportunity/stage_pipeline",
    "method": "listStagePipeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunity",
    "typeScriptTag": "opportunity",
    "description": "List Opportunity Stage Pipeline",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/orders",
    "method": "getOrderList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "List Orders",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Returns orders for the provided contact id",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by. Dates are ordered by most recent at the top. Default is creation_date."
      },
      {
        "name": "paid",
        "schema": "boolean",
        "description": "Sets paid status of items to return"
      },
      {
        "name": "productId",
        "schema": "integer",
        "description": "Returns orders containing the provided product id",
        "example": 0
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/orders",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Create an Order",
    "parameters": [
      {
        "name": "contact_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "lead_affiliate_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_DATE"
      },
      {
        "name": "order_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "order_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_TITLE"
      },
      {
        "name": "order_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_TYPE"
      },
      {
        "name": "promo_codes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sales_affiliate_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders/model",
    "method": "getOrderModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Retrieve Custom Order Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/orders/{orderId}",
    "method": "deleteOrderWithoutPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Delete an Order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/orders/{orderId}",
    "method": "getOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Retrieve an Order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/orders/{orderId}/items",
    "method": "createOrderItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Create an Order Item",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "product_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders/{orderId}/items/{orderItemId}",
    "method": "deleteOrderItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Delete an Order Item",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      },
      {
        "name": "orderItemId",
        "schema": "integer",
        "required": true,
        "description": "orderItemId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/orders/{orderId}/paymentPlan",
    "method": "replacePayPlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Replace an Order Pay Plan",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      },
      {
        "name": "auto_charge",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "credit_card_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "days_between_payments",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "initial_payment_amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "initial_payment_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number_of_payments",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "payment_gateway",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "plan_start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLAN_START_DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/orders/{orderId}/payments",
    "method": "getOrderPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Retrieve Order Payments",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/orders/{orderId}/payments",
    "method": "createPaymentRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Create a Payment",
    "parameters": [
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      },
      {
        "name": "apply_to_commissions",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "charge_now",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "credit_card_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_gateway_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_method_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/orders/{orderId}/transactions",
    "method": "getOrderTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Retrieve Order Transactions",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Returns transactions for the provided contact id",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "orderId",
        "schema": "integer",
        "required": true,
        "description": "orderId",
        "example": 0
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/products",
    "method": "getAllProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "List Products",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "description": "Sets status of items to return"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/products",
    "method": "createNewProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create a Product",
    "parameters": [
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "product_desc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "product_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_NAME"
      },
      {
        "name": "product_price",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "product_short_desc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription_only",
        "schema": "boolean",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/products/sync",
    "method": "getSyncedProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Retrieve Synced Products",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "syncToken",
        "schema": "string",
        "description": "sync_token"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/products/{productId}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Delete a Product",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/products/{productId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Retrieve a Product",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/products/{productId}",
    "method": "updateValues",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Update a Product",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "product_desc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "product_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_NAME"
      },
      {
        "name": "product_price",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "product_short_desc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription_only",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/products/{productId}/image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Delete a product image",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/products/{productId}/image",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Upload a product image",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_DATA"
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/products/{productId}/subscriptions",
    "method": "subscribeNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create a Product Subscription",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "cycle_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CYCLE_TYPE"
      },
      {
        "name": "frequency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "number_of_cycles",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "plan_price",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subscription_plan_index",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/products/{productId}/subscriptions/{subscriptionId}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Delete a Product Subscription",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      },
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "subscriptionId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/products/{productId}/subscriptions/{subscriptionId}",
    "method": "subscriptionRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Retrieve a Product Subscription",
    "parameters": [
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "productId",
        "example": 0
      },
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "subscriptionId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/setting/application/configuration",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Setting",
    "typeScriptTag": "setting",
    "description": "Retrieve application configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/setting/application/enabled",
    "method": "getApplicationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Setting",
    "typeScriptTag": "setting",
    "description": "Retrieve application status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/setting/contact/optionTypes",
    "method": "listContactTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Setting",
    "typeScriptTag": "setting",
    "description": "List Contact types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/subscriptions",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "List Subscriptions",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Returns subscriptions for the provided contact id",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Create Subscription",
    "parameters": [
      {
        "name": "allow_duplicate",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_tax",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_charge",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "contact_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "credit_card_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "first_bill_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_gateway_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "sale_affiliate_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription_plan_id",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriptions/model",
    "method": "getSubscriptionModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Retrieve Subscription Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List Tags",
    "parameters": [
      {
        "name": "category",
        "schema": "integer",
        "description": "Category Id of tags to filter by",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Filter for tags with a specific name"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create Tag",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/categories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create Tag Category",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{id}",
    "method": "getTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Retrieve a Tag",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tags/{tagId}/companies",
    "method": "listCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List Tagged Companies",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "tagId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tags/{tagId}/contacts",
    "method": "removeFromContacts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Remove Tag from Contacts",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": "ids"
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "tagId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/tags/{tagId}/contacts",
    "method": "listTaggedContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List Tagged Contacts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "tagId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tags/{tagId}/contacts",
    "method": "applyToContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Apply Tag to Contacts",
    "parameters": [
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "tagId",
        "example": 0
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{tagId}/contacts/{contactId}",
    "method": "removeFromContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Remove Tag from Contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "contactId",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "tagId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/tasks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "List Tasks",
    "parameters": [
      {
        "name": "completed",
        "schema": "boolean",
        "description": "Sets completed status of items to return"
      },
      {
        "name": "contactId",
        "schema": "integer",
        "description": "contact_id"
      },
      {
        "name": "hasDueDate",
        "schema": "boolean",
        "description": "has_due_date"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "user_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Create a Task",
    "parameters": [
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
        "name": "completed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completion_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creation_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "jgraph_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "modification_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "remind_time",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tasks/model",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Retrieve Task Model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tasks/model/customFields",
    "method": "addCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Create a Custom Field",
    "parameters": [
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
      },
      {
        "name": "group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "user_group_id",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tasks/search",
    "method": "getByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Search Tasks",
    "parameters": [
      {
        "name": "completed",
        "schema": "boolean",
        "description": "Sets completed status of items to return"
      },
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Returns tasks for the provided contact id",
        "example": 0
      },
      {
        "name": "hasDueDate",
        "schema": "boolean",
        "description": "Returns tasks that have an 'action date' when set to true"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Attribute to order items by"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Returns tasks for the provided user id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tasks/{taskId}",
    "method": "removeTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Delete a Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "taskId",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v1/tasks/{taskId}",
    "method": "getSingleTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Retrieve a Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "taskId",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tasks/{taskId}",
    "method": "updateByValues",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Update a Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "taskId",
        "example": "TASKID"
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
        "name": "completed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completion_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creation_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "jgraph_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "modification_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "remind_time",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/tasks/{taskId}",
    "method": "replaceTaskValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Task",
    "typeScriptTag": "task",
    "description": "Replace a Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "taskId",
        "example": "TASKID"
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
        "name": "completed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completion_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contact",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creation_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "jgraph_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "modification_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "remind_time",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/transactions",
    "method": "listTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "List Transactions",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "description": "Returns transactions for the provided contact id",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Date to start searching from ex. `2017-01-01T22:17:59.039Z`"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Date to search to ex. `2017-01-01T22:17:59.039Z`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/transactions/{transactionId}",
    "method": "getTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "E-Commerce",
    "typeScriptTag": "eCommerce",
    "description": "Retrieve a Transaction",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "integer",
        "required": true,
        "description": "transactionId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/users",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [
      {
        "name": "includeInactive",
        "schema": "boolean",
        "description": "Include users that are Inactive in results, defaults to TRUE"
      },
      {
        "name": "includePartners",
        "schema": "boolean",
        "description": "Include partner users in results, defaults to TRUE"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Sets a total of items to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Sets a beginning range of items to return",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
    "url": "/v1/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create a User",
    "parameters": [
      {
        "name": "admin",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "given_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GIVEN_NAME"
      },
      {
        "name": "partner",
        "schema": "boolean",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/{userId}/signature",
    "method": "getEmailSignature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User email signature",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "userId",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Keap REST API"
      apiBaseUrl="https://api.infusionsoft.com/crm/rest"
      apiVersion="1.70.0.652598"
      endpoints={92}
      sdkMethods={141}
      schemas={740}
      parameters={663}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keap/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keap/openapi.yaml"
      developerDocumentation="developer.infusionsoft.com/docs/rest/"
    />
  );
}
  