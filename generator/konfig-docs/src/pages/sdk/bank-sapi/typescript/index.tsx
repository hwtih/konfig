import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BankSapiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="banks-api-typescript-sdk"
      metaDescription={`We develop and operate REST-APIs and GUIs all around the topic of finance. As a specialised connectivity and payment provider, we are fully dedicated to the growth areas of Open Banking and Open Finance.

To make this possible, we provide account information and offer payment initiation services on our regulated and secure platform as a payment institution approved by the German authorities (BaFin).

Due to our advanced, AI-based data analytics, we offer high-performance value-added services for a wide range of use cases (e.g. contract recognition, age verification, KYC light based on account data or affordability checks).

In addition, we realise and operate your personal finance or business finance application as a web portal or mobile app cost-effectively with our front-end technology platform.

With our SaaS and ASP solutions, we maximally reduce complexity for our clients from a multitude of industries (e.g. insurance companies, ERP & accounting, financial advisory) and enable new use cases and business models for them.

BANKSapi Technology GmbH is a venture of Finconomy AG.


Imprint: https://banksapi.de/impressum/`}
      company="BANKSapi"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/logo.png"
      companyKebabCase="bank-sapi"
      clientNameCamelCase="banksApi"
      homepage="banksapi.de/en/"
      lastUpdated={new Date("2024-03-29T21:02:06.014Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","open_banking","fintech","payments","financial_technology","banking","banking_api"]}
      methods={[
  {
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users",
    "method": "getActivatedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Get Users",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "includeInactive",
        "schema": "boolean",
        "description": "Whether or not to also include inactive users",
        "example": true,
        "default": false
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
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users",
    "method": "createTenantUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Create User",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Returns with a location header under which the user data can be retrieved."
      }
    ]
  },
  {
    "url": "/auth/oauth2/token",
    "method": "createToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Create Token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The OAuth2 token is basically a string that is passed around in the communication between our services and you, and to which certain permissions depend."
      },
      {
        "statusCode": "401",
        "description": "The basic authorization header was not sent or the value was incorrect."
      }
    ]
  },
  {
    "url": "/auth/mgmt/v1/tenants",
    "method": "getTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Get Tenants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users/{user-id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Delete User",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User reference of the user",
        "example": "1c5b33f6-9c4d-11e6-ba80-480fcfb9550f"
      },
      {
        "name": "reftype",
        "schema": "string",
        "description": "Reference type of user ID (\"id\" (https://docs.banksapi.de/ or \"username\")",
        "example": "username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns HTTP status of 200 (https://docs.banksapi.de/"
      },
      {
        "statusCode": "405",
        "description": "Returns HTTP status of 405 (Method Not Allowed) if user has not been deactivated."
      }
    ]
  },
  {
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users/{user-id}",
    "method": "getActivatedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Get User",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User reference of the user",
        "example": "1c5b33f6-9c4d-11e6-ba80-480fcfb9550f"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object represents a user"
      }
    ]
  },
  {
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users/{user-id}",
    "method": "changeUserDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Change user details",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User reference of the user",
        "example": "1c5b33f6-9c4d-11e6-ba80-480fcfb9550f"
      },
      {
        "name": "reftype",
        "schema": "string",
        "description": "Reference type of user ID (\"id\" (https://docs.banksapi.de/ or \"username\")",
        "example": "username"
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Change successful"
      },
      {
        "statusCode": "409",
        "description": "Username already exists"
      }
    ]
  },
  {
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users/{user-id}/deactivate",
    "method": "deactivateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Deactivate User",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User reference of the user",
        "example": "1c5b33f6-9c4d-11e6-ba80-480fcfb9550f"
      },
      {
        "name": "reftype",
        "schema": "string",
        "description": "Reference type of user ID (\"id\" (https://docs.banksapi.de/ or \"username\")",
        "example": "username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns HTTP status of 200 (https://docs.banksapi.de/"
      }
    ]
  },
  {
    "url": "/auth/mgmt/v1/tenants/{tenant-name}/users/{user-id}/reactivate",
    "method": "reactivateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Reactivate User",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant name plays a role in using the API. The tenant name is a URL component in the management API.",
        "example": "demo"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User reference of the user",
        "example": "1c5b33f6-9c4d-11e6-ba80-480fcfb9550f"
      },
      {
        "name": "reftype",
        "schema": "string",
        "description": "Reference type of user ID (\"id\" (https://docs.banksapi.de/ or \"username\")",
        "example": "username"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "firstname",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns HTTP status of 200 (https://docs.banksapi.de/"
      }
    ]
  },
  {
    "url": "/auth/oauth2/revoke",
    "method": "revokeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Revoke Token",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns HTTP status of 200 (https://docs.banksapi.de/"
      }
    ]
  },
  {
    "url": "/auth/oauth2/introspect",
    "method": "tokenInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Introspect Token",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "The Token to introspect",
        "example": "0defaced-1337-d00d-c0de-face8badcafe"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The OAuth2 token is basically a string that is passed around in the communication between our services and you, and to which certain permissions depend."
      },
      {
        "statusCode": "400",
        "description": "No token was provided."
      },
      {
        "statusCode": "401",
        "description": "The basic authorization header was not sent or the value was incorrect."
      },
      {
        "statusCode": "403",
        "description": "The provided token is not valid."
      }
    ]
  },
  {
    "url": "/encrypt",
    "method": "plaintext",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Encrypt",
    "typeScriptTag": "encrypt",
    "description": "Encrypt plaintexts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/v2",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get Providers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers/v2/coredata",
    "method": "listCoreData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get Providers core data",
    "parameters": [
      {
        "name": "capability",
        "schema": "string",
        "required": false,
        "description": "Filter providers by capability"
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
    "url": "/providers/v2/statistics/jobs",
    "method": "getJobStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get Providers job statistics",
    "parameters": [
      {
        "name": "days",
        "schema": "integer",
        "required": false,
        "description": "Specifies the number of past days for fetching job statistics. When used together with \"hours\", their values are summed. If none of the parameters are specified, 2 hours are fetched."
      },
      {
        "name": "hours",
        "schema": "integer",
        "required": false,
        "description": "Specifies the number of past hours for fetching job statistics. When used together with \"days\", their values are summed. If none of the parameters are specified, 2 hours are fetched."
      },
      {
        "name": "ebics",
        "schema": "boolean",
        "required": false,
        "description": "If only EBICS jobs should be considered for the response.",
        "example": false
      },
      {
        "name": "sca",
        "schema": "boolean",
        "required": false,
        "description": "If only provider logos with at least one job including a strong customer authentication (https://docs.banksapi.de/ should be considered for the response. In case of `false` it will not be checked whether there was an SCA or not.",
        "example": false
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
    "url": "/providers/v2/{provider-id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get Provider",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "ID of a provider",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider information"
      },
      {
        "statusCode": "404",
        "description": "If the URL does not point to a provider, you will get the HTTP status 404 (Not found)."
      }
    ]
  },
  {
    "url": "/providers/v2/{provider-id}/ebics",
    "method": "getEbicsInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get Provider EBICS Info",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "ID of a provider",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Provider EBICS information"
      },
      {
        "statusCode": "404",
        "description": "If the URL does not point to a provider, you will get the HTTP status 404 (Not found)."
      }
    ]
  },
  {
    "url": "/customer/v2",
    "method": "getObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Get Customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Customer object maps the data of the unique user on the interface. It also forms the entry point into the deeper functions of the interface."
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge",
    "method": "removeAllBankAccesses",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Delete All Bank Accesses",
    "parameters": [
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The HTTP status 200 returns without any further response body."
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Bank Accesses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Collection of bank accesses as an object. For each bank access, the object will contain properties where the name is the *id* of the bank access and the value is the bank access data."
      },
      {
        "statusCode": "401",
        "description": "The bearer authorization header was not sent or the value was incorrect."
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge",
    "method": "addBankAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Add Bank Access",
    "parameters": [
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      },
      {
        "name": "refresh",
        "schema": "boolean",
        "required": false,
        "description": "If the bank access already exists, regardless of the **background** update, all revenues and information are retrieved by the provider, if true",
        "example": false
      },
      {
        "name": "queryTanSettings",
        "schema": "boolean",
        "required": false,
        "description": "Flag to ignore saved TAN-settings and query them.",
        "example": true
      },
      {
        "name": "headOnly",
        "schema": "boolean",
        "required": false,
        "description": "Flag to solely fetch header data of the account without balances and transactions (e.g. to get the list of selectable bank products). If this flag is `true` the flag `sync` in the request payload has to be `false` and no `selectedBankProducts` can be specified.",
        "example": true
      },
      {
        "name": "maxTransactions",
        "schema": "string",
        "required": false,
        "description": "Indicator if transactions older than 90 days should be fetched."
      },
      {
        "name": "paymentAccountsOnly",
        "schema": "boolean",
        "required": false,
        "description": "Flag to solely fetch payment accounts. Other accounts will be ignored, which can result in fewer SCAs.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "451",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": "The started request could not be answered in the given time"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}",
    "method": "deleteBankAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Delete Bank Access",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns without any further response body."
      },
      {
        "statusCode": "404",
        "description": "The bank access with the given access-id was not found / does not exist."
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}",
    "method": "getSpecificBankAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Bank Access",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": "The started request could not be answered in the given time"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/issues",
    "method": "getIssues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Bank Access Issues",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
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
    "url": "/customer/v2/bankzugaenge/{access-id}/challenge/pdf",
    "method": "getBankAccessChallengePdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Bank Access Challenge PDF",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The PDF file for the given access-id was not found / does not exist."
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}",
    "method": "getBankProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Bank Product",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": "The started request could not be answered in the given time"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/kontoumsaetze",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Transactions",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Only return transactions with a booking date after this Date/Time (ISO 8601 formatted timestamp); may be used with `to` to specify a time window",
        "example": "2022-02-20T00:00:00.000Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Only return transactions with a booking date before this Date/Time (ISO 8601 formatted timestamp); may be used with `from` to specify a time window",
        "example": "2022-03-20T00:00:00.000Z"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "The resulting transactions will each contain Categorization objects of the corresponding tag type"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Filter to apply to result set. Filter expression must be URL-encoded. Filter expression must be in the form `<field-selector><predicate><value>`.",
        "example": "identifier.batchId%3Df257c0de-c5f0-4ffd-b942-94b1e631babb"
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
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/kontoumsaetze",
    "method": "pushTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Builder",
    "typeScriptTag": "customerBankAccessBuilder",
    "description": "Push transactions for the given product",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/kontoumsaetze/{transaction-id}",
    "method": "modifyTransactionCategorization",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "modify categorisation of transactions",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "ID of a transaction",
        "example": "6f8b9367-22a9-4026-bf8e-1944d435b408"
      },
      {
        "name": "changeExisting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "createRule",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "transaction was successfully modified"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "transaction was not found"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/depotpositionen",
    "method": "getDepotPositions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access",
    "typeScriptTag": "customerBankAccess",
    "description": "Get Portfolio",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
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
    "url": "/customer/v2/bankzugaenge/{access-id}/consent",
    "method": "startScaRenewal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Consent",
    "typeScriptTag": "customerBankAccessConsent",
    "description": "Start SCA",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      },
      {
        "name": "queryTanSettings",
        "schema": "boolean",
        "required": false,
        "description": "Flag to ignore saved TAN-settings and query them.",
        "example": true
      },
      {
        "name": "maxTransactions",
        "schema": "string",
        "required": false,
        "description": "Indicator if transactions older than 90 days should be fetched."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "451",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/consent/{consent-id}",
    "method": "pollStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Bank Access Consent",
    "typeScriptTag": "customerBankAccessConsent",
    "description": "Poll Bank Access Consent",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
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
    "url": "/customer/v2/bankzugaenge/{access-id}/consent/{consent-id}",
    "method": "updateScaMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Consent",
    "typeScriptTag": "customerBankAccessConsent",
    "description": "Update Bank Access Consent",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
      },
      {
        "name": "chosenScaMethodId",
        "schema": "string",
        "description": "",
        "example": "942"
      },
      {
        "name": "chosenScaMedia",
        "schema": "string",
        "description": "",
        "example": "Mobile #1"
      },
      {
        "name": "scaAuthenticationData",
        "schema": "string",
        "description": "",
        "example": "123456"
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
    "url": "/customer/v2/bankzugaenge/{access-id}/consent/{consent-id}/cancel",
    "method": "cancelScaRedirect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Consent",
    "typeScriptTag": "customerBankAccessConsent",
    "description": "Cancel Bank Access Consent",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
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
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/payment/single-transfer",
    "method": "initiateSingleTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Payment",
    "typeScriptTag": "customerBankAccessPayment",
    "description": "Initiate a single transfer",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      },
      {
        "name": "transferDetails",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Bank Access Credentials could not be found"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/payment/bulk-transfer",
    "method": "initiateBulkTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Payment",
    "typeScriptTag": "customerBankAccessPayment",
    "description": "Initiate a bulk transfer",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      },
      {
        "name": "transferDetails",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Bank Access Credentials could not be found"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/payment/single-debit",
    "method": "initiateSingleDebit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Payment",
    "typeScriptTag": "customerBankAccessPayment",
    "description": "Initiate a single debit",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Bank Access Credentials could not be found"
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/{product-id}/payment/bulk-debit",
    "method": "initiateBulkDebit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Bank Access Payment",
    "typeScriptTag": "customerBankAccessPayment",
    "description": "Initiate a bulk debit",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Bank Access Credentials could not be found"
      }
    ]
  },
  {
    "url": "/customer/v2/ueberweisung/{provider-id}/{product-id}",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Ueberweisung",
    "typeScriptTag": "customerUeberweisung",
    "description": "Create Transfer",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "ID of a provider",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "BankAccess and Transfer inherit from this object. It indicates that in some cases, SCA may be needed to interact with the inheriting object."
      }
    ]
  },
  {
    "url": "/customer/v2/ueberweisung/bulk/{provider-id}/{product-id}",
    "method": "createBulkTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Ueberweisung",
    "typeScriptTag": "customerUeberweisung",
    "description": "Create Bulk Transfer",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "ID of a provider",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "BankAccess and Transfer inherit from this object. It indicates that in some cases, SCA may be needed to interact with the inheriting object."
      }
    ]
  },
  {
    "url": "/customer/v2/ueberweisung/{provider-id}/{product-id}/{payment-id}",
    "method": "submitTan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer Ueberweisung",
    "typeScriptTag": "customerUeberweisung",
    "description": "Submit TAN",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "ID of a provider",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "d308a7ae-b762-4a20-8996-7fa22aed6b73"
      },
      {
        "name": "tan",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result of a request if further interaction is required"
      }
    ]
  },
  {
    "url": "/customer/v2/ueberweisung/bulk/{provider-id}/{product-id}/{payment-id}",
    "method": "submitTanBulk",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer Ueberweisung",
    "typeScriptTag": "customerUeberweisung",
    "description": "Submit TAN (https://docs.banksapi.de/",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "ID of a provider",
        "example": "00000000-0000-0000-0000-000000000000"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "ID of a banking product",
        "example": "DE00123456789012345678"
      },
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "d308a7ae-b762-4a20-8996-7fa22aed6b73"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Result of a request if further interaction is required"
      }
    ]
  },
  {
    "url": "/customer/v2/payment/single-transfer",
    "method": "initiateSingleTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Initiate Single Transfer",
    "parameters": [
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      },
      {
        "name": "queryTanSettings",
        "schema": "boolean",
        "required": false,
        "description": "Flag to ignore saved TAN-settings and query them.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "451",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/v2/payment/single-transfer/{payment-id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Get Single Transfer",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "d308a7ae-b762-4a20-8996-7fa22aed6b73"
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
    "url": "/customer/v2/payment/bulk-transfer",
    "method": "initiateBulkTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Initiate Bulk Transfer",
    "parameters": [
      {
        "name": "customerIpAddress",
        "schema": "string",
        "required": true,
        "description": "The IP address of the customer. Must be a public IP address (IPv4, IPv6)",
        "example": "154.25.45.133"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "A callback URL.",
        "example": "https://demo-tenant.com/callback?state=123"
      },
      {
        "name": "queryTanSettings",
        "schema": "boolean",
        "required": false,
        "description": "Flag to ignore saved TAN-settings and query them.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "451",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/v2/payment/bulk-transfer/{payment-id}",
    "method": "getStatusBulkTransfer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Get Bulk Transfer",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "d308a7ae-b762-4a20-8996-7fa22aed6b73"
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
    "url": "/customer/v2/payment/single-debit",
    "method": "initiateSingleDebit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Initiate Single Debit",
    "parameters": [
      {
        "name": "queryTanSettings",
        "schema": "boolean",
        "required": false,
        "description": "Flag to ignore saved TAN-settings and query them.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "451",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/v2/payment/single-debit/{payment-id}",
    "method": "getDebitStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Get Single Debit",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "d308a7ae-b762-4a20-8996-7fa22aed6b73"
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
    "url": "/customer/v2/payment/bulk-debit",
    "method": "initiateBulkDebit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Initiate Bulk Debit",
    "parameters": [
      {
        "name": "queryTanSettings",
        "schema": "boolean",
        "required": false,
        "description": "Flag to ignore saved TAN-settings and query them.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "451",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/v2/payment/bulk-debit/{payment-id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Payment",
    "typeScriptTag": "customerPayment",
    "description": "Get Bulk Debit",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "d308a7ae-b762-4a20-8996-7fa22aed6b73"
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
    "url": "/customer/v2/consent/{consent-id}",
    "method": "getCurrentStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Consent",
    "typeScriptTag": "customerConsent",
    "description": "Get Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
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
    "url": "/customer/v2/consent/{consent-id}",
    "method": "submitScaData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Consent",
    "typeScriptTag": "customerConsent",
    "description": "Update Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
      },
      {
        "name": "chosenScaMethodId",
        "schema": "string",
        "description": "",
        "example": "942"
      },
      {
        "name": "chosenScaMedia",
        "schema": "string",
        "description": "",
        "example": "Mobile #1"
      },
      {
        "name": "scaAuthenticationData",
        "schema": "string",
        "description": "",
        "example": "123456"
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
    "url": "/customer/v2/consent/{consent-id}/poll",
    "method": "pollStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Consent",
    "typeScriptTag": "customerConsent",
    "description": "Poll Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
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
    "url": "/customer/v2/consent/{consent-id}/cancel",
    "method": "cancelScaRedirect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Consent",
    "typeScriptTag": "customerConsent",
    "description": "Cancel a Consent",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ID of the consent",
        "example": "3e97fa51-ce7b-42a0-9101-50fd67dbc3e7"
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
    "url": "/customer/v2/regprotect/sessions",
    "method": "invalidateSessions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer REG/Protect",
    "typeScriptTag": "customerRegProtect",
    "description": "Delete all REG/Protect sessions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The HTTP status 200 returns without any further response body."
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/{access-id}/selectedbankproducts",
    "method": "changeBankProductSelection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer REG/Protect",
    "typeScriptTag": "customerRegProtect",
    "description": "Change bank product selection",
    "parameters": [
      {
        "name": "accessId",
        "schema": "string",
        "required": true,
        "description": "ID of the bank access",
        "example": "d23710a9-8e4b-4595-b01c-dad9499c9fdb"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/v2/bankzugaenge/builder",
    "method": "createInstance",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer Bank Access Builder",
    "typeScriptTag": "customerBankAccessBuilder",
    "description": "Create Bank Access Builder",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "7cc37535-6d50-4ec5-82df-31e4fa19c271"
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "92858552-1f5f-4264-8c37-67edd4b7af60"
      },
      {
        "name": "bankprodukte",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="BANKS/Connect API Reference"
      apiBaseUrl="https://banksapi.io"
      apiVersion="2.0"
      endpoints={48}
      sdkMethods={57}
      schemas={94}
      parameters={138}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/banksapi/openapi.yaml"
      developerDocumentation="docs.banksapi.de/"
    />
  );
}
  