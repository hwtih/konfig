/*
 * splitit-web-api-v3
 *
 * Splitit's Web API
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = CsharpSplitit.Net.Client.OpenAPIDateConverter;

namespace CsharpSplitit.Net.Model
{
    /// <summary>
    /// Defines InstallmentStatus
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum InstallmentStatus
    {
        /// <summary>
        /// Enum Pending for value: Pending
        /// </summary>
        [EnumMember(Value = "Pending")]
        Pending = 1,

        /// <summary>
        /// Enum Processed for value: Processed
        /// </summary>
        [EnumMember(Value = "Processed")]
        Processed = 2,

        /// <summary>
        /// Enum Canceled for value: Canceled
        /// </summary>
        [EnumMember(Value = "Canceled")]
        Canceled = 3

    }

}