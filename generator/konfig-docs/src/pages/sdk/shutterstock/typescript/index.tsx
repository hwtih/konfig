import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function ShutterstockTypeScriptSdk() {
  return (
    <Sdk
      sdkName="shutterstock-typescript-sdk"
      metaDescription="Download the best royalty free images from Shutterstock, including photos, vectors, and illustrations. Enjoy straightforward pricing and simple licensing."
      company="Shutterstock"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shutterstock/logo.png"
      clientNameCamelCase="shutterstock"
      homepage="developers.shutterstock.com"
      lastUpdated={new Date("2024-02-01T01:04:20.484Z")}
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shutterstock/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v2/ai/audio/descriptors",
    "method": "listCustomDescriptors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "custom_music",
    "typeScriptTag": "customMusic",
    "description": "List computer audio descriptors",
    "parameters": [
      {
        "name": "renderSpeedOver",
        "schema": "number",
        "description": "Show descriptors with an average render speed that is greater than or equal to the specified value"
      },
      {
        "name": "bandId",
        "schema": "string",
        "description": "Show descriptors that contain the specified band (case-sentsitive)"
      },
      {
        "name": "bandName",
        "schema": "string",
        "description": "Show descriptors with the specified band name (case-sensitive)"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "id",
        "schema": "array",
        "description": "Show descriptors with the specified IDs (case-sensitive)"
      },
      {
        "name": "instrumentName",
        "schema": "string",
        "description": "Show descriptors with the specified instrument name (case-sensitive)"
      },
      {
        "name": "instrumentId",
        "schema": "string",
        "description": "Show descriptors with the specified instrument ID (case-sensitive)"
      },
      {
        "name": "tempo",
        "schema": "number",
        "description": "Show descriptors whose tempo range includes the specified tempo in beats per minute"
      },
      {
        "name": "tempoTo",
        "schema": "number",
        "description": "Show descriptors with a tempo that is less than or equal to the specified number"
      },
      {
        "name": "tempoFrom",
        "schema": "number",
        "description": "Show descriptors that have a tempo range that includes the specified tempo in beats per minute"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Show descriptors with the specified name (case-sensitive)"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List Descriptors results"
      }
    ]
  },
  {
    "url": "/v2/ai/audio/instruments",
    "method": "listCustomInstruments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "custom_music",
    "typeScriptTag": "customMusic",
    "description": "List computer audio instruments",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "description": "Show instruments with the specified ID"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Show instruments with the specified name (case-sensitive)"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image search results"
      }
    ]
  },
  {
    "url": "/v2/ai/audio/renders",
    "method": "fetchRenders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "custom_music",
    "typeScriptTag": "customMusic",
    "description": "Get details about audio renders",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "One or more render IDs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audio render data"
      }
    ]
  },
  {
    "url": "/v2/ai/audio/renders",
    "method": "createAudioRenders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "custom_music",
    "typeScriptTag": "customMusic",
    "description": "Create rendered audio",
    "parameters": [
      {
        "name": "audio_renders",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audio render data"
      }
    ]
  },
  {
    "url": "/v2/audio",
    "method": "getTrackList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "List audio tracks",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "One or more audio IDs"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of tracks"
      }
    ]
  },
  {
    "url": "/v2/audio/collections",
    "method": "getTrackCollectionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "List audio collections",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of collections"
      }
    ]
  },
  {
    "url": "/v2/audio/collections",
    "method": "createTrackCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Create audio collections",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Collection creation response"
      }
    ]
  },
  {
    "url": "/v2/audio/collections/{id}",
    "method": "deleteTrackCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Delete audio collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/audio/collections/{id}",
    "method": "getTrackCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Get the details of audio collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      },
      {
        "name": "shareCode",
        "schema": "string",
        "description": "Code to retrieve a shared collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about a collection of assets"
      }
    ]
  },
  {
    "url": "/v2/audio/collections/{id}",
    "method": "renameTrackCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Rename audio collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/audio/collections/{id}/items",
    "method": "deleteTrackCollectionItems",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Remove audio tracks from collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "itemId",
        "schema": "array",
        "description": "One or more item IDs to remove from the collection"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/audio/collections/{id}/items",
    "method": "getTrackCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Get the contents of audio collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "shareCode",
        "schema": "string",
        "description": "Code to retrieve the contents of a shared collection"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of items in a collection"
      }
    ]
  },
  {
    "url": "/v2/audio/collections/{id}/items",
    "method": "addTrackCollectionItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Add audio tracks to collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/audio/genres",
    "method": "listGenres",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "List audio genres",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "description": "Which language the genres will be returned"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of audio genres"
      }
    ]
  },
  {
    "url": "/v2/audio/instruments",
    "method": "listInstruments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "List audio instruments",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "description": "Which language the instruments will be returned in"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of instruments"
      }
    ]
  },
  {
    "url": "/v2/audio/licenses",
    "method": "getTrackLicenseList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "List audio licenses",
    "parameters": [
      {
        "name": "audioId",
        "schema": "string",
        "description": "Show licenses for the specified track ID"
      },
      {
        "name": "license",
        "schema": "string",
        "description": "Restrict results by license. Prepending a `-` sign will exclude results by license"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "Filter licenses by username of licensee"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show licenses created on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show licenses created before the specified date"
      },
      {
        "name": "downloadAvailability",
        "schema": "string",
        "description": "Filter licenses by download availability"
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "Set to true to see license history for all members of your team."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of download events"
      }
    ]
  },
  {
    "url": "/v2/audio/licenses",
    "method": "licenseTrack",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "License audio tracks",
    "parameters": [
      {
        "name": "license",
        "schema": "string",
        "description": "License type"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that led to licensing this track"
      },
      {
        "name": "audio",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of audio license results"
      }
    ]
  },
  {
    "url": "/v2/audio/licenses/{id}/downloads",
    "method": "downloadTracks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Download audio tracks",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "License ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audio License URL object"
      }
    ]
  },
  {
    "url": "/v2/audio/moods",
    "method": "listMoods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "List audio moods",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "description": "Which language the moods will be returned in"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of audio moods"
      }
    ]
  },
  {
    "url": "/v2/audio/search",
    "method": "searchTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Search for tracks",
    "parameters": [
      {
        "name": "artists",
        "schema": "array",
        "description": "Show tracks with one of the specified artist names or IDs"
      },
      {
        "name": "bpm",
        "schema": "integer",
        "description": "(Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute"
      },
      {
        "name": "bpmFrom",
        "schema": "integer",
        "description": "Show tracks with the specified beats per minute or faster"
      },
      {
        "name": "bpmTo",
        "schema": "integer",
        "description": "Show tracks with the specified beats per minute or slower"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "Show tracks with the specified duration in seconds"
      },
      {
        "name": "durationFrom",
        "schema": "integer",
        "description": "Show tracks with the specified duration or longer in seconds"
      },
      {
        "name": "durationTo",
        "schema": "integer",
        "description": "Show tracks with the specified duration or shorter in seconds"
      },
      {
        "name": "genre",
        "schema": "array",
        "description": "Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`"
      },
      {
        "name": "isInstrumental",
        "schema": "boolean",
        "description": "Show instrumental music only"
      },
      {
        "name": "instruments",
        "schema": "array",
        "description": "Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`"
      },
      {
        "name": "moods",
        "schema": "array",
        "description": "Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "description": "Sort order"
      },
      {
        "name": "vocalDescription",
        "schema": "string",
        "description": "Show tracks with the specified vocal description (male, female)"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Fields to display in the response; see the documentation for the fields parameter in the overview section"
      },
      {
        "name": "library",
        "schema": "string",
        "description": "Which library to search"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Which language to search in"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audio search results"
      }
    ]
  },
  {
    "url": "/v2/audio/{id}",
    "method": "getTrack",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audio",
    "typeScriptTag": "audio",
    "description": "Get details about audio tracks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Audio track ID"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audio metadata"
      }
    ]
  },
  {
    "url": "/v2/bulk_search/images",
    "method": "bulkSearchImages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Run multiple image searches",
    "parameters": [
      {
        "name": "addedDate",
        "schema": "string",
        "description": "Show images added on the specified date"
      },
      {
        "name": "addedDateStart",
        "schema": "string",
        "description": "Show images added on or after the specified date"
      },
      {
        "name": "aspectRatioMin",
        "schema": "number",
        "description": "Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image"
      },
      {
        "name": "aspectRatioMax",
        "schema": "number",
        "description": "Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image"
      },
      {
        "name": "aspectRatio",
        "schema": "number",
        "description": "Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image"
      },
      {
        "name": "addedDateEnd",
        "schema": "string",
        "description": "Show images added before the specified date"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Show images with the specified Shutterstock-defined category; specify a category name or ID"
      },
      {
        "name": "color",
        "schema": "string",
        "description": "Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors"
      },
      {
        "name": "contributor",
        "schema": "array",
        "description": "Show images with the specified contributor names or IDs, allows multiple"
      },
      {
        "name": "contributorCountry",
        "schema": "undefined",
        "description": "Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Fields to display in the response; see the documentation for the fields parameter in the overview section"
      },
      {
        "name": "height",
        "schema": "integer",
        "description": "(Deprecated; use height_from and height_to instead) Show images with the specified height"
      },
      {
        "name": "heightFrom",
        "schema": "integer",
        "description": "Show images with the specified height or larger, in pixels"
      },
      {
        "name": "heightTo",
        "schema": "integer",
        "description": "Show images with the specified height or smaller, in pixels"
      },
      {
        "name": "imageType",
        "schema": "array",
        "description": "Show images of the specified type"
      },
      {
        "name": "keywordSafeSearch",
        "schema": "boolean",
        "description": "Hide results with potentially unsafe keywords"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Set query and result language (uses Accept-Language header if not set)"
      },
      {
        "name": "license",
        "schema": "array",
        "description": "Show only images with the specified license"
      },
      {
        "name": "model",
        "schema": "array",
        "description": "Show image results with the specified model IDs"
      },
      {
        "name": "orientation",
        "schema": "string",
        "description": "Show image results with horizontal or vertical orientation"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "peopleModelReleased",
        "schema": "boolean",
        "description": "Show images of people with a signed model release"
      },
      {
        "name": "peopleAge",
        "schema": "string",
        "description": "Show images that feature people of the specified age category"
      },
      {
        "name": "peopleEthnicity",
        "schema": "array",
        "description": "Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities"
      },
      {
        "name": "peopleGender",
        "schema": "string",
        "description": "Show images with people of the specified gender"
      },
      {
        "name": "peopleNumber",
        "schema": "integer",
        "description": "Show images with the specified number of people"
      },
      {
        "name": "region",
        "schema": "undefined",
        "description": "Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Enable or disable safe search"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "spellcheckQuery",
        "schema": "boolean",
        "description": "Spellcheck the search query and return results on suggested spellings"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "width",
        "schema": "integer",
        "description": "(Deprecated; use width_from and width_to instead) Show images with the specified width"
      },
      {
        "name": "widthFrom",
        "schema": "integer",
        "description": "Show images with the specified width or larger, in pixels"
      },
      {
        "name": "widthTo",
        "schema": "integer",
        "description": "Show images with the specified width or smaller, in pixels"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of search results for each given query"
      }
    ]
  },
  {
    "url": "/v2/catalog/collections",
    "method": "getCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "List catalog collections",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "shared",
        "schema": "boolean",
        "description": "Set to true to omit collections that you own and return only collections  that are shared with you"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of catalog collections"
      }
    ]
  },
  {
    "url": "/v2/catalog/collections",
    "method": "createCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Create catalog collections",
    "parameters": [
      {
        "name": "items",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Catalog collection"
      }
    ]
  },
  {
    "url": "/v2/catalog/collections/{collection_id}",
    "method": "deleteCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Delete catalog collections",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to delete"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/catalog/collections/{collection_id}",
    "method": "updateCollection",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Update collection metadata",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "ID of collection that needs to be modified"
      },
      {
        "name": "cover_asset",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Catalog collection"
      }
    ]
  },
  {
    "url": "/v2/catalog/collections/{collection_id}/items",
    "method": "deleteFromCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Remove items from catalog collection",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to remove assets from"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Catalog collection"
      }
    ]
  },
  {
    "url": "/v2/catalog/collections/{collection_id}/items",
    "method": "addToCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Add items to catalog collections",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to add assets to"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Catalog collection"
      }
    ]
  },
  {
    "url": "/v2/catalog/search",
    "method": "searchCatalog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "catalog",
    "typeScriptTag": "catalog",
    "description": "Search catalogs for assets",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces"
      },
      {
        "name": "collectionId",
        "schema": "array",
        "description": "Filter by collection id"
      },
      {
        "name": "assetType",
        "schema": "array",
        "description": "Filter by asset type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of catalog collection items"
      }
    ]
  },
  {
    "url": "/v2/contributors",
    "method": "getContributorList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contributors",
    "typeScriptTag": "contributors",
    "description": "Get details about multiple contributors",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "One or more contributor IDs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of contributor profiles"
      }
    ]
  },
  {
    "url": "/v2/contributors/{contributor_id}",
    "method": "getContributor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contributors",
    "typeScriptTag": "contributors",
    "description": "Get details about a single contributor",
    "parameters": [
      {
        "name": "contributorId",
        "schema": "string",
        "required": true,
        "description": "Contributor ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contributor profile data"
      }
    ]
  },
  {
    "url": "/v2/contributors/{contributor_id}/collections",
    "method": "getContributorCollectionsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contributors",
    "typeScriptTag": "contributors",
    "description": "List contributors' collections",
    "parameters": [
      {
        "name": "contributorId",
        "schema": "string",
        "required": true,
        "description": "Contributor ID"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of collections"
      }
    ]
  },
  {
    "url": "/v2/contributors/{contributor_id}/collections/{id}",
    "method": "getContributorCollections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contributors",
    "typeScriptTag": "contributors",
    "description": "Get details about contributors' collections",
    "parameters": [
      {
        "name": "contributorId",
        "schema": "string",
        "required": true,
        "description": "Contributor ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID that belongs to the contributor"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about a collection of assets"
      }
    ]
  },
  {
    "url": "/v2/contributors/{contributor_id}/collections/{id}/items",
    "method": "getContributorCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "contributors",
    "typeScriptTag": "contributors",
    "description": "Get the items in contributors' collections",
    "parameters": [
      {
        "name": "contributorId",
        "schema": "string",
        "required": true,
        "description": "Contributor ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID that belongs to the contributor"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of items in a collection"
      }
    ]
  },
  {
    "url": "/v2/cv/images",
    "method": "uploadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "computer_vision",
    "typeScriptTag": "computerVision",
    "description": "Upload images",
    "parameters": [
      {
        "name": "base64_image",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Asset upload information"
      }
    ]
  },
  {
    "url": "/v2/cv/keywords",
    "method": "getKeywords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "computer_vision",
    "typeScriptTag": "computerVision",
    "description": "List suggested keywords",
    "parameters": [
      {
        "name": "assetId",
        "schema": "undefined",
        "required": true,
        "description": "The asset ID or upload ID to suggest keywords for"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of keywords"
      }
    ]
  },
  {
    "url": "/v2/cv/similar/images",
    "method": "getSimilarImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "computer_vision",
    "typeScriptTag": "computerVision",
    "description": "List similar images",
    "parameters": [
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset ID or upload ID to find similar images for"
      },
      {
        "name": "license",
        "schema": "array",
        "description": "Show only images with the specified license"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Enable or disable safe search"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image search results"
      }
    ]
  },
  {
    "url": "/v2/cv/similar/videos",
    "method": "getSimilarVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "computer_vision",
    "typeScriptTag": "computerVision",
    "description": "List similar videos",
    "parameters": [
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset ID or upload ID to find similar videos for"
      },
      {
        "name": "license",
        "schema": "array",
        "description": "Show only videos with the specified license"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Enable or disable safe search"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Video search results"
      }
    ]
  },
  {
    "url": "/v2/editorial/categories",
    "method": "getEditorialCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) List editorial categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial categories"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/categories",
    "method": "listEditorialImageCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "List editorial categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial categories"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/licenses",
    "method": "getEditorialImageLicenseList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "List editorial image licenses",
    "parameters": [
      {
        "name": "imageId",
        "schema": "string",
        "description": "Show licenses for the specified editorial image ID"
      },
      {
        "name": "license",
        "schema": "string",
        "description": "Show editorial images that are available with the specified license name"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "Filter licenses by username of licensee"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show licenses created on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show licenses created before the specified date"
      },
      {
        "name": "downloadAvailability",
        "schema": "string",
        "description": "Filter licenses by download availability"
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "Set to true to see license history for all members of your team."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of download events"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/licenses",
    "method": "licenseEditorialImages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "License editorial content",
    "parameters": [
      {
        "name": "country",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "editorial",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial license results"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/livefeeds",
    "method": "getEditorialImageLivefeedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "Get editorial livefeed list",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only livefeeds that are available for distribution in a certain country"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial livefeeds"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/livefeeds/{id}",
    "method": "getEditorialImageLivefeed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "Get editorial livefeed",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial livefeed ID; must be an URI encoded string"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the livefeed is available for distribution in a certain country"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about editorial livefeed"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/livefeeds/{id}/items",
    "method": "getEditorialImageLivefeedItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "Get editorial livefeed items",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial livefeed ID; must be an URI encoded string"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the livefeed items are available for distribution in a certain country"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial items"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/search",
    "method": "searchEditorialImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "Search editorial images",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Show only editorial content that is available for distribution in a certain country"
      },
      {
        "name": "supplierCode",
        "schema": "array",
        "description": "Show only editorial content from certain suppliers"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "description": "Show only editorial content generated on or after a specific date"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "description": "Show only editorial content generated on or before a specific date"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor of the page with which to start fetching results; this cursor is returned from previous requests"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Editorial search results"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/updated",
    "method": "getUpdatedEditorialImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "List updated content",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted"
      },
      {
        "name": "dateUpdatedStart",
        "schema": "string",
        "required": true,
        "description": "Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00."
      },
      {
        "name": "dateUpdatedEnd",
        "schema": "string",
        "required": true,
        "description": "Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00."
      },
      {
        "name": "dateTakenStart",
        "schema": "string",
        "description": "Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets"
      },
      {
        "name": "dateTakenEnd",
        "schema": "string",
        "description": "Show images that were taken before the specified date"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor of the page with which to start fetching results; this cursor is returned from previous requests"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "supplierCode",
        "schema": "array",
        "description": "Show only editorial content from certain suppliers"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Show only editorial content that is available for distribution in a certain country"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Editorial updated results"
      }
    ]
  },
  {
    "url": "/v2/editorial/images/{id}",
    "method": "getEditorialImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "Get editorial content details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial ID"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the content is available for distribution in a certain country"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about editorial content"
      }
    ]
  },
  {
    "url": "/v2/editorial/licenses",
    "method": "licenseEditorialImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) License editorial content",
    "parameters": [
      {
        "name": "country",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "editorial",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial license results"
      }
    ]
  },
  {
    "url": "/v2/editorial/livefeeds",
    "method": "getEditorialLivefeedList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) Get editorial livefeed list",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only livefeeds that are available for distribution in a certain country"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial livefeeds"
      }
    ]
  },
  {
    "url": "/v2/editorial/livefeeds/{id}",
    "method": "getEditorialLivefeed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) Get editorial livefeed",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial livefeed ID; must be an URI encoded string"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the livefeed is available for distribution in a certain country"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about editorial livefeed"
      }
    ]
  },
  {
    "url": "/v2/editorial/livefeeds/{id}/items",
    "method": "getEditorialLivefeedItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) Get editorial livefeed items",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial livefeed ID; must be an URI encoded string"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the livefeed items are available for distribution in a certain country"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial items"
      }
    ]
  },
  {
    "url": "/v2/editorial/search",
    "method": "searchEditorial",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) Search editorial content",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Show editorial content within a certain editorial category; specify by category name"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Show only editorial content that is available for distribution in a certain country"
      },
      {
        "name": "supplierCode",
        "schema": "array",
        "description": "Show only editorial content from certain suppliers"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "description": "Show only editorial content generated on or after a specific date"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "description": "Show only editorial content generated on or before a specific date"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor of the page with which to start fetching results; this cursor is returned from previous requests"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Editorial search results"
      }
    ]
  },
  {
    "url": "/v2/editorial/updated",
    "method": "getUpdatedEditorialImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) List updated content",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted"
      },
      {
        "name": "dateUpdatedStart",
        "schema": "string",
        "required": true,
        "description": "Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00."
      },
      {
        "name": "dateUpdatedEnd",
        "schema": "string",
        "required": true,
        "description": "Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00."
      },
      {
        "name": "dateTakenStart",
        "schema": "string",
        "description": "Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets"
      },
      {
        "name": "dateTakenEnd",
        "schema": "string",
        "description": "Show images that were taken before the specified date"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor of the page with which to start fetching results; this cursor is returned from previous requests"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "supplierCode",
        "schema": "array",
        "description": "Show only editorial content from certain suppliers"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Show only editorial content that is available for distribution in a certain country"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Editorial updated results"
      }
    ]
  },
  {
    "url": "/v2/editorial/videos/categories",
    "method": "listEditorialVideoCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_video",
    "typeScriptTag": "editorialVideo",
    "description": "List editorial video categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial video categories"
      }
    ]
  },
  {
    "url": "/v2/editorial/videos/licenses",
    "method": "getEditorialVideoLicenseList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_video",
    "typeScriptTag": "editorialVideo",
    "description": "List editorial video licenses",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "description": "Show licenses for the specified editorial video ID"
      },
      {
        "name": "license",
        "schema": "string",
        "description": "Show editorial videos that are available with the specified license name"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "Filter licenses by username of licensee"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show licenses created on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show licenses created before the specified date"
      },
      {
        "name": "downloadAvailability",
        "schema": "string",
        "description": "Filter licenses by download availability"
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "Set to true to see license history for all members of your team."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of download events"
      }
    ]
  },
  {
    "url": "/v2/editorial/videos/licenses",
    "method": "licenseEditorialVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "editorial_video",
    "typeScriptTag": "editorialVideo",
    "description": "License editorial video content",
    "parameters": [
      {
        "name": "country",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "editorial",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of editorial license results"
      }
    ]
  },
  {
    "url": "/v2/editorial/videos/search",
    "method": "searchEditorialVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_video",
    "typeScriptTag": "editorialVideo",
    "description": "Search editorial video content",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Show only editorial video content that is available for distribution in a certain country"
      },
      {
        "name": "supplierCode",
        "schema": "array",
        "description": "Show only editorial video content from certain suppliers"
      },
      {
        "name": "dateStart",
        "schema": "string",
        "description": "Show only editorial video content generated on or after a specific date"
      },
      {
        "name": "dateEnd",
        "schema": "string",
        "description": "Show only editorial video content generated on or before a specific date"
      },
      {
        "name": "resolution",
        "schema": "string",
        "description": "Show only editorial video content with specific resolution"
      },
      {
        "name": "fps",
        "schema": "number",
        "description": "Show only editorial video content generated with specific frames per second"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor of the page with which to start fetching results; this cursor is returned from previous requests"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Editorial search results"
      }
    ]
  },
  {
    "url": "/v2/editorial/videos/{id}",
    "method": "getEditorialVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_video",
    "typeScriptTag": "editorialVideo",
    "description": "Get editorial video content details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial ID"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the content is available for distribution in a certain country"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about editorial content"
      }
    ]
  },
  {
    "url": "/v2/editorial/{id}",
    "method": "/v2/editorial/{id}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "editorial_images",
    "typeScriptTag": "editorialImages",
    "description": "(Deprecated) Get editorial content details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Editorial ID"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "Returns only if the content is available for distribution in a certain country"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about editorial content"
      }
    ]
  },
  {
    "url": "/v2/images",
    "method": "getImageList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List images",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "One or more image IDs"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of images"
      }
    ]
  },
  {
    "url": "/v2/images",
    "method": "uploadEphemeralImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "computer_vision",
    "typeScriptTag": "computerVision",
    "description": "Upload ephemeral images",
    "parameters": [
      {
        "name": "base64_image",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Image upload information"
      }
    ]
  },
  {
    "url": "/v2/images/categories",
    "method": "listImageCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List image categories",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of categories that images can belong to"
      }
    ]
  },
  {
    "url": "/v2/images/collections",
    "method": "getImageCollectionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List image collections",
    "parameters": [
      {
        "name": "embed",
        "schema": "array",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of collections"
      }
    ]
  },
  {
    "url": "/v2/images/collections",
    "method": "createImageCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Create image collections",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Collection creation response"
      }
    ]
  },
  {
    "url": "/v2/images/collections/featured",
    "method": "getFeaturedImageCollectionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List featured image collections",
    "parameters": [
      {
        "name": "embed",
        "schema": "string",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "The types of collections to return"
      },
      {
        "name": "assetHint",
        "schema": "string",
        "description": "Cover image size"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of featured collections"
      }
    ]
  },
  {
    "url": "/v2/images/collections/featured/{id}",
    "method": "getFeaturedImageCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get the details of featured image collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "embed",
        "schema": "string",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      },
      {
        "name": "assetHint",
        "schema": "string",
        "description": "Cover image size"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about a featured collection"
      }
    ]
  },
  {
    "url": "/v2/images/collections/featured/{id}/items",
    "method": "getFeaturedImageCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get the contents of featured image collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of items in a collection"
      }
    ]
  },
  {
    "url": "/v2/images/collections/{id}",
    "method": "deleteImageCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Delete image collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/images/collections/{id}",
    "method": "getImageCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get the details of image collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      },
      {
        "name": "shareCode",
        "schema": "string",
        "description": "Code to retrieve a shared collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about a collection of assets"
      }
    ]
  },
  {
    "url": "/v2/images/collections/{id}",
    "method": "renameImageCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Rename image collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/images/collections/{id}/items",
    "method": "deleteImageCollectionItems",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Remove images from collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "itemId",
        "schema": "array",
        "description": "One or more image IDs to remove from the collection"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/images/collections/{id}/items",
    "method": "getImageCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get the contents of image collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "shareCode",
        "schema": "string",
        "description": "Code to retrieve the contents of a shared collection"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of items in a collection"
      }
    ]
  },
  {
    "url": "/v2/images/collections/{id}/items",
    "method": "addImageCollectionItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Add images to collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/images/licenses",
    "method": "getImageLicenseList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List image licenses",
    "parameters": [
      {
        "name": "imageId",
        "schema": "string",
        "description": "Show licenses for the specified image ID"
      },
      {
        "name": "license",
        "schema": "string",
        "description": "Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "Filter licenses by username of licensee"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show licenses created on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show licenses created before the specified date"
      },
      {
        "name": "downloadAvailability",
        "schema": "string",
        "description": "Filter licenses by download availability"
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "Set to true to see license history for all members of your team."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of download events"
      }
    ]
  },
  {
    "url": "/v2/images/licenses",
    "method": "licenseImages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "License images",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "description": "Subscription ID to use to license the image"
      },
      {
        "name": "format",
        "schema": "string",
        "description": "(Deprecated) Image format"
      },
      {
        "name": "size",
        "schema": "string",
        "description": "Image size"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "Search ID that was provided in the results of an image search"
      },
      {
        "name": "images",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of information about licensed images"
      }
    ]
  },
  {
    "url": "/v2/images/licenses/{id}/downloads",
    "method": "downloadImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Download images",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "License ID"
      },
      {
        "name": "auth_cookie",
        "schema": "object",
        "description": ""
      },
      {
        "name": "show_modal",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "size",
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
        "statusCode": "200",
        "description": "URL object"
      }
    ]
  },
  {
    "url": "/v2/images/recommendations",
    "method": "getImageRecommendations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List recommended images",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "Image IDs"
      },
      {
        "name": "maxItems",
        "schema": "integer",
        "description": "Maximum number of results returned in the response"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Restrict results to safe images"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of recommended images"
      }
    ]
  },
  {
    "url": "/v2/images/search",
    "method": "searchImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Search for images",
    "parameters": [
      {
        "name": "addedDate",
        "schema": "string",
        "description": "Show images added on the specified date"
      },
      {
        "name": "addedDateStart",
        "schema": "string",
        "description": "Show images added on or after the specified date"
      },
      {
        "name": "aspectRatioMin",
        "schema": "number",
        "description": "Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image"
      },
      {
        "name": "aspectRatioMax",
        "schema": "number",
        "description": "Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image"
      },
      {
        "name": "aspectRatio",
        "schema": "number",
        "description": "Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image"
      },
      {
        "name": "aiSearch",
        "schema": "boolean",
        "description": "Set to true and specify the `ai_objective` and `ai_industry` parameters to use AI-powered search; the API returns information about how well images meet the objective for the industry "
      },
      {
        "name": "aiLabelsLimit",
        "schema": "integer",
        "description": "For AI-powered search, specify the maximum number of labels to return"
      },
      {
        "name": "aiIndustry",
        "schema": "string",
        "description": "For AI-powered search, specify the industry to target; requires that the `ai_search` parameter is set to true"
      },
      {
        "name": "aiObjective",
        "schema": "string",
        "description": "For AI-powered search, specify the goal of the media; requires that the `ai_search` parameter is set to true"
      },
      {
        "name": "addedDateEnd",
        "schema": "string",
        "description": "Show images added before the specified date"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Show images with the specified Shutterstock-defined category; specify a category name or ID"
      },
      {
        "name": "color",
        "schema": "string",
        "description": "Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors"
      },
      {
        "name": "contributor",
        "schema": "array",
        "description": "Show images with the specified contributor names or IDs, allows multiple"
      },
      {
        "name": "contributorCountry",
        "schema": "undefined",
        "description": "Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Fields to display in the response; see the documentation for the fields parameter in the overview section"
      },
      {
        "name": "height",
        "schema": "integer",
        "description": "(Deprecated; use height_from and height_to instead) Show images with the specified height"
      },
      {
        "name": "heightFrom",
        "schema": "integer",
        "description": "Show images with the specified height or larger, in pixels"
      },
      {
        "name": "heightTo",
        "schema": "integer",
        "description": "Show images with the specified height or smaller, in pixels"
      },
      {
        "name": "imageType",
        "schema": "array",
        "description": "Show images of the specified type"
      },
      {
        "name": "keywordSafeSearch",
        "schema": "boolean",
        "description": "Hide results with potentially unsafe keywords"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Set query and result language (uses Accept-Language header if not set)"
      },
      {
        "name": "license",
        "schema": "array",
        "description": "Show only images with the specified license"
      },
      {
        "name": "model",
        "schema": "array",
        "description": "Show image results with the specified model IDs"
      },
      {
        "name": "orientation",
        "schema": "string",
        "description": "Show image results with horizontal or vertical orientation"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "peopleModelReleased",
        "schema": "boolean",
        "description": "Show images of people with a signed model release"
      },
      {
        "name": "peopleAge",
        "schema": "string",
        "description": "Show images that feature people of the specified age category"
      },
      {
        "name": "peopleEthnicity",
        "schema": "array",
        "description": "Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities"
      },
      {
        "name": "peopleGender",
        "schema": "string",
        "description": "Show images with people of the specified gender"
      },
      {
        "name": "peopleNumber",
        "schema": "integer",
        "description": "Show images with the specified number of people"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces; you can use NOT to filter out images that match a term"
      },
      {
        "name": "region",
        "schema": "undefined",
        "description": "Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Enable or disable safe search"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "spellcheckQuery",
        "schema": "boolean",
        "description": "Spellcheck the search query and return results on suggested spellings"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "width",
        "schema": "integer",
        "description": "(Deprecated; use width_from and width_to instead) Show images with the specified width"
      },
      {
        "name": "widthFrom",
        "schema": "integer",
        "description": "Show images with the specified width or larger, in pixels"
      },
      {
        "name": "widthTo",
        "schema": "integer",
        "description": "Show images with the specified width or smaller, in pixels"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image search results"
      }
    ]
  },
  {
    "url": "/v2/images/search/suggestions",
    "method": "getImageSuggestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get suggestions for a search term",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "Search term for which you want keyword suggestions"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of suggestions"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of search suggestions"
      }
    ]
  },
  {
    "url": "/v2/images/search/suggestions",
    "method": "getImageKeywordSuggestions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get keywords from text",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response to a request for keyword analysis"
      }
    ]
  },
  {
    "url": "/v2/images/updated",
    "method": "getUpdatedImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List updated images",
    "parameters": [
      {
        "name": "type",
        "schema": "array",
        "description": "Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show images updated on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show images updated before the specified date"
      },
      {
        "name": "interval",
        "schema": "string",
        "description": "Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of updated media"
      }
    ]
  },
  {
    "url": "/v2/images/{id}",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "Get details about images",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Image ID"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about an image"
      }
    ]
  },
  {
    "url": "/v2/images/{id}/similar",
    "method": "listSimilarImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "images",
    "typeScriptTag": "images",
    "description": "List similar images",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Image ID"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Image search results"
      }
    ]
  },
  {
    "url": "/v2/oauth/access_token",
    "method": "createAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Get access tokens",
    "parameters": [
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "realm",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Access token response to client apps"
      }
    ]
  },
  {
    "url": "/v2/oauth/authorize",
    "method": "authorize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Authorize applications",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Client ID (Consumer Key) of your application"
      },
      {
        "name": "realm",
        "schema": "string",
        "description": "User type to be authorized (usually 'customer')"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": true,
        "description": "The callback URI to send the request to after authorization; must use a host name that is registered with your application"
      },
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'"
      },
      {
        "name": "scope",
        "schema": "string",
        "description": "Space-separated list of scopes to be authorized"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "Unique value used by the calling app to verify the request"
      }
    ],
    "responses": [
      {
        "statusCode": "302",
        "description": "HTML redirect URL that contains the application authorization 'code'"
      }
    ]
  },
  {
    "url": "/v2/sfx",
    "method": "getSfxListDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sound_effects",
    "typeScriptTag": "soundEffects",
    "description": "List details about sound effects",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "One or more sound effect IDs"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "library",
        "schema": "string",
        "description": "Which library to fetch from"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of sound effects"
      }
    ]
  },
  {
    "url": "/v2/sfx/licenses",
    "method": "getSfxLicenseList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sound_effects",
    "typeScriptTag": "soundEffects",
    "description": "List sound effects licenses",
    "parameters": [
      {
        "name": "sfxId",
        "schema": "string",
        "description": "Show licenses for the specified sound effects ID"
      },
      {
        "name": "license",
        "schema": "string",
        "description": "Show sound effects that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "Filter licenses by username of licensee"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show licenses created on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show licenses created before the specified date"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "description": "Filter by the license ID"
      },
      {
        "name": "downloadAvailability",
        "schema": "string",
        "description": "Filter licenses by download availability"
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "Set to true to see license history for all members of your team."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of download events"
      }
    ]
  },
  {
    "url": "/v2/sfx/licenses",
    "method": "licensesSfx",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "sound_effects",
    "typeScriptTag": "soundEffects",
    "description": "License sound effects",
    "parameters": [
      {
        "name": "sound_effects",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of information about licensed sound effects"
      }
    ]
  },
  {
    "url": "/v2/sfx/licenses/{id}/downloads",
    "method": "downloadSfx",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "sound_effects",
    "typeScriptTag": "soundEffects",
    "description": "Download sound effects",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "License ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sound effect license URL object"
      }
    ]
  },
  {
    "url": "/v2/sfx/search",
    "method": "searchSfx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sound_effects",
    "typeScriptTag": "soundEffects",
    "description": "Search for sound effects",
    "parameters": [
      {
        "name": "addedDate",
        "schema": "string",
        "description": "Show sound effects added on the specified date"
      },
      {
        "name": "addedDateStart",
        "schema": "string",
        "description": "Show sound effects added on or after the specified date"
      },
      {
        "name": "addedDateEnd",
        "schema": "string",
        "description": "Show sound effects added before the specified date"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "Show sound effects with the specified duration in seconds"
      },
      {
        "name": "durationFrom",
        "schema": "integer",
        "description": "Show sound effects with the specified duration or longer in seconds"
      },
      {
        "name": "durationTo",
        "schema": "integer",
        "description": "Show sound effects with the specified duration or shorter in seconds"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Enable or disable safe search"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Set query and result language (uses Accept-Language header if not set)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sound effects search results"
      }
    ]
  },
  {
    "url": "/v2/sfx/{id}",
    "method": "getSfxDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "sound_effects",
    "typeScriptTag": "soundEffects",
    "description": "Get details about sound effects",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Audio track ID"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "library",
        "schema": "string",
        "description": "Which library to fetch from"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SFX metadata"
      }
    ]
  },
  {
    "url": "/v2/test",
    "method": "echo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "test",
    "typeScriptTag": "test",
    "description": "Echo text",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "description": "Text to echo"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Text to echo in the response"
      }
    ]
  },
  {
    "url": "/v2/test/validate",
    "method": "validate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "test",
    "typeScriptTag": "test",
    "description": "Validate input",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Integer ID"
      },
      {
        "name": "tag",
        "schema": "array",
        "description": "List of tags"
      },
      {
        "name": "userAgent",
        "schema": "string",
        "description": "User agent"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Validation results"
      }
    ]
  },
  {
    "url": "/v2/user",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get user details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "User details"
      }
    ]
  },
  {
    "url": "/v2/user/access_token",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get access token details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Access token details that are currently associated with this user"
      }
    ]
  },
  {
    "url": "/v2/user/subscriptions",
    "method": "getUserSubscriptionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List user subscriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of subscriptions"
      }
    ]
  },
  {
    "url": "/v2/videos",
    "method": "getVideoList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List videos",
    "parameters": [
      {
        "name": "id",
        "schema": "array",
        "required": true,
        "description": "One or more video IDs"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of videos"
      }
    ]
  },
  {
    "url": "/v2/videos/categories",
    "method": "listVideoCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List video categories",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of categories that images can belong to"
      }
    ]
  },
  {
    "url": "/v2/videos/collections",
    "method": "getVideoCollectionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List video collections",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of collections"
      }
    ]
  },
  {
    "url": "/v2/videos/collections",
    "method": "createVideoCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Create video collections",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Collection creation response"
      }
    ]
  },
  {
    "url": "/v2/videos/collections/featured",
    "method": "getFeaturedVideoCollectionList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List featured video collections",
    "parameters": [
      {
        "name": "embed",
        "schema": "string",
        "description": "What information to include in the response, such as a URL to the collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of featured collections"
      }
    ]
  },
  {
    "url": "/v2/videos/collections/featured/{id}",
    "method": "getFeaturedVideoCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Get the details of featured video collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "embed",
        "schema": "string",
        "description": "What information to include in the response, such as a URL to the collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about a featured collection"
      }
    ]
  },
  {
    "url": "/v2/videos/collections/featured/{id}/items",
    "method": "getFeaturedVideoCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Get the contents of featured video collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of items in a collection"
      }
    ]
  },
  {
    "url": "/v2/videos/collections/{id}",
    "method": "deleteVideoCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Delete video collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to delete"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/videos/collections/{id}",
    "method": "getVideoCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Get the details of video collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to return"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Which sharing information to include in the response, such as a URL to the collection"
      },
      {
        "name": "shareCode",
        "schema": "string",
        "description": "Code to retrieve a shared collection"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Metadata about a collection of assets"
      }
    ]
  },
  {
    "url": "/v2/videos/collections/{id}",
    "method": "renameVideoCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Rename video collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to rename"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/videos/collections/{id}/items",
    "method": "deleteVideoCollectionItems",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Remove videos from collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the Collection from which items will be deleted"
      },
      {
        "name": "itemId",
        "schema": "array",
        "description": "One or more video IDs to remove from the collection"
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/videos/collections/{id}/items",
    "method": "getVideoCollectionItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Get the contents of video collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Collection ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "shareCode",
        "schema": "string",
        "description": "Code to retrieve the contents of a shared collection"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort order"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of items in a collection"
      }
    ]
  },
  {
    "url": "/v2/videos/collections/{id}/items",
    "method": "addVideoCollectionItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Add videos to collections",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the collection to which items should be added"
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/videos/licenses",
    "method": "getVideoLicenseList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List video licenses",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "description": "Show licenses for the specified video ID"
      },
      {
        "name": "license",
        "schema": "string",
        "description": "Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by oldest or newest videos first"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "Filter licenses by username of licensee"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show licenses created on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show licenses created before the specified date"
      },
      {
        "name": "downloadAvailability",
        "schema": "string",
        "description": "Filter licenses by download availability"
      },
      {
        "name": "teamHistory",
        "schema": "boolean",
        "description": "Set to true to see license history for all members of your team."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of download events"
      }
    ]
  },
  {
    "url": "/v2/videos/licenses",
    "method": "licenseVideos",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "License videos",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "description": "The subscription ID to use for licensing"
      },
      {
        "name": "size",
        "schema": "string",
        "description": "The size of the video to license"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The Search ID that led to this licensing event"
      },
      {
        "name": "videos",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of video license results"
      }
    ]
  },
  {
    "url": "/v2/videos/licenses/{id}/downloads",
    "method": "downloadVideos",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Download videos",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The license ID of the item to (re)download. The download links in the response are valid for 8 hours."
      },
      {
        "name": "auth_cookie",
        "schema": "object",
        "description": ""
      },
      {
        "name": "show_modal",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "size",
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
        "statusCode": "200",
        "description": "URL object"
      }
    ]
  },
  {
    "url": "/v2/videos/search",
    "method": "searchVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Search for videos",
    "parameters": [
      {
        "name": "addedDate",
        "schema": "string",
        "description": "Show videos added on the specified date"
      },
      {
        "name": "addedDateStart",
        "schema": "string",
        "description": "Show videos added on or after the specified date"
      },
      {
        "name": "addedDateEnd",
        "schema": "string",
        "description": "Show videos added before the specified date"
      },
      {
        "name": "aspectRatio",
        "schema": "string",
        "description": "Show videos with the specified aspect ratio"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Show videos with the specified Shutterstock-defined category; specify a category name or ID"
      },
      {
        "name": "contributor",
        "schema": "array",
        "description": "Show videos with the specified artist names or IDs"
      },
      {
        "name": "contributorCountry",
        "schema": "array",
        "description": "Show videos from contributors in one or more specified countries"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "(Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds"
      },
      {
        "name": "durationFrom",
        "schema": "integer",
        "description": "Show videos with the specified duration or longer in seconds"
      },
      {
        "name": "durationTo",
        "schema": "integer",
        "description": "Show videos with the specified duration or shorter in seconds"
      },
      {
        "name": "fps",
        "schema": "number",
        "description": "(Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second"
      },
      {
        "name": "fpsFrom",
        "schema": "number",
        "description": "Show videos with the specified frames per second or more"
      },
      {
        "name": "fpsTo",
        "schema": "number",
        "description": "Show videos with the specified frames per second or fewer"
      },
      {
        "name": "keywordSafeSearch",
        "schema": "boolean",
        "description": "Hide results with potentially unsafe keywords"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Set query and result language (uses Accept-Language header if not set)"
      },
      {
        "name": "license",
        "schema": "array",
        "description": "Show only videos with the specified license or licenses"
      },
      {
        "name": "model",
        "schema": "array",
        "description": "Show videos with each of the specified models"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "peopleAge",
        "schema": "string",
        "description": "Show videos that feature people of the specified age range"
      },
      {
        "name": "peopleEthnicity",
        "schema": "array",
        "description": "Show videos with people of the specified ethnicities"
      },
      {
        "name": "peopleGender",
        "schema": "string",
        "description": "Show videos with people with the specified gender"
      },
      {
        "name": "peopleNumber",
        "schema": "integer",
        "description": "Show videos with the specified number of people"
      },
      {
        "name": "peopleModelReleased",
        "schema": "boolean",
        "description": "Show only videos of people with a signed model release"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "One or more search terms separated by spaces; you can use NOT to filter out videos that match a term"
      },
      {
        "name": "resolution",
        "schema": "string",
        "description": "Show videos with the specified resolution"
      },
      {
        "name": "safe",
        "schema": "boolean",
        "description": "Enable or disable safe search"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by one of these categories"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Video search results"
      }
    ]
  },
  {
    "url": "/v2/videos/search/suggestions",
    "method": "getVideoSuggestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Get suggestions for a search term",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "Search term for which you want keyword suggestions"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of the suggestions"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of search suggestions"
      }
    ]
  },
  {
    "url": "/v2/videos/updated",
    "method": "getUpdatedVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List updated videos",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "description": "Show videos updated on or after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Show videos updated before the specified date"
      },
      {
        "name": "interval",
        "schema": "string",
        "description": "Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort by oldest or newest videos first"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of updated media"
      }
    ]
  },
  {
    "url": "/v2/videos/{id}",
    "method": "getVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "Get details about videos",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Video ID"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      },
      {
        "name": "searchId",
        "schema": "string",
        "description": "The ID of the search that is related to this request"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Information about a video"
      }
    ]
  },
  {
    "url": "/v2/videos/{id}/similar",
    "method": "findSimilarVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "videos",
    "typeScriptTag": "videos",
    "description": "List similar videos",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of a video for which similar videos should be returned"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language for the keywords and categories in the response"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "Number of results per page"
      },
      {
        "name": "view",
        "schema": "string",
        "description": "Amount of detail to render in the response"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Video search results"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Shutterstock API Explorer"
      apiBaseUrl="https://api.shutterstock.com"
      apiVersion="1.1.32"
      endpoints={91}
      sdkMethods={118}
      schemas={167}
      parameters={526}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shutterstock/openapi.yaml"
    />
  );
}
  