/*
typescript-preserve-allof-description API

A simple API based for testing typescript-preserve-allof-description.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  TestApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { TypescriptPreserveAllofDescriptionClientCustom } from "./client-custom";

export class TypescriptPreserveAllofDescriptionClient extends TypescriptPreserveAllofDescriptionClientCustom {
  readonly test: TestApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.test = new TestApi(configuration);
  }

}
