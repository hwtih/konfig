import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function KlarnaPaymentsTypeScriptSdk() {
  return (
    <Sdk
      sdkName="klarna-payments-typescript-sdk"
      metaDescription="Klarna is a Swedish bank that provides online financial services such as payment solutions for online storefronts. It offers customers the ability to buy now and pay later, as well as other financing options. Klarna has gained popularity for its smooth checkout experience and customer-friendly payment options."
      company="Klarna"
      serviceName="Payments"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/payments/logo.png"
      clientNameCamelCase="klarnaPayments"
      homepage="klarna.com"
      lastUpdated={new Date("2024-03-10T11:11:26.661Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/payments/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/payments/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/payments/v1/sessions",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Create a session",
    "parameters": [
      {
        "name": "acquiring_channel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "authorization_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "client_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_payment_method_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "design",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_data",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_reference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_reference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_urls",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "order_amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "order_lines",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "order_tax_amount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchase_country",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "purchase_currency",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "intent",
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
        "statusCode": "400",
        "description": "We were unable to create a session with the provided data. Some field constraint was violated."
      },
      {
        "statusCode": "403",
        "description": "You were not authorized to execute this operation."
      }
    ]
  },
  {
    "url": "/payments/v1/sessions/{session_id}",
    "method": "getSessionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Get details about a session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "session_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "404",
        "description": "The session does not exist."
      }
    ]
  },
  {
    "url": "/payments/v1/sessions/{session_id}",
    "method": "updateSessionDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Update a session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "session_id"
      },
      {
        "name": "acquiring_channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "authorization_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billing_address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "client_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_payment_method_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "design",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expires_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchant_data",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchant_reference1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchant_reference2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "merchant_urls",
        "schema": "object",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "order_amount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "order_lines",
        "schema": "array",
        "description": ""
      },
      {
        "name": "order_tax_amount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "payment_method_categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "purchase_country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchase_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "intent",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The session was updated successfully."
      },
      {
        "statusCode": "400",
        "description": "We were unable to update the session with the provided data. Some field constraint was violated."
      },
      {
        "statusCode": "403",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "404",
        "description": "The session does not exist."
      }
    ]
  },
  {
    "url": "/payments/v1/authorizations/{authorizationToken}",
    "method": "cancelAuthorization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Cancel an authorization",
    "parameters": [
      {
        "name": "authorizationToken",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The authorization was cancelled successfully."
      },
      {
        "statusCode": "403",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "404",
        "description": "The authorization does not exist."
      }
    ]
  },
  {
    "url": "/payments/v1/authorizations/{authorizationToken}/order",
    "method": "createOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Create an order",
    "parameters": [
      {
        "name": "authorizationToken",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "authorization_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_capture",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_payment_method_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_data",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_reference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_reference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchant_urls",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "order_amount",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "order_lines",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "order_tax_amount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchase_country",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "purchase_currency",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "shipping_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "400",
        "description": "We were unable to create an order with the provided data. Some field constraint was violated."
      },
      {
        "statusCode": "403",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "404",
        "description": "The authorization does not exist."
      },
      {
        "statusCode": "409",
        "description": "The data in the request does not match the session for the authorization."
      }
    ]
  },
  {
    "url": "/payments/v1/authorizations/{authorizationToken}/customer-token",
    "method": "generateCustomerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment",
    "typeScriptTag": "payment",
    "description": "Generate a consumer token",
    "parameters": [
      {
        "name": "authorizationToken",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "billing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intended_use",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "purchase_country",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "purchase_currency",
        "schema": "string",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "You were not authorized to execute this operation."
      },
      {
        "statusCode": "404",
        "description": "The authorization does not exist."
      },
      {
        "statusCode": "409",
        "description": "The data in the request does not match the session for the authorization."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Klarna Payments API V1"
      apiBaseUrl="https://api.klarna.com"
      apiVersion="1.0.0"
      endpoints={5}
      sdkMethods={6}
      schemas={22}
      parameters={78}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/klarna/payments/openapi.yaml"
    />
  );
}
  