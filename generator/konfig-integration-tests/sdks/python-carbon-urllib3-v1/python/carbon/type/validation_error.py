# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from carbon.type.validation_error_loc import ValidationErrorLoc

class RequiredValidationError(TypedDict):
    loc: ValidationErrorLoc

    msg: str

    type: str

class OptionalValidationError(TypedDict, total=False):
    pass

class ValidationError(RequiredValidationError, OptionalValidationError):
    pass