import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BasetenTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="baseten-typescript-sdk"
      metaDescription={`At Baseten we provide all the infrastructure you need to deploy and serve ML models performantly, scalably, and cost-efficiently.Get started in minutes, and avoid getting tangled in complex deployment processes. You can deploy best-in-class open-source models and take advantage of optimized serving for your own models.We also utilize horizontally scalable services that take you from prototype to production, with light-speed inference on infra that autoscales with your traffic.Best in class doesn't mean breaking the bank. Run your models on the best infrastructure without running up costs by taking advantage of our scaled-to-zero feature.`}
      company="Baseten"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/logo.png"
      companyKebabCase="baseten"
      clientNameCamelCase="baseten"
      homepage="baseten.co"
      lastUpdated={new Date("2024-03-24T21:42:09.454Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","ml","developer_tools","automation","collaboration","media","cloud","open_source","machine_learning","deployment","scalability","cost_efficiency","llm","stable_diffusion","tts","text_to_audio","text_to_speech","text_to_image","image_to_video","image_classification","text_embeddings","audio_to_text","image_to_text"]}
      methods={[
  {
    "url": "/v1/secrets",
    "method": "getAllSecrets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Secret",
    "typeScriptTag": "secret",
    "description": "Gets all secrets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of Baseten secrets."
      }
    ]
  },
  {
    "url": "/v1/secrets",
    "method": "upsertNewSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Secret",
    "typeScriptTag": "secret",
    "description": "Upserts a secret",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Baseten secret. Note that we do not support retrieving secret values."
      }
    ]
  },
  {
    "url": "/v1/models",
    "method": "getAllModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Model",
    "typeScriptTag": "model",
    "description": "Gets all models",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of models."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}",
    "method": "getModelById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Model",
    "typeScriptTag": "model",
    "description": "Gets a model by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments",
    "method": "getAllDeployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Model",
    "typeScriptTag": "model",
    "description": "Gets all deployments of a model",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of deployments of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development",
    "method": "getDevelopmentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Gets a model's development deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/production",
    "method": "getProductionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Gets a model's production deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}",
    "method": "detailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Gets a model's deployment by id",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development/autoscaling_settings",
    "method": "updateDevelopmentSetting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AutoscalingSetting",
    "typeScriptTag": "autoscalingSetting",
    "description": "Updates a development deployment's autoscaling settings",
    "parameters": [
      {
        "name": "min_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "max_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "autoscaling_window",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "scale_down_delay",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "concurrency_target",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to update autoscaling settings."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/production/autoscaling_settings",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AutoscalingSetting",
    "typeScriptTag": "autoscalingSetting",
    "description": "Updates a production deployment's autoscaling settings",
    "parameters": [
      {
        "name": "min_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "max_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "autoscaling_window",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "scale_down_delay",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "concurrency_target",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to update autoscaling settings."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}/autoscaling_settings",
    "method": "updateDeploymentSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "AutoscalingSetting",
    "typeScriptTag": "autoscalingSetting",
    "description": "Updates a deployment's autoscaling settings",
    "parameters": [
      {
        "name": "min_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "max_replica",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "autoscaling_window",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "scale_down_delay",
        "schema": "integer",
        "description": "",
        "default": null
      },
      {
        "name": "concurrency_target",
        "schema": "integer",
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to update autoscaling settings."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development/promote",
    "method": "deployPromote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Model",
    "typeScriptTag": "model",
    "description": "Promotes a development deployment to production",
    "parameters": [
      {
        "name": "scale_down_previous_production",
        "schema": "boolean",
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}/promote",
    "method": "deploymentPromote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Model",
    "typeScriptTag": "model",
    "description": "Promotes a deployment to production",
    "parameters": [
      {
        "name": "scale_down_previous_production",
        "schema": "boolean",
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A deployment of a model."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development/activate",
    "method": "activateDevelopmentDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Activates a development deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to activate a deployment."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/production/activate",
    "method": "activateProduction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Activates a production deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to activate a deployment."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}/activate",
    "method": "activateStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Activates a deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to activate a deployment."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/development/deactivate",
    "method": "deactivateDevelopment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Deactivates a development deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to deactivate a deployment."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/production/deactivate",
    "method": "deactivateProductionDeployment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Deactivates a production deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to deactivate a deployment."
      }
    ]
  },
  {
    "url": "/v1/models/{model_id}/deployments/{deployment_id}/deactivate",
    "method": "deactivateDeploymentStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deployment",
    "typeScriptTag": "deployment",
    "description": "Deactivates a deployment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request to deactivate a deployment."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Baseten management API"
      apiBaseUrl="https://api.baseten.co"
      apiVersion="1.0.0"
      endpoints={18}
      sdkMethods={35}
      schemas={15}
      parameters={19}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baseten/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baseten/openapi.yaml"
      developerDocumentation="docs.baseten.co/welcome"
    />
  );
}
  