import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RealcubeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="realcube-typescript-sdk"
      metaDescription={`Realcube is the cloud solution for smart and flexible digitilization in real estate management. Our API-first platform is here to revolutionize the real estate industry. It is a one-stop-shop for intelligent solutions which are adaptive to every client's individual needs.

Realcube's ecosystem offers a growing number of applications from our valuable and industry-leading partners which aggregate the customer's data. It is worth mentioning that we keep our customers' data privacy and well-being as our top priority.
At Realcube, we enable the real estate companies and their contractual partners to consolidate their data in our state-of-the-art platform. This creates a uniform database that gives access to asset managers and other management levels to all relevant information at all times, just a click away!

Have we grabbed your interest in our innovative solution for your real estate management?
Book a free demo today!

For more information feel free to visit our website or contact us at:
info@realcube.com`}
      company="Realcube"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/logo.png"
      companyKebabCase="realcube"
      clientNameCamelCase="realcube"
      homepage="realcube.com"
      lastUpdated={new Date("2024-03-29T23:25:02.951Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/favicon.png"
      // Missing contactUrl
      contactEmail="uwe.forgber@realcube.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["real_estate"]}
      methods={[
  {
    "url": "/v1/platform_configs",
    "method": "showAllConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "platform_configs",
    "typeScriptTag": "platformConfigs",
    "description": "Shows the platform_configs",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/platform_configs",
    "method": "createNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "platform_configs",
    "typeScriptTag": "platformConfigs",
    "description": "Creates a platform_config within the current organisation",
    "parameters": [],
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/platform_configs/{platform_config_id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "platform_configs",
    "typeScriptTag": "platformConfigs",
    "description": "Marks a platform_config as deleted within the current organisation.",
    "parameters": [
      {
        "name": "platformConfigId",
        "schema": "string",
        "required": true,
        "description": "ID of the platform_config you want to delete",
        "example": "PLATFORM_CONFIG_ID"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/platform_configs/{platform_config_id}",
    "method": "updateWithinOrganisation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "platform_configs",
    "typeScriptTag": "platformConfigs",
    "description": "Updates an platform_config within the current organisation.",
    "parameters": [
      {
        "name": "platformConfigId",
        "schema": "string",
        "required": true,
        "description": "ID of the platform_config you want to update",
        "example": "PLATFORM_CONFIG_ID"
      },
      {
        "name": "landing_page_marketing",
        "schema": "object",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns all users within the given account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID customer account to filter the users."
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The page to paginate the users."
      },
      {
        "name": "perPage",
        "schema": "string",
        "required": false,
        "description": "The number of users for a page"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Creates a user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/log_in",
    "method": "authenticateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Login",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/refresh_token",
    "method": "refreshToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Refresh token",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/{user_id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete the user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/{user_id}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Updates the user.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID customer account"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user to update",
        "example": 0
      },
      {
        "name": "resetPasswordToken",
        "schema": "string",
        "description": "The reset token of the user"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/log_out",
    "method": "invalidateApiToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Invalidates the current api token",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users/reset_password_instructions",
    "method": "sendResetInstructions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Sends reset password instructions to the user's email address (in german & english).",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "redirect_url",
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
    "url": "/v1/users/send_invitation",
    "method": "sendInvitation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Sends invitation to the user's email address (in german & english).",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "redirect_url",
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
    "url": "/v1/roles",
    "method": "getAllRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Returns all roles",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/roles",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Creates a Role",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/roles/{role_id}",
    "method": "removeRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Deletes the Role",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Role to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/roles/{role_id}",
    "method": "showRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Shows a Role",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Role to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/roles/{role_id}",
    "method": "updateRole",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "roles",
    "typeScriptTag": "roles",
    "description": "Updates a Role",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "roleId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Role to update",
        "example": 0
      },
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
        "name": "role_policy_maps_attributes",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/role_policies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "role_policies",
    "typeScriptTag": "rolePolicies",
    "description": "Returns all Role Policies",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/role_policies",
    "method": "createPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "role_policies",
    "typeScriptTag": "rolePolicies",
    "description": "Creates a Role Policy",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/role_policies/{role_policy_id}",
    "method": "deletePolicy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "role_policies",
    "typeScriptTag": "rolePolicies",
    "description": "Deletes the Role Policy",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "rolePolicyId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Role Policy to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/role_policies/{role_policy_id}",
    "method": "showRolePolicy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "role_policies",
    "typeScriptTag": "rolePolicies",
    "description": "Shows a Role Policy",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "rolePolicyId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Role Policy to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/role_policies/{role_policy_id}",
    "method": "updatePolicy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "role_policies",
    "typeScriptTag": "rolePolicies",
    "description": "Updates a Role Policy",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "rolePolicyId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Role Policy to update",
        "example": 0
      },
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
        "name": "role_policy_maps_attributes",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tenants/{boarding_type}",
    "method": "listForBoardingType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tenants",
    "typeScriptTag": "tenants",
    "description": "Shows all tenants",
    "parameters": [
      {
        "name": "boardingType",
        "schema": "string",
        "required": true,
        "description": "The type of boarding: onboarding or offboarding",
        "example": "BOARDING_TYPE"
      },
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The id of the customer account",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "The starting date for new tenant",
        "example": "2024-03-29"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "The ending date for new tenant",
        "example": "2024-03-30"
      },
      {
        "name": "searchBy",
        "schema": "string",
        "description": "Search by object type"
      },
      {
        "name": "itemId",
        "schema": "integer",
        "description": "Search by object id"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_translations",
    "method": "getAllTranslations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_translations",
    "typeScriptTag": "customerAccountTranslations",
    "description": "Returns all customer_account's translations within the given customer account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_translations",
    "method": "createTranslation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_account_translations",
    "typeScriptTag": "customerAccountTranslations",
    "description": "Creates a customer_account_translation",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_translations/{customer_account_translation_id}",
    "method": "deleteTranslation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customer_account_translations",
    "typeScriptTag": "customerAccountTranslations",
    "description": "Deletes the customer_account_translation within the current customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountTranslationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account_translation to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_translations/{customer_account_translation_id}",
    "method": "showTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_translations",
    "typeScriptTag": "customerAccountTranslations",
    "description": "Shows a customer_account_translation",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountTranslationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account_translation to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_translations/{customer_account_translation_id}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_account_translations",
    "typeScriptTag": "customerAccountTranslations",
    "description": "Updates an customer_account_translation",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountTranslationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account_translation to update",
        "example": 0
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "field",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_attribute_groups",
    "method": "getAllTranslations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_attribute_groups",
    "typeScriptTag": "customerAccountAttributeGroups",
    "description": "Returns all customer_account's translations within the given customer account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "searchField",
        "schema": "string",
        "description": "Filter by field"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_attribute_groups",
    "method": "createGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_account_attribute_groups",
    "typeScriptTag": "customerAccountAttributeGroups",
    "description": "Creates a customer_account_attribute_group",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "read_only",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_attribute_groups/{customer_account_attribute_group_id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customer_account_attribute_groups",
    "typeScriptTag": "customerAccountAttributeGroups",
    "description": "Deletes the customer_account_attribute_group within the current customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountAttributeGroupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account_attribute_group to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_attribute_groups/{customer_account_attribute_group_id}",
    "method": "showGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_attribute_groups",
    "typeScriptTag": "customerAccountAttributeGroups",
    "description": "Shows a customer_account_attribute_group",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountAttributeGroupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account_attribute_group to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_attribute_groups/{customer_account_attribute_group_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_account_attribute_groups",
    "typeScriptTag": "customerAccountAttributeGroups",
    "description": "Updates an customer_account_attribute_group",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountAttributeGroupId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account_attribute_group to update",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "read_only",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/ep_code_combinations",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ep_code_combinations",
    "typeScriptTag": "epCodeCombinations",
    "description": "Returns all ep_code_combinations",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/credentials/me",
    "method": "getUserByOAuth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "credentials",
    "typeScriptTag": "credentials",
    "description": "Returns user if logged via OAuth",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/credentials/auth",
    "method": "returnToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "credentials",
    "typeScriptTag": "credentials",
    "description": "Returns EstateOs token",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboard_configs",
    "method": "createNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dashboard_configs",
    "typeScriptTag": "dashboardConfigs",
    "description": "Creates a dashboard_config within the current organisation",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboard_configs/{customer_account_id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dashboard_configs",
    "typeScriptTag": "dashboardConfigs",
    "description": "Marks a dashboard_config as deleted within the current organisation.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboard_configs/{customer_account_id}",
    "method": "show",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboard_configs",
    "typeScriptTag": "dashboardConfigs",
    "description": "Shows the dashboard_configs",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboard_configs/{customer_account_id}",
    "method": "updateWithinOrganisation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "dashboard_configs",
    "typeScriptTag": "dashboardConfigs",
    "description": "Updates an dashboard_config within the current organisation.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "aws_settings",
        "schema": "object",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards",
    "method": "getCustomerAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Return customer account dashboards",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "filters",
        "schema": "string",
        "required": false,
        "description": "Filter dashboard with filters <br>\n{ key1: \"value1\", key2: \"value2\" }\n"
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "Locale",
        "example": "LOCALE"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/{dashboard_id}",
    "method": "showDashboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Shows a dashboard",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard",
        "example": 0
      },
      {
        "name": "filters",
        "schema": "string",
        "required": false,
        "description": "Filter dashboard with filters <br>\n{ key1: 'value1', key2: 'value2' }\n"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/{dashboard_id}",
    "method": "updateDashboard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Updates a dashboard",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/synchronise",
    "method": "synchronise",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Synchronise dashboards",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Return status ok"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/session_expire",
    "method": "expireSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Expire all sessions for the current user",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": "The locale of the user",
        "example": "LOCALE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Return status ok"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/{dashboard_id}/copy",
    "method": "copyOnFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Copy a dashboard on looker",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the dashboard",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/order",
    "method": "orderDashboards",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Order dashboards",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dashboards/explore",
    "method": "returnCustomerAccountExploreWithUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Return customer account explore with url",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "filters",
        "schema": "string",
        "required": false,
        "description": "Filter dashboard with filters <br>\n{ key1: 'value1', key2: 'value2' }\n"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps",
    "method": "getAllApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Returns all apps",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps",
    "method": "createApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Creates a app",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/{app_id}",
    "method": "deleteApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Deletes the app",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/{app_id}",
    "method": "showApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Shows a app",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/{app_id}",
    "method": "updateApp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Updates a app",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app to update",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "short_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo_base64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo_filename_with_extension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_partner_interface",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_retail_price",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "default_retail_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_realcube_price",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "default_realcube_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_price_category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "default_data_lifetime",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "catalog_update_frequency",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "data_partner_base_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_partner_score_url",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_categories",
    "method": "getAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_categories",
    "typeScriptTag": "appCategories",
    "description": "Returns all app's categories",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_subscriptions",
    "method": "getAllSubs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_subscriptions",
    "typeScriptTag": "appSubscriptions",
    "description": "Returns all app's subscriptions",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app_subscriptions",
    "typeScriptTag": "appSubscriptions",
    "description": "Creates an app's subscription.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_subscriptions/{app_subscription_id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "app_subscriptions",
    "typeScriptTag": "appSubscriptions",
    "description": "Deletes the subscription",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appSubscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_subscriptions/{app_subscription_id}",
    "method": "showSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_subscriptions",
    "typeScriptTag": "appSubscriptions",
    "description": "Shows an app's subscription",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appSubscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_subscriptions/{app_subscription_id}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "app_subscriptions",
    "typeScriptTag": "appSubscriptions",
    "description": "Updates a app's subscription",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appSubscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription to update",
        "example": 0
      },
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
        "name": "periodicity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_configs",
    "method": "getAllConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_configs",
    "typeScriptTag": "appConfigs",
    "description": "Returns all app's configs.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "appSubscriptionId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the app_subscription"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_configs",
    "method": "createConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app_configs",
    "typeScriptTag": "appConfigs",
    "description": "Creates an app's config.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "organisation_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "app_subscription_id",
        "schema": "integer",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_configs/{app_config_id}",
    "method": "deleteConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "app_configs",
    "typeScriptTag": "appConfigs",
    "description": "Deletes the config.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appConfigId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the config to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_configs/{app_config_id}",
    "method": "showConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_configs",
    "typeScriptTag": "appConfigs",
    "description": "Shows an app's config.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appConfigId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the config to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_configs/{app_config_id}",
    "method": "updateConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "app_configs",
    "typeScriptTag": "appConfigs",
    "description": "Updates a app's config.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appConfigId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the config to update",
        "example": 0
      },
      {
        "name": "organisation_ids",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/{app_id}/memberships",
    "method": "deleteCategoryMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Deletes the app category membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appCategoryMembershipId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app category membership to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/apps/{app_id}/memberships",
    "method": "createMembershipToCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Creates a app membership to category",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appCategoryMembershipId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app membership to create",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_data_repositories",
    "method": "getAllDataRepositories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_data_repositories",
    "typeScriptTag": "appDataRepositories",
    "description": "Returns all subscription's data_repositories.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
        "example": 0
      },
      {
        "name": "appSubscriptionId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the app_subscription"
      },
      {
        "name": "parentId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the parent"
      },
      {
        "name": "parentType",
        "schema": "string",
        "required": false,
        "description": "The Type of the parent"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_data_repositories",
    "method": "createNewRepository",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app_data_repositories",
    "typeScriptTag": "appDataRepositories",
    "description": "Creates a app_data_repository",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "app_data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "app_subscription_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parent_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_data_repositories/latest_version",
    "method": "showRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_data_repositories",
    "typeScriptTag": "appDataRepositories",
    "description": "Shows an app_data_repository.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "parentId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the parent"
      },
      {
        "name": "parentType",
        "schema": "string",
        "required": false,
        "description": "The Type of the parent"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_data_repositories/{app_data_repository_id}",
    "method": "deleteRepository",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "app_data_repositories",
    "typeScriptTag": "appDataRepositories",
    "description": "Deletes the app_data_repository.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appDataRepositoryId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app_data_repository",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/app_data_repositories/{app_data_repository_id}",
    "method": "updateRepository",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "app_data_repositories",
    "typeScriptTag": "appDataRepositories",
    "description": "Updates an app_data_repository",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "appDataRepositoryId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the app_data_repository",
        "example": 0
      },
      {
        "name": "app_data",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plans",
    "method": "getAllInBuilding",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plans",
    "typeScriptTag": "plans",
    "description": "Returns all plans within the given building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building of the plan",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plans",
    "method": "createNewPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "plans",
    "typeScriptTag": "plans",
    "description": "Creates a plan",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building of the plan",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plans/{plan_id}",
    "method": "deletePlanWithinBuilding",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "plans",
    "typeScriptTag": "plans",
    "description": "Deletes the plan within the current building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building of the plan",
        "example": 0
      },
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plans/{plan_id}",
    "method": "showPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plans",
    "typeScriptTag": "plans",
    "description": "Shows a plan",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building of the plan",
        "example": 0
      },
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plans/{plan_id}",
    "method": "updatePlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "plans",
    "typeScriptTag": "plans",
    "description": "Updates a plan",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building of the plan",
        "example": 0
      },
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan to update",
        "example": 0
      },
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
        "name": "trade",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plan_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "planning_phase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "presentation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plan_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "floor",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plan_configs",
    "method": "getAllConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plan_configs",
    "typeScriptTag": "planConfigs",
    "description": "Returns all plan's configs.",
    "parameters": [
      {
        "name": "parentId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the parent"
      },
      {
        "name": "parentType",
        "schema": "string",
        "required": false,
        "description": "The type of the parent\n  Allowed parent_types: [\"Organisation\", \"Building\", \"Building::Unit\"]\n"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plan_versions",
    "method": "createPlanVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "plan_versions",
    "typeScriptTag": "planVersions",
    "description": "Creates a plan",
    "parameters": [
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan of the plan version",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plan_versions/{id}",
    "method": "deleteWithinCurrentPlan",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "plan_versions",
    "typeScriptTag": "planVersions",
    "description": "Deletes the plan version within the current plan",
    "parameters": [
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan of the version",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan version to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/plan_versions/{id}",
    "method": "updateVersion",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "plan_versions",
    "typeScriptTag": "planVersions",
    "description": "Updates a plan version",
    "parameters": [
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan of the plan version",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the plan version to update",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisations",
    "method": "listMemberRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organisations",
    "typeScriptTag": "organisations",
    "description": "Returns all organisations the authenticated user is member of including her membership role within each organisation",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID customer account to filter the users."
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "The page to paginate the users."
      },
      {
        "name": "perPage",
        "schema": "string",
        "required": false,
        "description": "The number of users for a page"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisations",
    "method": "createUserForCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organisations",
    "typeScriptTag": "organisations",
    "description": "Creates a organisation of the user for a customer account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID customer account of organisation."
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisations/{organisation_id}",
    "method": "deleteOrganisation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes the organisation.",
    "parameters": [
      {
        "name": "organisationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organisation to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisations/{organisation_id}",
    "method": "updateOrganisation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an organisation.",
    "parameters": [
      {
        "name": "organisationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organisation to update",
        "example": 0
      },
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
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "street",
        "schema": "string",
        "description": ""
      },
      {
        "name": "street_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_configs",
    "method": "createConfigForUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organisation_configs",
    "typeScriptTag": "organisationConfigs",
    "description": "Creates a config in an organisation for a user.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "building",
        "schema": "object",
        "description": ""
      },
      {
        "name": "building_unit",
        "schema": "object",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_configs/{organisation_config_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organisation_configs",
    "typeScriptTag": "organisationConfigs",
    "description": "Deletes the organisation configs.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "organisationConfigId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation config to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_configs/{organisation_config_id}",
    "method": "getConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organisation_configs",
    "typeScriptTag": "organisationConfigs",
    "description": "Returns the config for the current organisation of the user.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "organisationConfigId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation config",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_configs/{organisation_config_id}",
    "method": "updateUserConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organisation_configs",
    "typeScriptTag": "organisationConfigs",
    "description": "Update a configs in an organisation for a user.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "organisationConfigId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation config",
        "example": 0
      },
      {
        "name": "building",
        "schema": "object",
        "description": ""
      },
      {
        "name": "building_unit",
        "schema": "object",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_memberships",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organisation_memberships",
    "typeScriptTag": "organisationMemberships",
    "description": "Returns all memberships within the given organisation.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": false,
        "description": "ID of the organisation"
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "ID of the user"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_memberships",
    "method": "createUserMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organisation_memberships",
    "typeScriptTag": "organisationMemberships",
    "description": "Creates a membership in an organisation for a user.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_memberships/{organisations_membership_id}",
    "method": "deleteMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organisation_memberships",
    "typeScriptTag": "organisationMemberships",
    "description": "Deletes the organisation membership.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "organisationsMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation membership to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organisation_memberships/{organisations_membership_id}",
    "method": "updateMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organisation_memberships",
    "typeScriptTag": "organisationMemberships",
    "description": "Updates the organisation membership.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "organisationsMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation membership to update",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_accounts/{id}/time_attribute_schema",
    "method": "updateTimeAttributeSchema",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_accounts",
    "typeScriptTag": "customerAccounts",
    "description": "Updates a customer_account's time_attribute_schema.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "time_attribute_schema",
        "schema": "object",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_accounts",
    "method": "getAllUserAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_accounts",
    "typeScriptTag": "customerAccounts",
    "description": "Gets all user's customer_accounts.",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_accounts/{id}",
    "method": "getCustomerAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_accounts",
    "typeScriptTag": "customerAccounts",
    "description": "Gets a customer_account.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_attributes_schemas",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_attributes_schemas",
    "typeScriptTag": "customerAttributesSchemas",
    "description": "Returns all customer attributes schemas.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_attributes_schemas",
    "method": "createSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_attributes_schemas",
    "typeScriptTag": "customerAttributesSchemas",
    "description": "Creates a customer attributes schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_attributes_schemas/{customer_attributes_schema_id}",
    "method": "showSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_attributes_schemas",
    "typeScriptTag": "customerAttributesSchemas",
    "description": "Shows a customer attributes schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAttributesSchemaId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer attributes schema to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_attributes_schema_memberships",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_attributes_schema_memberships",
    "typeScriptTag": "customerAttributesSchemaMemberships",
    "description": "Returns all customer attributes schema memberships.",
    "parameters": [
      {
        "name": "organisationIds",
        "schema": "array",
        "required": true,
        "description": "IDs of organisations"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_attributes_schema_memberships",
    "method": "createMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_attributes_schema_memberships",
    "typeScriptTag": "customerAttributesSchemaMemberships",
    "description": "Creates a customer attributes schema membership.",
    "parameters": [
      {
        "name": "organisation_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer_attributes_schema_id",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_configs",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_configs",
    "typeScriptTag": "customerAccountConfigs",
    "description": "Return customer account configuration of customer_account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "Locale"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_configs",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_account_configs",
    "typeScriptTag": "customerAccountConfigs",
    "description": "Create customer account configuration.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_configs/{customer_account_config_id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_account_configs",
    "typeScriptTag": "customerAccountConfigs",
    "description": "Updates a customer account configuration.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountConfigId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account to update",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_schemas",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_schemas",
    "typeScriptTag": "customerAccountSchemas",
    "description": "Returns all customer account schemas.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_schemas",
    "method": "createNewSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_account_schemas",
    "typeScriptTag": "customerAccountSchemas",
    "description": "Create a customer account schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attributes_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "json_schema_de",
        "schema": "object",
        "description": ""
      },
      {
        "name": "json_schema_en",
        "schema": "object",
        "description": ""
      },
      {
        "name": "json_schema_gsw",
        "schema": "object",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_schemas/{customer_account_schema_id}",
    "method": "showSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_schemas",
    "typeScriptTag": "customerAccountSchemas",
    "description": "Shows a customer account schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountSchemaId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account schema to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_schemas/{customer_account_schema_id}",
    "method": "updateSchema",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_account_schemas",
    "typeScriptTag": "customerAccountSchemas",
    "description": "Update a customer account schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountSchemaId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account schema to show",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "json_schema_de",
        "schema": "object",
        "description": ""
      },
      {
        "name": "json_schema_en",
        "schema": "object",
        "description": ""
      },
      {
        "name": "json_schema_gsw",
        "schema": "object",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_categories",
    "method": "getCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer_account_categories",
    "typeScriptTag": "customerAccountCategories",
    "description": "Return customer account categories of customer_account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "categoryId",
        "schema": "integer",
        "required": false,
        "description": "Filter customer account categories based on category id"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_categories",
    "method": "createAccountCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_account_categories",
    "typeScriptTag": "customerAccountCategories",
    "description": "Creates a customer account category",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "grouping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subgrouping",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display_sort_order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "conversion_factor",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "customer_editable",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "external_conversion",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "category",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_categories/{customer_account_category_id}",
    "method": "deleteCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customer_account_categories",
    "typeScriptTag": "customerAccountCategories",
    "description": "Delete the customer account category",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountCategoryId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer account category you want to delete",
        "example": "CUSTOMER_ACCOUNT_CATEGORY_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_categories/{customer_account_category_id}",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_account_categories",
    "typeScriptTag": "customerAccountCategories",
    "description": "Update the customer account category",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountCategoryId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer account category you want to update",
        "example": "CUSTOMER_ACCOUNT_CATEGORY_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contracts",
    "method": "getAllContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contracts",
    "typeScriptTag": "contracts",
    "description": "Returns all contracts within the given customer account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "organisationId",
        "schema": "integer",
        "required": false,
        "description": "ID of the organisation"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "IDs of the contract"
      },
      {
        "name": "buildingId",
        "schema": "integer",
        "required": false,
        "description": "ID of the building related with contract"
      },
      {
        "name": "unitId",
        "schema": "integer",
        "required": false,
        "description": "ID of the unit related with contract"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contracts",
    "method": "createNewContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "contracts",
    "typeScriptTag": "contracts",
    "description": "Creates a contract",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contracts/{contract_id}",
    "method": "deleteContract",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "contracts",
    "typeScriptTag": "contracts",
    "description": "Deletes the contract",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the contract to update",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contracts/{contract_id}",
    "method": "showContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contracts",
    "typeScriptTag": "contracts",
    "description": "Shows a contract",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the contract to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contracts/{contract_id}",
    "method": "updateContract",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "contracts",
    "typeScriptTag": "contracts",
    "description": "Updates an contract",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the contract to update",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_memberships/{contract_membership_id}",
    "method": "destroyMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "contract_memberships",
    "typeScriptTag": "contractMemberships",
    "description": "Destroys the contract membership.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract membership to be destroyed",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_memberships",
    "method": "createMembershipIn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "contract_memberships",
    "typeScriptTag": "contractMemberships",
    "description": "Creates a membership in contract.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "contract_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "member_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "member_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_TYPE"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_membership_costs",
    "method": "getAllForMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contract_membership_costs",
    "typeScriptTag": "contractMembershipCosts",
    "description": "Returns all contract membership costs for current contract membership",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_membership_costs",
    "method": "createNewMembershipCost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "contract_membership_costs",
    "typeScriptTag": "contractMembershipCosts",
    "description": "Create contract membership cost",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_membership_costs/{contract_membership_cost_id}",
    "method": "deleteMembershipCost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "contract_membership_costs",
    "typeScriptTag": "contractMembershipCosts",
    "description": "Delete the contract membership cost",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership",
        "example": 0
      },
      {
        "name": "contractMembershipCostId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership cost",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_membership_costs/{contract_membership_cost_id}",
    "method": "showMembershipCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contract_membership_costs",
    "typeScriptTag": "contractMembershipCosts",
    "description": "Shows a contract membership cost",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership",
        "example": 0
      },
      {
        "name": "contractMembershipCostId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership cost",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_membership_costs/{contract_membership_cost_id}",
    "method": "updateMembershipCost",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "contract_membership_costs",
    "typeScriptTag": "contractMembershipCosts",
    "description": "Update a contract membership cost",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership",
        "example": 0
      },
      {
        "name": "contractMembershipCostId",
        "schema": "integer",
        "required": true,
        "description": "ID of contract membership cost",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_additions",
    "method": "getAllForCurrentContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contract_additions",
    "typeScriptTag": "contractAdditions",
    "description": "Returns all contract additions for current contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_additions",
    "method": "createNewAddition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "contract_additions",
    "typeScriptTag": "contractAdditions",
    "description": "Create contract addition",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_additions/{contract_addition_id}",
    "method": "deleteContractAddition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "contract_additions",
    "typeScriptTag": "contractAdditions",
    "description": "Delete the contract addition",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract",
        "example": 0
      },
      {
        "name": "contractAdditionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract addition",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_additions/{contract_addition_id}",
    "method": "showDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contract_additions",
    "typeScriptTag": "contractAdditions",
    "description": "Shows a contract addition",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract",
        "example": 0
      },
      {
        "name": "contractAdditionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract addition",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_additions/{contract_addition_id}",
    "method": "updateContractAddition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "contract_additions",
    "typeScriptTag": "contractAdditions",
    "description": "Update a contract addition",
    "parameters": [
      {
        "name": "contractId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract",
        "example": 0
      },
      {
        "name": "contractAdditionId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract addition",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_grants",
    "method": "getAllForCurrentContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contract_grants",
    "typeScriptTag": "contractGrants",
    "description": "Returns all contract grants for current contract",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract membership",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_grants",
    "method": "createGrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "contract_grants",
    "typeScriptTag": "contractGrants",
    "description": "Create contract grant",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract membership",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_grants/{contract_grant_id}",
    "method": "deleteGrant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "contract_grants",
    "typeScriptTag": "contractGrants",
    "description": "Delete the contract grant",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract membership",
        "example": 0
      },
      {
        "name": "contractGrantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract grant",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_grants/{contract_grant_id}",
    "method": "showGrant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contract_grants",
    "typeScriptTag": "contractGrants",
    "description": "Shows a contract grant",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract membership",
        "example": 0
      },
      {
        "name": "contractGrantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract grant",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contract_grants/{contract_grant_id}",
    "method": "updateGrant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "contract_grants",
    "typeScriptTag": "contractGrants",
    "description": "Update a contract grant",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract membership",
        "example": 0
      },
      {
        "name": "contractGrantId",
        "schema": "integer",
        "required": true,
        "description": "ID of the contract grant",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/security_deposits",
    "method": "createDeposit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "security_deposits",
    "typeScriptTag": "securityDeposits",
    "description": "Creates a security deposit",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract Membership",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/security_deposits/{security_deposit_id}",
    "method": "deleteDeposit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "security_deposits",
    "typeScriptTag": "securityDeposits",
    "description": "Deletes the Security Deposit",
    "parameters": [
      {
        "name": "securityDepositId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Security Deposit",
        "example": 0
      },
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the contract_membership",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/security_deposits/{security_deposit_id}",
    "method": "updateSecurityDeposit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "security_deposits",
    "typeScriptTag": "securityDeposits",
    "description": "Updates an security deposit",
    "parameters": [
      {
        "name": "contractMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Contract Membership",
        "example": 0
      },
      {
        "name": "securityDepositId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the security deposit to update",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cost_types",
    "typeScriptTag": "costTypes",
    "description": "Returns all types of costs within the given customer_account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost_types",
    "method": "createTypeOfCost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "cost_types",
    "typeScriptTag": "costTypes",
    "description": "Creates a type of cost",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost_types/{id}",
    "method": "deleteCostType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "cost_types",
    "typeScriptTag": "costTypes",
    "description": "Deletes the cost_type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the cost_type to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost_types/{id}",
    "method": "showType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cost_types",
    "typeScriptTag": "costTypes",
    "description": "Shows a cost type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the cost_type",
        "example": 0
      },
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cost_types/{id}",
    "method": "updateCostType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "cost_types",
    "typeScriptTag": "costTypes",
    "description": "Updates an cost_type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the cost_type to update",
        "example": 0
      },
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/property_types",
    "method": "getAllAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "property_types",
    "typeScriptTag": "propertyTypes",
    "description": "Returns all property types currently available",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/properties",
    "method": "listForOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Returns all properties for the current organisation within the given organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "The ID on other systems of the properties to show"
      },
      {
        "name": "sourceSystem",
        "schema": "string",
        "required": false,
        "description": "The name on other systems of the properties to show"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/properties",
    "method": "createForOrganisation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Creates a property for the current organisation of the user.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/properties/{property_id}",
    "method": "deletePropertyWithinOrganisation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Deletes the property within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "propertyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the property you want to delete",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/properties/{property_id}",
    "method": "getForOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Returns the property for the current organisation of the user.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "propertyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the property",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/properties/{property_id}",
    "method": "updateForOrganisation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "properties",
    "typeScriptTag": "properties",
    "description": "Updates the property for the current organisation of the user.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "propertyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the property you want to update",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/property_managers",
    "method": "getAllWithinCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "property_managers",
    "typeScriptTag": "propertyManagers",
    "description": "Returns all property managers within the given customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/property_managers",
    "method": "createNewManager",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "property_managers",
    "typeScriptTag": "propertyManagers",
    "description": "Creates a property manager for the current customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/property_managers/{property_manager_id}",
    "method": "deleteManagerWithinAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "property_managers",
    "typeScriptTag": "propertyManagers",
    "description": "Deletes the property manager within the current account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "propertyManagerId",
        "schema": "integer",
        "required": true,
        "description": "ID of the property manager you want to delete",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/property_managers/{property_manager_id}",
    "method": "getCurrentManager",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "property_managers",
    "typeScriptTag": "propertyManagers",
    "description": "Returns the property manager for the current account of the user.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "propertyManagerId",
        "schema": "integer",
        "required": true,
        "description": "ID of the property manager",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/property_managers/{property_manager_id}",
    "method": "updateCurrentAccountUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "property_managers",
    "typeScriptTag": "propertyManagers",
    "description": "Updates the property manager for the current account of the user.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "propertyManagerId",
        "schema": "integer",
        "required": true,
        "description": "ID of the property manager you want to update",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/lots",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lots",
    "typeScriptTag": "lots",
    "description": "Returns all lots within the given organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/lots",
    "method": "createNewLot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "lots",
    "typeScriptTag": "lots",
    "description": "Creates a lot.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/lots/{lot_id}",
    "method": "deleteLotWithinOrganisation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "lots",
    "typeScriptTag": "lots",
    "description": "Deletes the lot within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "lotId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the lot to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/lots/{lot_id}",
    "method": "showLot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lots",
    "typeScriptTag": "lots",
    "description": "Shows a lot.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "lotId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the lot to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/lots/{lot_id}",
    "method": "updateLot",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "lots",
    "typeScriptTag": "lots",
    "description": "Updates an lot.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "lotId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the lot to update",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_filter_settings",
    "method": "getAllSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_filter_settings",
    "typeScriptTag": "buildingFilterSettings",
    "description": "Returns all building filter settings currently available",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_filter_settings",
    "method": "createSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_filter_settings",
    "typeScriptTag": "buildingFilterSettings",
    "description": "Create building filter settings",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_filter_settings/filter_setting_fields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_filter_settings",
    "typeScriptTag": "buildingFilterSettings",
    "description": "Returns all building and building unit fields.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_filter_settings/{building_filter_setting_id}",
    "method": "deleteSetting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "building_filter_settings",
    "typeScriptTag": "buildingFilterSettings",
    "description": "Deletes the building filter setting within the current customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingFilterSettingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building filter setting to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_filter_settings/{building_filter_setting_id}",
    "method": "showSetting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_filter_settings",
    "typeScriptTag": "buildingFilterSettings",
    "description": "Shows a building filter setting",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingFilterSettingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building filter setting to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_filter_settings/{building_filter_setting_id}",
    "method": "updateSetting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_filter_settings",
    "typeScriptTag": "buildingFilterSettings",
    "description": "Updates a building filter setting.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingFilterSettingId",
        "schema": "string",
        "required": true,
        "description": "ID of the building filter setting you want to update",
        "example": "BUILDING_FILTER_SETTING_ID"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_save_filters",
    "method": "getAllFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_save_filters",
    "typeScriptTag": "buildingSaveFilters",
    "description": "Returns all save filters for current user",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_save_filters",
    "method": "createBuildingSaveFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_save_filters",
    "typeScriptTag": "buildingSaveFilters",
    "description": "Create building save filter",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_save_filters/{building_save_filter_id}",
    "method": "deleteSaveFilter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "building_save_filters",
    "typeScriptTag": "buildingSaveFilters",
    "description": "Delete the save filter",
    "parameters": [
      {
        "name": "buildingSaveFilterId",
        "schema": "integer",
        "required": true,
        "description": "ID of the save filter",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_save_filters/{building_save_filter_id}",
    "method": "showSaveFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_save_filters",
    "typeScriptTag": "buildingSaveFilters",
    "description": "Shows a save filter",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingSaveFilterId",
        "schema": "integer",
        "required": true,
        "description": "ID of the save filter",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_save_filters/{building_save_filter_id}",
    "method": "updateSaveFilter",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_save_filters",
    "typeScriptTag": "buildingSaveFilters",
    "description": "Update a save filter",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingSaveFilterId",
        "schema": "integer",
        "required": true,
        "description": "ID of the save filter",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_types",
    "method": "getAllBuildingTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_types",
    "typeScriptTag": "buildingTypes",
    "description": "Returns all building types currently available",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings",
    "method": "getAllWithinOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "buildings",
    "typeScriptTag": "buildings",
    "description": "Returns all buildings within the given organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "The ID on other systems of the buildings to show"
      },
      {
        "name": "sourceSystem",
        "schema": "string",
        "required": false,
        "description": "The name on other systems of the buildings to show"
      },
      {
        "name": "presetsStandardFields",
        "schema": "object",
        "required": false,
        "description": "Filter building with standard fields of building and building_units <br>\n  {\n    building: { name: ['name_of_building',...], city: ['Berlin', ...]}\n    building_unit: { name: ['name_of_unit', ...], tenant: ['name_of_tentant', ...] }\n  }\n"
      },
      {
        "name": "presetsCustomerAttributes",
        "schema": "object",
        "required": false,
        "description": "Filter building with customer_attributes of building and building_units <br>\nall attributes can be strings separated by | except array fields that should be one array with strings\n  {\n    building: { region: 'Südwest|West', ...}\n    building_unit: { unit_type: 'assisted_living_own_woe|living', ... }\n  }\n"
      },
      {
        "name": "tags",
        "schema": "object",
        "required": false,
        "description": "Filter building with tag label related to building and building_units <br>\n  {\n    building: ['label_of_a_tag',...]\n    building_unit: ['label_of_a_tag',...]\n  }\n"
      },
      {
        "name": "categories",
        "schema": "object",
        "required": false,
        "description": "Filter building with category label related to building and building_units <br>\n  {\n    building: { person_memberships: { architect: ['John Doe'], property_manager: ['John Doe 2'] } }\n    building_unit: { building_unit_places: ['Building unit place 1'] }\n  }\n"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings",
    "method": "createNewBuilding",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "buildings",
    "typeScriptTag": "buildings",
    "description": "Creates a building",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings/{building_id}",
    "method": "deleteBuilding",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "buildings",
    "typeScriptTag": "buildings",
    "description": "Deletes the building within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings/{building_id}",
    "method": "showBuilding",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "buildings",
    "typeScriptTag": "buildings",
    "description": "Shows a building",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings/{building_id}",
    "method": "updateBuildingTimeDependentAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "buildings",
    "typeScriptTag": "buildings",
    "description": "Updates an building",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building to update",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings/{building_id}/scorecard_memberships",
    "method": "listScorecardMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "buildings",
    "typeScriptTag": "buildings",
    "description": "List scorecard memberships by building",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the building to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_types",
    "typeScriptTag": "buildingUnitTypes",
    "description": "Returns all building unit types for that customer account including default types",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_types",
    "method": "createType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_types",
    "typeScriptTag": "buildingUnitTypes",
    "description": "Create building unit type.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of customer account",
        "example": 0
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_types/{building_unit_type_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "building_unit_types",
    "typeScriptTag": "buildingUnitTypes",
    "description": "Deletes building unit type within the current customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingUnitTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of building unit type to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_types/{building_unit_type_id}",
    "method": "showType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_types",
    "typeScriptTag": "buildingUnitTypes",
    "description": "Shows a building unit type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "buildingUnitTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of building unit type to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_types/{building_unit_type_id}",
    "method": "updateBuildingUnitType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_types",
    "typeScriptTag": "buildingUnitTypes",
    "description": "Updates a building unit type.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of customer account",
        "example": 0
      },
      {
        "name": "buildingUnitTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of building unit type to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units",
    "method": "getAllWithinOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_units",
    "typeScriptTag": "buildingUnits",
    "description": "Returns all building units within the given organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "The ID on other systems of the buildings to show"
      },
      {
        "name": "sourceSystem",
        "schema": "string",
        "required": false,
        "description": "The name on other systems of the buildings to show"
      },
      {
        "name": "buildingIds",
        "schema": "string",
        "required": false,
        "description": "The IDs of building",
        "example": "1,2,3"
      },
      {
        "name": "presetsStandardFields",
        "schema": "object",
        "required": true,
        "description": "Filter building units with standard fields <br>\n  {\n    building_unit: { name: ['name_of_unit', ...], tenant: ['name_of_tentant', ...] }\n  }\n"
      },
      {
        "name": "presetsCustomerAttributes",
        "schema": "object",
        "required": true,
        "description": "Filter building units with customer_attributes fields <br>\nall attributes can be strings separated by | except array fields that should be one array with strings\n  {\n    building_unit: { unit_type: 'assisted_living_own_woe|living', ... }\n  }\n"
      },
      {
        "name": "tags",
        "schema": "object",
        "required": false,
        "description": "Filter units with tag label<br>\n  {\n    building_unit: ['label_of_a_tag',...]\n  }\n"
      },
      {
        "name": "categories",
        "schema": "object",
        "required": false,
        "description": "Filter building units with category label related to building_units <br>\n  {\n    building: {}\n    building_unit: { building_unit_places: [\"Building unit place label\"] }\n  }\n"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units",
    "method": "createUnit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_units",
    "typeScriptTag": "buildingUnits",
    "description": "Creates a building unit",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units/{building_unit_id}",
    "method": "destroyUnitAndMemberships",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "building_units",
    "typeScriptTag": "buildingUnits",
    "description": "Destroys the building unit and all memberships of that unit!",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit to be destroyed",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units/{building_unit_id}",
    "method": "showUnitMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_units",
    "typeScriptTag": "buildingUnits",
    "description": "Shows a building unit and all memberships of that unit",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units/{building_unit_id}",
    "method": "updateUnit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_units",
    "typeScriptTag": "buildingUnits",
    "description": "Updates the building unit",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit to be updated",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_memberships/{building_unit_membership_id}",
    "method": "destroyOrganisationMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "building_unit_memberships",
    "typeScriptTag": "buildingUnitMemberships",
    "description": "Destroys the organisation membership",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingUnitMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation membership to be destroyed",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_memberships",
    "method": "createMembershipInUnit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_memberships",
    "typeScriptTag": "buildingUnitMemberships",
    "description": "Creates a membership in building unit",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "unit_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "member_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "member_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_TYPE"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_energies",
    "method": "getBuildingEnergies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_energies",
    "typeScriptTag": "buildingEnergies",
    "description": "Return building energies of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_energies",
    "method": "createEnergy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_energies",
    "typeScriptTag": "buildingEnergies",
    "description": "Creates a building energy",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_energies/{building_energy_id}",
    "method": "updateEnergy",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_energies",
    "typeScriptTag": "buildingEnergies",
    "description": "Update building energy",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingEnergyId",
        "schema": "string",
        "required": true,
        "description": "ID of the building energy to update",
        "example": "BUILDING_ENERGY_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings_finances",
    "method": "returnBuildingFinances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "buildings_finances",
    "typeScriptTag": "buildingsFinances",
    "description": "Return building finances of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings_finances",
    "method": "createFinance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "buildings_finances",
    "typeScriptTag": "buildingsFinances",
    "description": "Creates a building finance",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/buildings_finances/{buildings_finance_id}",
    "method": "updateFinance",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "buildings_finances",
    "typeScriptTag": "buildingsFinances",
    "description": "Update building finance",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingsFinanceId",
        "schema": "string",
        "required": true,
        "description": "ID of the building finance to update",
        "example": "BUILDINGS_FINANCE_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units_finances",
    "method": "createFinance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_units_finances",
    "typeScriptTag": "buildingUnitsFinances",
    "description": "Creates a building unit finance",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_units_finances/{building_units_finance_id}",
    "method": "updateFinance",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_units_finances",
    "typeScriptTag": "buildingUnitsFinances",
    "description": "Update building unit finance",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
        "example": 0
      },
      {
        "name": "buildingUnitsFinanceId",
        "schema": "string",
        "required": true,
        "description": "ID of the building unit finance to update",
        "example": "BUILDING_UNITS_FINANCE_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_fms",
    "method": "getBuildingFms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_fms",
    "typeScriptTag": "buildingFms",
    "description": "Return building fms of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_fms",
    "method": "createBuildingFm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_fms",
    "typeScriptTag": "buildingFms",
    "description": "Creates a building fm",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_fms/{building_fm_id}",
    "method": "updateBuildingFm",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_fms",
    "typeScriptTag": "buildingFms",
    "description": "Update building fm",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingFmId",
        "schema": "string",
        "required": true,
        "description": "ID of the building fm to update",
        "example": "BUILDING_FM_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_retails",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_retails",
    "typeScriptTag": "buildingUnitRetails",
    "description": "Return building unit retails of the building",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_retails",
    "method": "createRetailUnit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_retails",
    "typeScriptTag": "buildingUnitRetails",
    "description": "Creates a building unit retail",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_retails/{building_unit_retail_id}",
    "method": "updateUnitRetail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_retails",
    "typeScriptTag": "buildingUnitRetails",
    "description": "Update building unit retail",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingUnitRetailId",
        "schema": "string",
        "required": true,
        "description": "ID of the building unit retail to update",
        "example": "BUILDING_UNIT_RETAIL_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_retail_metrics",
    "method": "getBuildingUnitRetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_retail_metrics",
    "typeScriptTag": "buildingUnitRetailMetrics",
    "description": "Return building unit retails of the building unit retail",
    "parameters": [
      {
        "name": "buildingUnitRetailId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit retail unit",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_retail_metrics",
    "method": "createMetric",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_retail_metrics",
    "typeScriptTag": "buildingUnitRetailMetrics",
    "description": "Creates a building unit retail metric",
    "parameters": [
      {
        "name": "buildingUnitRetailId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit retail unit",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_retail_metrics/{building_unit_retail_metric_id}",
    "method": "updateRetailBuildingUnit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_retail_metrics",
    "typeScriptTag": "buildingUnitRetailMetrics",
    "description": "Update building unit retail",
    "parameters": [
      {
        "name": "buildingUnitRetailId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit retail",
        "example": 0
      },
      {
        "name": "buildingUnitRetailMetricId",
        "schema": "string",
        "required": true,
        "description": "ID of the building unit retail metric to update",
        "example": "BUILDING_UNIT_RETAIL_METRIC_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_waters",
    "method": "getBuildingWaters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_waters",
    "typeScriptTag": "buildingWaters",
    "description": "Return building waters of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_waters",
    "method": "createBuildingWater",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_waters",
    "typeScriptTag": "buildingWaters",
    "description": "Creates a building water",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_waters/{building_water_id}",
    "method": "updateBuildingWater",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_waters",
    "typeScriptTag": "buildingWaters",
    "description": "Update building water",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingWaterId",
        "schema": "string",
        "required": true,
        "description": "ID of the building water to update",
        "example": "BUILDING_WATER_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/addtl_building_ids",
    "method": "getBuildingIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "addtl_building_ids",
    "typeScriptTag": "addtlBuildingIds",
    "description": "Return addtl building ids of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/addtl_building_ids",
    "method": "createId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "addtl_building_ids",
    "typeScriptTag": "addtlBuildingIds",
    "description": "Creates a addtl building id",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/addtl_building_ids/{addtl_building_id_id}",
    "method": "updateBuildingId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "addtl_building_ids",
    "typeScriptTag": "addtlBuildingIds",
    "description": "Update addtl building id",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "addtlBuildingIdId",
        "schema": "string",
        "required": true,
        "description": "ID of the addtl building id to update",
        "example": "ADDTL_BUILDING_ID_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/phases",
    "method": "getBuildingPhases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "phases",
    "typeScriptTag": "phases",
    "description": "Return phases of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/phases",
    "method": "createPhase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "phases",
    "typeScriptTag": "phases",
    "description": "Creates a phase",
    "parameters": [],
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/phases/{phase_id}",
    "method": "updatePhase",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "phases",
    "typeScriptTag": "phases",
    "description": "Update phase",
    "parameters": [
      {
        "name": "phaseId",
        "schema": "string",
        "required": true,
        "description": "ID of the phase to update",
        "example": "PHASE_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_trackers",
    "method": "getRentTrackers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_trackers",
    "typeScriptTag": "rentTrackers",
    "description": "Return rent_trackers",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer_account",
        "example": "CUSTOMER_ACCOUNT_ID"
      },
      {
        "name": "organisationId",
        "schema": "string",
        "description": "ID of the organisation"
      },
      {
        "name": "unitIds",
        "schema": "string",
        "description": "IDs of the units",
        "example": "1,2,3"
      },
      {
        "name": "contractIds",
        "schema": "string",
        "description": "IDs of the contracts",
        "example": "1,2,3"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_trackers",
    "method": "createRentTracker",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rent_trackers",
    "typeScriptTag": "rentTrackers",
    "description": "Creates a rent_tracker",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer_account",
        "example": "CUSTOMER_ACCOUNT_ID"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_trackers/{rent_tracker_id}",
    "method": "getRentTracker",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_trackers",
    "typeScriptTag": "rentTrackers",
    "description": "Return rent_tracker",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer_account",
        "example": "CUSTOMER_ACCOUNT_ID"
      },
      {
        "name": "rentTrackerId",
        "schema": "string",
        "required": true,
        "description": "ID of the rent_tracker",
        "example": "RENT_TRACKER_ID"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_trackers/{rent_tracker_id}",
    "method": "updateRentTracker",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "rent_trackers",
    "typeScriptTag": "rentTrackers",
    "description": "Update rent_tracker",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer_account",
        "example": "CUSTOMER_ACCOUNT_ID"
      },
      {
        "name": "rentTrackerId",
        "schema": "string",
        "required": true,
        "description": "ID of the rent_tracker to update",
        "example": "RENT_TRACKER_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_parkings",
    "method": "getBuildingParkings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_parkings",
    "typeScriptTag": "buildingParkings",
    "description": "Return building parkings of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_parkings",
    "method": "createNewParking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_parkings",
    "typeScriptTag": "buildingParkings",
    "description": "Creates a building parking",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_parkings/{building_parking_id}",
    "method": "updateParking",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_parkings",
    "typeScriptTag": "buildingParkings",
    "description": "Update building parking",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingParkingId",
        "schema": "string",
        "required": true,
        "description": "ID of the building parking to update",
        "example": "BUILDING_PARKING_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_areas",
    "method": "getBuildingAreas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_areas",
    "typeScriptTag": "buildingAreas",
    "description": "Return building areas of the building",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_areas",
    "method": "createNewBuildingArea",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_areas",
    "typeScriptTag": "buildingAreas",
    "description": "Creates a building area",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_areas/{building_area_id}",
    "method": "updateArea",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_areas",
    "typeScriptTag": "buildingAreas",
    "description": "Update building area",
    "parameters": [
      {
        "name": "buildingId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingAreaId",
        "schema": "string",
        "required": true,
        "description": "ID of the building area to update",
        "example": "BUILDING_AREA_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_areas",
    "method": "getBuildingAreas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_areas",
    "typeScriptTag": "buildingUnitAreas",
    "description": "Return building areas of the building",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_areas",
    "method": "createArea",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_areas",
    "typeScriptTag": "buildingUnitAreas",
    "description": "Creates a building area",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_areas/{building_unit_area_id}",
    "method": "updateArea",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_areas",
    "typeScriptTag": "buildingUnitAreas",
    "description": "Update building area",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
        "example": 0
      },
      {
        "name": "buildingUnitAreaId",
        "schema": "string",
        "required": true,
        "description": "ID of the building area to update",
        "example": "BUILDING_UNIT_AREA_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places",
    "method": "getUnitPlaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_places",
    "typeScriptTag": "buildingUnitPlaces",
    "description": "Return building unit places of the unit",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places",
    "method": "createPlace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_places",
    "typeScriptTag": "buildingUnitPlaces",
    "description": "Creates a building unit places",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places/{building_unit_place_id}",
    "method": "updatePlace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_places",
    "typeScriptTag": "buildingUnitPlaces",
    "description": "Update building unit place",
    "parameters": [
      {
        "name": "buildingUnitId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit",
        "example": 0
      },
      {
        "name": "buildingUnitPlaceId",
        "schema": "string",
        "required": true,
        "description": "ID of the building unit place to update",
        "example": "BUILDING_UNIT_PLACE_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places_timeboxeds",
    "method": "getBuildingEnergies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_places_timeboxeds",
    "typeScriptTag": "buildingUnitPlacesTimeboxeds",
    "description": "Return building energies of the building",
    "parameters": [
      {
        "name": "buildingUnitPlaceId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit place",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places_timeboxeds",
    "method": "createTimeboxed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_places_timeboxeds",
    "typeScriptTag": "buildingUnitPlacesTimeboxeds",
    "description": "Creates a building unit place timeboxed",
    "parameters": [
      {
        "name": "buildingUnitPlaceId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit place",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places_timeboxeds/{building_unit_places_timeboxed_id}",
    "method": "updateTimeboxed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_places_timeboxeds",
    "typeScriptTag": "buildingUnitPlacesTimeboxeds",
    "description": "Update building unit place timeboxed",
    "parameters": [
      {
        "name": "buildingUnitPlaceId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building",
        "example": 0
      },
      {
        "name": "buildingUnitPlacesTimeboxedId",
        "schema": "string",
        "required": true,
        "description": "ID of the building unit place timeboxed to update",
        "example": "BUILDING_UNIT_PLACES_TIMEBOXED_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places_properties",
    "method": "returnProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "building_unit_places_properties",
    "typeScriptTag": "buildingUnitPlacesProperties",
    "description": "Return building unit place properties",
    "parameters": [
      {
        "name": "buildingUnitPlacesTimeboxedId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit place timeboxed",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places_properties",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "building_unit_places_properties",
    "typeScriptTag": "buildingUnitPlacesProperties",
    "description": "Creates a building unit place property",
    "parameters": [
      {
        "name": "buildingUnitPlacesTimeboxedId",
        "schema": "integer",
        "required": true,
        "description": "ID of the building unit timeboxed",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/building_unit_places_properties/{building_unit_places_property_id}",
    "method": "updateProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "building_unit_places_properties",
    "typeScriptTag": "buildingUnitPlacesProperties",
    "description": "Update building unit place property",
    "parameters": [
      {
        "name": "buildingUnitPlacesTimeboxedId",
        "schema": "integer",
        "required": true,
        "description": "ID of the timeboxed",
        "example": 0
      },
      {
        "name": "buildingUnitPlacesPropertyId",
        "schema": "string",
        "required": true,
        "description": "ID of the building unit place property to update",
        "example": "BUILDING_UNIT_PLACES_PROPERTY_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/people",
    "method": "getAllWithinOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Returns all people within the given organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/people",
    "method": "createPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Creates a person.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the current organisation"
      },
      {
        "name": "contact",
        "schema": "boolean",
        "required": false,
        "description": "Boolean check if the person is a contact"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/people/{person_id}",
    "method": "deletePersonWithinOrganisation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Deletes the person within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/people/{person_id}",
    "method": "showPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Shows a person.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/people/{person_id}",
    "method": "updatePerson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "people",
    "typeScriptTag": "people",
    "description": "Updates an person.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "personId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person to update",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_templates",
    "method": "getAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report_templates",
    "typeScriptTag": "reportTemplates",
    "description": "Returns all report template for current customer account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_templates",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report_templates",
    "typeScriptTag": "reportTemplates",
    "description": "Create report template.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_templates/{report_template_id}",
    "method": "deleteReportTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "report_templates",
    "typeScriptTag": "reportTemplates",
    "description": "Delete the report template.",
    "parameters": [
      {
        "name": "reportTemplateId",
        "schema": "integer",
        "required": true,
        "description": "ID of the report template",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_templates/{report_template_id}",
    "method": "showTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report_templates",
    "typeScriptTag": "reportTemplates",
    "description": "Shows a report template",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "reportTemplateId",
        "schema": "integer",
        "required": true,
        "description": "ID of the report template",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_templates/{report_template_id}",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "report_templates",
    "typeScriptTag": "reportTemplates",
    "description": "Update a report template.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "reportTemplateId",
        "schema": "integer",
        "required": true,
        "description": "ID of the report template",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_account_schemas",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report_account_schemas",
    "typeScriptTag": "reportAccountSchemas",
    "description": "Returns all report account schemas for current customer account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_account_schemas",
    "method": "createNewReportAccountSchema",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report_account_schemas",
    "typeScriptTag": "reportAccountSchemas",
    "description": "Customer account users only 🔒",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_account_schemas/{report_account_schema_id}",
    "method": "deleteSchema",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "report_account_schemas",
    "typeScriptTag": "reportAccountSchemas",
    "description": "Delete the report account schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "reportAccountSchemaId",
        "schema": "integer",
        "required": true,
        "description": "ID of the report account schema",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_account_schemas/{report_account_schema_id}",
    "method": "showReportAccountSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report_account_schemas",
    "typeScriptTag": "reportAccountSchemas",
    "description": "Shows a report account schema",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "reportAccountSchemaId",
        "schema": "integer",
        "required": true,
        "description": "ID of the report account schema",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/report_account_schemas/{report_account_schema_id}",
    "method": "updateSchema",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "report_account_schemas",
    "typeScriptTag": "reportAccountSchemas",
    "description": "Update a report account schema.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "reportAccountSchemaId",
        "schema": "integer",
        "required": true,
        "description": "ID of the report account schema",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/person_memberships",
    "method": "listWithinOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "person_memberships",
    "typeScriptTag": "personMemberships",
    "description": "Returns all person_memberships within the given organisation. ",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current organisation",
        "example": 0
      },
      {
        "name": "memberId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the member",
        "example": 0
      },
      {
        "name": "memberType",
        "schema": "string",
        "required": true,
        "description": "The type of the member",
        "example": "MEMBER_TYPE"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/person_memberships",
    "method": "createMembershipInPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "person_memberships",
    "typeScriptTag": "personMemberships",
    "description": "Creates a membership in person",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "person_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "label_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "member_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "member_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_TYPE"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/person_memberships/{person_membership_id}",
    "method": "destroyMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "person_memberships",
    "typeScriptTag": "personMemberships",
    "description": "Destroys the person membership",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "personMembershipId",
        "schema": "integer",
        "required": true,
        "description": "ID of the person membership to be destroyed",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/levels",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "levels",
    "typeScriptTag": "levels",
    "description": "Returns all levels within the given organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "buildingId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the building"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "The name of the level"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/levels",
    "method": "createNewLevel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "levels",
    "typeScriptTag": "levels",
    "description": "Creates a level",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/levels/{level_id}",
    "method": "deleteLevel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "levels",
    "typeScriptTag": "levels",
    "description": "Deletes the level within the current organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "levelId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the level to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/levels/{level_id}",
    "method": "showLevel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "levels",
    "typeScriptTag": "levels",
    "description": "Shows a level.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "levelId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the level to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/levels/{level_id}",
    "method": "updateLevel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "levels",
    "typeScriptTag": "levels",
    "description": "Updates an level",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "levelId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the level to update",
        "example": 0
      },
      {
        "name": "custom_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "category",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/room_and_zone_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "room_and_zone_types",
    "typeScriptTag": "roomAndZoneTypes",
    "description": "Returns all room and area types currently available",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rooms",
    "method": "getAllWithinOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rooms",
    "typeScriptTag": "rooms",
    "description": "Returns all rooms within the given organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rooms",
    "method": "createRoom",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rooms",
    "typeScriptTag": "rooms",
    "description": "Creates a room",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rooms/{room_id}",
    "method": "deleteRoomWithinOrganisation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "rooms",
    "typeScriptTag": "rooms",
    "description": "Deletes the room within the current organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "roomId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the room to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rooms/{room_id}",
    "method": "showRoom",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rooms",
    "typeScriptTag": "rooms",
    "description": "Shows a room",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "roomId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the room to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rooms/{room_id}",
    "method": "updateRoom",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "rooms",
    "typeScriptTag": "rooms",
    "description": "Updates an room",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "roomId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the room to update",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/zones",
    "method": "createZone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "zones",
    "typeScriptTag": "zones",
    "description": "Creates a zone",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/zones/{zone_id}",
    "method": "deleteZone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "zones",
    "typeScriptTag": "zones",
    "description": "Deletes the zone within the current organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "zoneId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the zone to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/zones/{zone_id}",
    "method": "updateZone",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "zones",
    "typeScriptTag": "zones",
    "description": "Updates an zone",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "zoneId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the zone to update",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/departments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "Returns all departments within the given organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "Creates a department within the current organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/departments/{department_id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "Marks a department as deleted within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the department to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/departments/{department_id}",
    "method": "updateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "departments",
    "typeScriptTag": "departments",
    "description": "Updates an department within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "departmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the department to update",
        "example": 0
      },
      {
        "name": "name",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Returns all manufacturers within the given organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers",
    "method": "createNewManufacturer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Creates a manufacturer within the current organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers/{manufacturer_id}",
    "method": "deleteManufacturer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Deletes the manufacturer within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "manufacturerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manufacturer to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers/{manufacturer_id}",
    "method": "updateManufacturer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Updates an manufacturer within the current organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "manufacturerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manufacturer to update",
        "example": 0
      },
      {
        "name": "name",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers/{manufacturer_id}/model_types",
    "method": "listModelTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Returns all types of models within the given manufacturer",
    "parameters": [
      {
        "name": "manufacturerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manufacturer",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers/{manufacturer_id}/model_types",
    "method": "createModelType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Creates a model_type",
    "parameters": [
      {
        "name": "manufacturerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manufacturer",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers/{manufacturer_id}/model_types/{id}",
    "method": "deleteModelType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Deletes the model_type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the model_type to delete",
        "example": 0
      },
      {
        "name": "manufacturerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manufacturer",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/manufacturers/{manufacturer_id}/model_types/{id}",
    "method": "updateModelType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "manufacturers",
    "typeScriptTag": "manufacturers",
    "description": "Updates an model_type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the model_type to update",
        "example": 0
      },
      {
        "name": "manufacturerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the manufacturer",
        "example": 0
      },
      {
        "name": "name",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facility_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facility_types",
    "typeScriptTag": "facilityTypes",
    "description": "Returns all facility types.",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facility_types/facility_types_with_schema",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facility_types",
    "typeScriptTag": "facilityTypes",
    "description": "Returns all facility types.",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facility_types/{facility_type_id}",
    "method": "showType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facility_types",
    "typeScriptTag": "facilityTypes",
    "description": "Shows a facility type",
    "parameters": [
      {
        "name": "facilityTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the facility type to show",
        "example": 0
      },
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facilities",
    "method": "getAllWithinOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "Returns all facilities within the given organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "customId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by custom_id"
      },
      {
        "name": "inventoryNumber",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by inventory_number"
      },
      {
        "name": "serialNumber",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by serial_number"
      },
      {
        "name": "yearOfConstruction",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by year_of_construction"
      },
      {
        "name": "manufacturerId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by manufacturer_id"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by department_id"
      },
      {
        "name": "facilityTypeId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by facility_type_id"
      },
      {
        "name": "propertyId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by property_id"
      },
      {
        "name": "lotId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by lot_id"
      },
      {
        "name": "buildingId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by building_id"
      },
      {
        "name": "levelId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by level_id"
      },
      {
        "name": "roomId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by room_id"
      },
      {
        "name": "zoneId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by zone_id"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Filter facilities by user_id"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "page for pagination by default 0"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "number of items per page by default 50"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facilities",
    "method": "createFacility",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "Creates a facility",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "skipTypeDependentAttribute",
        "schema": "boolean",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facilities/{facility_id}",
    "method": "deleteFacility",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "Deletes the facility within the current organisation",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "facilityId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the facility to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facilities/{facility_id}",
    "method": "showFacility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "Shows a facility",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "facilityId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the facility to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/facilities/{facility_id}",
    "method": "updateFacility",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "facilities",
    "typeScriptTag": "facilities",
    "description": "Updates an facility",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "facilityId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the facility to update",
        "example": 0
      },
      {
        "name": "skipTypeDependentAttribute",
        "schema": "boolean",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activities",
    "method": "listWithFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activities",
    "typeScriptTag": "activities",
    "description": "Returns all activities within the given organisation.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "propertyId",
        "schema": "string",
        "required": false,
        "description": "The ID property to filter the activities."
      },
      {
        "name": "buildingId",
        "schema": "string",
        "required": false,
        "description": "The ID of building to filter activities"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activities",
    "method": "createActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "activities",
    "typeScriptTag": "activities",
    "description": "Creates an activity",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activities/{activity_id}",
    "method": "removeActivity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "activities",
    "typeScriptTag": "activities",
    "description": "Delete the activity",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "string",
        "required": true,
        "description": "ID of the activity you want to delete",
        "example": "ACTIVITY_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activities/{activity_id}",
    "method": "showActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activities",
    "typeScriptTag": "activities",
    "description": "Shows a activity",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activities/{activity_id}",
    "method": "updateActivity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "activities",
    "typeScriptTag": "activities",
    "description": "Update the activity",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "string",
        "required": true,
        "description": "ID of the activity you want to update",
        "example": "ACTIVITY_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activities/{external_id}/reference",
    "method": "showActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activities",
    "typeScriptTag": "activities",
    "description": "Shows a activity",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "The External ID of the activity to show",
        "example": "EXTERNAL_ID"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activity_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activity_types",
    "typeScriptTag": "activityTypes",
    "description": "Returns all activity types",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the current account"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activity_types",
    "method": "createActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "activity_types",
    "typeScriptTag": "activityTypes",
    "description": "Creates an activity type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the current_account"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activity_types/{activity_type_id}",
    "method": "deleteActivityType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "activity_types",
    "typeScriptTag": "activityTypes",
    "description": "Delete the activity type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the current_account"
      },
      {
        "name": "activityTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity type to show",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activity_types/{activity_type_id}",
    "method": "showActivityType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activity_types",
    "typeScriptTag": "activityTypes",
    "description": "Shows a activity type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the current_account"
      },
      {
        "name": "activityTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity type to show",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/activity_types/{activity_type_id}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "activity_types",
    "typeScriptTag": "activityTypes",
    "description": "Update the activity type",
    "parameters": [
      {
        "name": "activityTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity type to show",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attachments",
    "method": "createNewAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Creates an attachment",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parent_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "file_filename_with_extension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_FILENAME_WITH_EXTENSION"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attachments/copy",
    "method": "duplicateAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Duplicate an attachment",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "copy_attachment_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/attachments/{attachment_id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Marks an attachment as deleted.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the current organisation",
        "example": 0
      },
      {
        "name": "attachmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the attachment to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/images",
    "method": "createImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Creates an image",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parent_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "file_filename_with_extension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_FILENAME_WITH_EXTENSION"
      },
      {
        "name": "cover",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/images/{image_id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Marks an image as deleted.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the image to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/images/{image_id}",
    "method": "updateImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Updates an image.",
    "parameters": [
      {
        "name": "currentOrganisationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "imageId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the image to update",
        "example": 0
      },
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
        "name": "file_base64",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_filename_with_extension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cover",
        "schema": "boolean",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_dependent_attributes",
    "method": "getAllWithinParent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "time_dependent_attributes",
    "typeScriptTag": "timeDependentAttributes",
    "description": "Returns all time_dependent_attributes within the given parent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter time_dependent_attributes by id."
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": "Filter time_dependent_attributes by parent_id."
      },
      {
        "name": "parentType",
        "schema": "string",
        "required": false,
        "description": "Filter time_dependent_attributes by parent_type.\nAllowed parent_types: Building, Building::Unit\n"
      },
      {
        "name": "attributeKey",
        "schema": "string",
        "required": false,
        "description": "Filter time_dependent_attributes by attribute_key."
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_dependent_attributes",
    "method": "createAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "time_dependent_attributes",
    "typeScriptTag": "timeDependentAttributes",
    "description": "Creates a time_dependent_attribute",
    "parameters": [
      {
        "name": "parent_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer_account_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_TYPE"
      },
      {
        "name": "attribute_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTRIBUTE_KEY"
      },
      {
        "name": "attribute_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTRIBUTE_VALUE"
      },
      {
        "name": "attribute_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attribute_timestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTRIBUTE_TIMESTAMP"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_dependent_attributes/{time_dependent_attribute_id}",
    "method": "deleteTimeDependentAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "time_dependent_attributes",
    "typeScriptTag": "timeDependentAttributes",
    "description": "Deletes the specified time_dependent_attribute",
    "parameters": [
      {
        "name": "timeDependentAttributeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the time_dependent_attribute to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/time_dependent_attributes/{time_dependent_attribute_id}",
    "method": "updateAttribute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "time_dependent_attributes",
    "typeScriptTag": "timeDependentAttributes",
    "description": "Updates an time_dependent_attribute",
    "parameters": [
      {
        "name": "timeDependentAttributeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the time_dependent_attribute to update",
        "example": 0
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customer_account_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_TYPE"
      },
      {
        "name": "attribute_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTRIBUTE_KEY"
      },
      {
        "name": "attribute_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTRIBUTE_VALUE"
      },
      {
        "name": "attribute_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attribute_timestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTRIBUTE_TIMESTAMP"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Returns all webhooks",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Creates a webhook",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{webhook_id}",
    "method": "deleteWebhookById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Deletes the webhook within the current organisation.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the webhook to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{webhook_id}",
    "method": "showWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Shows a webhook",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the webhook (only shows the webhooks based on current_organisation_id)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{webhook_id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhooks",
    "typeScriptTag": "webhooks",
    "description": "Updates a webhook",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the webhook (only shows the webhooks based on current_organisation_id)",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mode",
        "schema": "number",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organisation_ids",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags",
    "method": "getAllTagsWithCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Returns all tags within the given customer account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
        "example": 0
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": "Search for the label"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags",
    "method": "createTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Creates a tag",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{tag_id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Marks a tag as deleted.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the tag to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/{tag_id}",
    "method": "updateTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Update the tag",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current customer account",
        "example": 0
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "ID of the tag you want to update",
        "example": "TAG_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/merge",
    "method": "mergeMasterTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Merges master tags with other tags",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the current_account",
        "example": 0
      },
      {
        "name": "master_tag",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "other_tags",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tags/assign_buildings",
    "method": "assignBuildings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "tags",
    "typeScriptTag": "tags",
    "description": "Assign multiple tags to multiple buildings",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/imports",
    "method": "getAllImports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "csv_imports",
    "typeScriptTag": "csvImports",
    "description": "Return all imports",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "isDemo",
        "schema": "boolean",
        "required": false,
        "description": "Filter by is_demo"
      },
      {
        "name": "locationType",
        "schema": "string",
        "required": false,
        "description": "Filter the imports by type"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/imports",
    "method": "createByFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "csv_imports",
    "typeScriptTag": "csvImports",
    "description": "Creates a import by file",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "organisationId",
        "schema": "integer",
        "required": true,
        "description": "ID of the organisation",
        "example": 0
      },
      {
        "name": "location_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATION_TYPE"
      },
      {
        "name": "is_demo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "file_base64",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_BASE64"
      },
      {
        "name": "file_filename_with_extension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_FILENAME_WITH_EXTENSION"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/imports/{import_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "csv_imports",
    "typeScriptTag": "csvImports",
    "description": "Shows information for specific import",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "importId",
        "schema": "integer",
        "required": true,
        "description": "ID of the csv import",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/imports/{import_id}",
    "method": "updateImport",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "csv_imports",
    "typeScriptTag": "csvImports",
    "description": "Update the import",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "importId",
        "schema": "string",
        "required": true,
        "description": "ID of the import you want to update",
        "example": "IMPORT_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecards",
    "method": "listAllScorecards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecards",
    "typeScriptTag": "scorecards",
    "description": "Returns all scorecards",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecards",
    "method": "createNewScorecard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecards",
    "typeScriptTag": "scorecards",
    "description": "Creates a scorecard",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecards/{scorecard_id}",
    "method": "deleteWithinAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scorecards",
    "typeScriptTag": "scorecards",
    "description": "Deletes the scorecard within the current account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard to delete",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecards/{scorecard_id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecards",
    "typeScriptTag": "scorecards",
    "description": "Shows a scorecard",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard (only shows the scorecards based on current_organisation_id)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecards/{scorecard_id}",
    "method": "updateScorecard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "scorecards",
    "typeScriptTag": "scorecards",
    "description": "Updates a scorecard",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard (only shows the scorecards based on current_organisation_id)",
        "example": 0
      },
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_segments",
    "method": "createNewSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_segments",
    "typeScriptTag": "scorecardSegments",
    "description": "Creates a scorecard segment",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_segments/{scorecard_segment_id}",
    "method": "deleteSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scorecard_segments",
    "typeScriptTag": "scorecardSegments",
    "description": "Deletes the scorecard segment within the current account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "scorecardSegmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard segment to delete",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_segments/{scorecard_segment_id}",
    "method": "updateSegment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "scorecard_segments",
    "typeScriptTag": "scorecardSegments",
    "description": "Updates a scorecard segment",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "scorecardSegmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard segment (only shows the scorecards based on current_organisation_id)",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "weight_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_topics",
    "method": "createNewTopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_topics",
    "typeScriptTag": "scorecardTopics",
    "description": "Creates a scorecard topic",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_topics/{scorecard_topic_id}",
    "method": "deleteTopic",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scorecard_topics",
    "typeScriptTag": "scorecardTopics",
    "description": "Deletes the scorecard topic within the current segment.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardTopicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard topic to delete",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_topics/{scorecard_topic_id}",
    "method": "updateTopic",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "scorecard_topics",
    "typeScriptTag": "scorecardTopics",
    "description": "Updates a scorecard topic",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardTopicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard topic (only shows the topic based on current account)",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "weight_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "weight_value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "position",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_subtopics",
    "method": "createSubtopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_subtopics",
    "typeScriptTag": "scorecardSubtopics",
    "description": "Creates a scorecard subtopic",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_subtopics/{scorecard_subtopic_id}",
    "method": "deleteSubtopic",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scorecard_subtopics",
    "typeScriptTag": "scorecardSubtopics",
    "description": "Deletes the scorecard subtopic within the current segment.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "scorecardSubtopicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard subtopic to delete",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_subtopics/{scorecard_subtopic_id}",
    "method": "updateSubtopic",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "scorecard_subtopics",
    "typeScriptTag": "scorecardSubtopics",
    "description": "Updates a scorecard subtopic",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer account",
        "example": 0
      },
      {
        "name": "scorecardSubtopicId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard subtopic (only shows the subtopic based on current account)",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "weight_value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "scorecard_scores",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attribute_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attribute_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/de_assign",
    "method": "deAssign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "De-assigns scorecard memberships from scorecard",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships",
    "method": "listAllScorecardMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Returns all scorecard memberships within the given account. ",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardId",
        "schema": "string",
        "required": false,
        "description": "The ID on other scorecard to filter memberships"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships",
    "method": "createMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Creates a scorecard membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/{scorecard_membership_id}",
    "method": "deleteMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Deletes the scorecard membership within the current account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardMembershipId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard membership to delete",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/{scorecard_membership_id}",
    "method": "showMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Shows a scorecard membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardMembershipId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard membership (only shows the scorecards based on current account)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/{scorecard_membership_id}/refresh",
    "method": "refreshMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Refresh a scorecard membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardMembershipId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard membership (only shows the scorecards based on current account)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/refresh_by_scorecard",
    "method": "refreshScores",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Refresh scores for specific scorecard/s",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/refresh_all_by_parent",
    "method": "refreshAllByParent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Refresh all scorecards by parent",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/calculated_costs",
    "method": "calculateCosts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Calculated costs of scorecard memberships",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "parent_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "parent_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scorecard_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "scorecard_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "segment_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "segment_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "topic_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtopic_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "subtopic_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_catalog_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "technical_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "realcube_price",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_memberships/count_buildings",
    "method": "countBuildingsByScorecardIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_memberships",
    "typeScriptTag": "scorecardMemberships",
    "description": "Get number of buildings by providing scorecard ids",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "parent_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "parent_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scorecard_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "scorecard_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "segment_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "segment_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "topic_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtopic_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "subtopic_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_catalog_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "technical_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "realcube_price",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_assigners",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecard_assigners",
    "typeScriptTag": "scorecardAssigners",
    "description": "Returns all scorecard assigners within the given account. ",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardId",
        "schema": "string",
        "required": false,
        "description": "The ID on other scorecard to filter assigners"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_assigners",
    "method": "createNewScorecardAssigner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scorecard_assigners",
    "typeScriptTag": "scorecardAssigners",
    "description": "Creates a scorecard assigner",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_assigners/{scorecard_assigner_id}",
    "method": "deleteScorecardAssigner",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scorecard_assigners",
    "typeScriptTag": "scorecardAssigners",
    "description": "Deletes the scorecard assigner within the current account.",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardAssignerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard assigner to delete",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/scorecard_assigners/{scorecard_assigner_id}",
    "method": "show",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scorecard_assigners",
    "typeScriptTag": "scorecardAssigners",
    "description": "Shows a scorecard assigner",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "scorecardAssignerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the scorecard assigner (only shows the scorecards based on current account)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/data_catalogs",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "data_catalogs",
    "typeScriptTag": "dataCatalogs",
    "description": "Returns all data catalogs",
    "parameters": [
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": "The locale for filtering the data catalogs."
      },
      {
        "name": "appIds",
        "schema": "string",
        "required": true,
        "description": "The ids of the apps for filtering the data catalogs.",
        "example": "APP_IDS"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/data_catalogs",
    "method": "createNewCatalog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "data_catalogs",
    "typeScriptTag": "dataCatalogs",
    "description": "Creates a data catalog",
    "parameters": [],
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/data_catalogs/{data_catalog_id}",
    "method": "deleteCatalog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "data_catalogs",
    "typeScriptTag": "dataCatalogs",
    "description": "Deletes the data catalog within the current app.",
    "parameters": [
      {
        "name": "dataCatalogId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the data catalog to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/data_catalogs/{data_catalog_id}",
    "method": "showDataCatalog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "data_catalogs",
    "typeScriptTag": "dataCatalogs",
    "description": "Shows a data catalog",
    "parameters": [
      {
        "name": "dataCatalogId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the data_catalog (only shows the data_catalogs based on current_organisation_id)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/data_catalogs/{data_catalog_id}",
    "method": "updateCatalog",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "data_catalogs",
    "typeScriptTag": "dataCatalogs",
    "description": "Updates a data_catalog",
    "parameters": [
      {
        "name": "dataCatalogId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the data catalog (only shows the data catalog)",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "technical_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quality_indicator",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category_l1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category_l2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category_l3",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category_l4",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category_l5",
        "schema": "string",
        "description": ""
      },
      {
        "name": "realcube_price",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "realcube_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "realcube_price_category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_lifetime",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "attribute_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/raw_data_catalogs",
    "method": "getAllRawdataCatalogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "raw_data_catalogs",
    "typeScriptTag": "rawDataCatalogs",
    "description": "Returns all raw data catalogs",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit the number of results to return, if null then return all results"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "The ordering of the results returned, if null then will return not ordered results.\n            Possible columns: app_id, status, version,\n            Possible order: asc, desc",
        "example": "app_id.desc, status.desc, version.desc"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/raw_data_catalogs/{raw_data_catalog_id}",
    "method": "showDataCatalog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "raw_data_catalogs",
    "typeScriptTag": "rawDataCatalogs",
    "description": "Shows a data catalog",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the customer_account",
        "example": 0
      },
      {
        "name": "rawDataCatalogId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the data_catalog (only shows the raw_data_catalogs based on current_organisation_id)",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_types",
    "method": "getAllTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_increase_types",
    "typeScriptTag": "rentIncreaseTypes",
    "description": "Return rent_increase_types",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_types",
    "method": "createType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rent_increase_types",
    "typeScriptTag": "rentIncreaseTypes",
    "description": "Creates a rent_increase_type (Admin only)",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
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
        "name": "category",
        "schema": "integer",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_types/{rent_increase_type_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "rent_increase_types",
    "typeScriptTag": "rentIncreaseTypes",
    "description": "Delete a rent_increase_type (Admin only)",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "rentIncreaseTypeId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the rent_increase_type to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_types/{rent_increase_type_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_increase_types",
    "typeScriptTag": "rentIncreaseTypes",
    "description": "Return rent_increase_type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent_increase_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_types/{rent_increase_type_id}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "rent_increase_types",
    "typeScriptTag": "rentIncreaseTypes",
    "description": "Update rent_increase_type",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseTypeId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent_increase_type to update",
        "example": 0
      },
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
        "name": "category",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_indices",
    "method": "getIndexData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_increase_indices",
    "typeScriptTag": "rentIncreaseIndices",
    "description": "Return rent_increase_indices",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseTypeId",
        "schema": "integer",
        "description": "ID of the rent_increase_type"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "Date of the rent_increase_index"
      },
      {
        "name": "subtype",
        "schema": "string",
        "description": "Subtype (https://docs.realcube.com/ of the rent_increase"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_indices",
    "method": "createIndex",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rent_increase_indices",
    "typeScriptTag": "rentIncreaseIndices",
    "description": "Creates a rent_increase_index (Admin only)",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rent_increase_type_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtype",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_indices/{rent_increase_index_id}",
    "method": "deleteRentIncreaseIndex",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "rent_increase_indices",
    "typeScriptTag": "rentIncreaseIndices",
    "description": "Delete a rent_increase_index (Admin only)",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "rentIncreaseIndexId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the rent_increase_index to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_indices/{rent_increase_index_id}",
    "method": "returnRentIncreaseIndex",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_increase_indices",
    "typeScriptTag": "rentIncreaseIndices",
    "description": "Return rent_increase_index",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseIndexId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent_increase_index",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increase_indices/{rent_increase_index_id}",
    "method": "updateRentIncreaseIndexById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "rent_increase_indices",
    "typeScriptTag": "rentIncreaseIndices",
    "description": "Update rent_increase_index",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseIndexId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent_increase_index to update",
        "example": 0
      },
      {
        "name": "value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rent_increase_type_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtype",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/task_memberships",
    "method": "getAllTaskMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task_memberships",
    "typeScriptTag": "taskMemberships",
    "description": "Return task_memberships",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "taskIds",
        "schema": "string",
        "description": "IDs of the tasks",
        "example": "1,2,3"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/task_memberships",
    "method": "createMembership",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "task_memberships",
    "typeScriptTag": "taskMemberships",
    "description": "Creates a task_membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "task_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "place_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "organisation_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "place_type",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/task_memberships/{task_membership_id}",
    "method": "deleteTaskMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "task_memberships",
    "typeScriptTag": "taskMemberships",
    "description": "Delete the task_membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "taskMembershipId",
        "schema": "string",
        "required": true,
        "description": "ID of the task_membership you want to delete",
        "example": "TASK_MEMBERSHIP_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/task_memberships/{task_membership_id}",
    "method": "updateMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "task_memberships",
    "typeScriptTag": "taskMemberships",
    "description": "Update task_membership",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "taskMembershipId",
        "schema": "string",
        "required": true,
        "description": "ID of the task_membership to update",
        "example": "TASK_MEMBERSHIP_ID"
      },
      {
        "name": "task_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "place_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "organisation_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "place_type",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increases",
    "method": "getIncreases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_increases",
    "typeScriptTag": "rentIncreases",
    "description": "Return rent's increases",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increases",
    "method": "createNewIncrease",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "rent_increases",
    "typeScriptTag": "rentIncreases",
    "description": "Creates a rent's increase (Admin only)",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increases/{rent_increase_id}/apply",
    "method": "applyRentIncrease",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "rent_increases",
    "typeScriptTag": "rentIncreases",
    "description": "Apply rent'  increase",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent'  increase to update",
        "example": 0
      },
      {
        "name": "apply",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increases/{rent_increase_id}",
    "method": "deleteRentIncrease",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "rent_increases",
    "typeScriptTag": "rentIncreases",
    "description": "Delete a rent_increase (Admin only)",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "rentIncreaseId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the rent_increase to delete",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increases/{rent_increase_id}",
    "method": "returnIncrease",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rent_increases",
    "typeScriptTag": "rentIncreases",
    "description": "Return rent's increase",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent'  increase",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/rent_increases/{rent_increase_id}",
    "method": "updateRentIncrease",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "rent_increases",
    "typeScriptTag": "rentIncreases",
    "description": "Update rent'  increase",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer_account",
        "example": 0
      },
      {
        "name": "rentIncreaseId",
        "schema": "integer",
        "required": true,
        "description": "ID of the rent'  increase to update",
        "example": 0
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "recurring_increase_year",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "recurring_increase_month",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "status",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "adjustment_percentage",
        "schema": "number",
        "description": ""
      },
      {
        "name": "max_increase_percentage",
        "schema": "number",
        "description": ""
      },
      {
        "name": "threshold",
        "schema": "number",
        "description": ""
      },
      {
        "name": "step_two_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "step_three_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "old_vpi_month",
        "schema": "string",
        "description": ""
      },
      {
        "name": "new_vpi_month",
        "schema": "string",
        "description": ""
      },
      {
        "name": "building_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "automatic_adjustment",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emission_factor_settings/update",
    "method": "updateEmissionFactorSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "emission_factor_settings",
    "typeScriptTag": "emissionFactorSettings",
    "description": "Updates an EmissionFactorSetting",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID on customer_account of the EmissionFactorSettings to show"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emission_factor_settings",
    "method": "getAllWithinAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "emission_factor_settings",
    "typeScriptTag": "emissionFactorSettings",
    "description": "Returns all EmissionFactorSettings within the given account",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID on customer_account of the EmissionFactorSettings to show"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emission_factor_settings",
    "method": "createEmissionFactorSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "emission_factor_settings",
    "typeScriptTag": "emissionFactorSettings",
    "description": "Creates an EmissionFactorSetting",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID on customer_account of the EmissionFactorSettings to show"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emission_factor_settings/{emission_factor_setting_id}",
    "method": "deleteEmissionFactorSetting",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "emission_factor_settings",
    "typeScriptTag": "emissionFactorSettings",
    "description": "Deletes the EmissionFactorSetting within the account.",
    "parameters": [
      {
        "name": "emissionFactorSettingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the emission_factor_setting to show",
        "example": 0
      },
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID on customer_account of the EmissionFactorSettings to show"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/emission_factor_settings/{emission_factor_setting_id}",
    "method": "showEmissionFactorSetting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "emission_factor_settings",
    "typeScriptTag": "emissionFactorSettings",
    "description": "Shows a EmissionFactorSetting",
    "parameters": [
      {
        "name": "emissionFactorSettingId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the emission_factor_setting to show",
        "example": 0
      },
      {
        "name": "customerAccountId",
        "schema": "string",
        "required": false,
        "description": "The ID on customer_account of the EmissionFactorSettings to show"
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_category_configs",
    "method": "createConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer_account_category_configs",
    "typeScriptTag": "customerAccountCategoryConfigs",
    "description": "Creates a customer account category config",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_category_configs/{customer_account_category_config_id}",
    "method": "deleteConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "customer_account_category_configs",
    "typeScriptTag": "customerAccountCategoryConfigs",
    "description": "Delete the customer account category config",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountCategoryConfigId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer account category config you want to delete",
        "example": "CUSTOMER_ACCOUNT_CATEGORY_CONFIG_ID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customer_account_category_configs/{customer_account_category_config_id}",
    "method": "updateConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "customer_account_category_configs",
    "typeScriptTag": "customerAccountCategoryConfigs",
    "description": "Update the customer account category config",
    "parameters": [
      {
        "name": "customerAccountId",
        "schema": "integer",
        "required": true,
        "description": "ID of the customer account",
        "example": 0
      },
      {
        "name": "customerAccountCategoryConfigId",
        "schema": "string",
        "required": true,
        "description": "ID of the customer account category config you want to update",
        "example": "CUSTOMER_ACCOUNT_CATEGORY_CONFIG_ID"
      },
      {
        "name": "display",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="REALCUBE API"
      apiBaseUrl="api.realcube.com/api"
      apiVersion="1.0.0"
      endpoints={214}
      sdkMethods={387}
      schemas={2377}
      parameters={770}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/realcube/openapi.yaml"
      developerDocumentation="docs.realcube.com/"
    />
  );
}
  