# coding: utf-8

"""
    python-api-exception-contains-response-headers API

    A simple API based for testing python-api-exception-contains-response-headers.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
from urllib3._collections import HTTPHeaderDict
from python_api_exception_contains_response_headers.configuration import Configuration

def request_before_hook(
        resource_path: str,
        method: str,
        configuration: Configuration,
        path_template: str,
        headers: typing.Optional[HTTPHeaderDict] = None,
        body: typing.Any = None,
        fields: typing.Optional[typing.Tuple[typing.Tuple[str, str], ...]] = None,
        auth_settings: typing.Optional[typing.List[str]] = None,
        **kwargs: typing.Any
):
    pass