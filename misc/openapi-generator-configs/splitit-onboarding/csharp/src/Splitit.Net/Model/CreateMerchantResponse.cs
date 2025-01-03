/*
 * Splitit.OnBoarding.Api.V2
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
using OpenAPIDateConverter = Splitit.Net.Client.OpenAPIDateConverter;

namespace Splitit.Net.Model
{
    /// <summary>
    /// CreateMerchantResponse
    /// </summary>
    [DataContract(Name = "CreateMerchantResponse")]
    public partial class CreateMerchantResponse : IEquatable<CreateMerchantResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMerchantResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateMerchantResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMerchantResponse" /> class.
        /// </summary>
        /// <param name="merchantTempId">merchantTempId (required).</param>
        /// <param name="merchantStatus">merchantStatus (required).</param>
        public CreateMerchantResponse(string merchantTempId = default(string), string merchantStatus = default(string))
        {
            // to ensure "merchantTempId" is required (not null)
            if (merchantTempId == null)
            {
                throw new ArgumentNullException("merchantTempId is a required property for CreateMerchantResponse and cannot be null");
            }
            this.MerchantTempId = merchantTempId;
            // to ensure "merchantStatus" is required (not null)
            if (merchantStatus == null)
            {
                throw new ArgumentNullException("merchantStatus is a required property for CreateMerchantResponse and cannot be null");
            }
            this.MerchantStatus = merchantStatus;
        }

        /// <summary>
        /// Gets or Sets MerchantTempId
        /// </summary>
        [DataMember(Name = "merchantTempId", IsRequired = true, EmitDefaultValue = true)]
        public string MerchantTempId { get; set; }

        /// <summary>
        /// Gets or Sets MerchantStatus
        /// </summary>
        [DataMember(Name = "merchantStatus", IsRequired = true, EmitDefaultValue = true)]
        public string MerchantStatus { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateMerchantResponse {\n");
            sb.Append("  MerchantTempId: ").Append(MerchantTempId).Append("\n");
            sb.Append("  MerchantStatus: ").Append(MerchantStatus).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as CreateMerchantResponse);
        }

        /// <summary>
        /// Returns true if CreateMerchantResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateMerchantResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateMerchantResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.MerchantTempId == input.MerchantTempId ||
                    (this.MerchantTempId != null &&
                    this.MerchantTempId.Equals(input.MerchantTempId))
                ) && 
                (
                    this.MerchantStatus == input.MerchantStatus ||
                    (this.MerchantStatus != null &&
                    this.MerchantStatus.Equals(input.MerchantStatus))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.MerchantTempId != null)
                {
                    hashCode = (hashCode * 59) + this.MerchantTempId.GetHashCode();
                }
                if (this.MerchantStatus != null)
                {
                    hashCode = (hashCode * 59) + this.MerchantStatus.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
