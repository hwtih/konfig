# coding: utf-8

"""
    python-pydantic-free-form-object-property API

    A simple API based for testing python-pydantic-free-form-object-property.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_pydantic_free_form_object_property import schemas  # noqa: F401


class TestFetchResponse(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "freeFormObject",
        }
        
        class properties:
            freeFormObject = schemas.DictSchema
            __annotations__ = {
                "freeFormObject": freeFormObject,
            }
    
    freeFormObject: MetaOapg.properties.freeFormObject
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["freeFormObject"]) -> MetaOapg.properties.freeFormObject: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["freeFormObject", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["freeFormObject"]) -> MetaOapg.properties.freeFormObject: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["freeFormObject", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        freeFormObject: typing.Union[MetaOapg.properties.freeFormObject, dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'TestFetchResponse':
        return super().__new__(
            cls,
            *args,
            freeFormObject=freeFormObject,
            _configuration=_configuration,
            **kwargs,
        )