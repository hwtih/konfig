# coding: utf-8
"""
    python-pydantic-response-with-none-fieldvalue API

    A simple API based for testing python-pydantic-response-with-none-fieldvalue.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_pydantic_response_with_none_fieldvalue.client_custom import ClientCustom
from python_pydantic_response_with_none_fieldvalue.configuration import Configuration
from python_pydantic_response_with_none_fieldvalue.api_client import ApiClient
from python_pydantic_response_with_none_fieldvalue.type_util import copy_signature
from python_pydantic_response_with_none_fieldvalue.apis.tags.test_api import TestApi



class PythonPydanticResponseWithNoneFieldvalueClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)