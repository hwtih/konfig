/*
splitit-web-api-v3

Splitit's Web API

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package splitit

import (
	"encoding/json"
	"time"
)

// InstallmentPlanGetResponse struct for InstallmentPlanGetResponse
type InstallmentPlanGetResponse struct {
	InstallmentPlanNumber *string `json:"InstallmentPlanNumber,omitempty"`
	DateCreated time.Time `json:"DateCreated"`
	RefOrderNumber *string `json:"RefOrderNumber,omitempty"`
	PurchaseMethod *PurchaseMethod `json:"PurchaseMethod,omitempty"`
	Status PlanStatus `json:"Status"`
	Currency *string `json:"Currency,omitempty"`
	OriginalAmount *float32 `json:"OriginalAmount,omitempty"`
	Amount *float32 `json:"Amount,omitempty"`
	Authorization *AuthorizationModel `json:"Authorization,omitempty"`
	Shopper *ShopperData `json:"Shopper,omitempty"`
	BillingAddress *AddressData `json:"BillingAddress,omitempty"`
	PaymentMethod *PaymentMethodModel `json:"PaymentMethod,omitempty"`
	ExtendedParams *map[string]string `json:"ExtendedParams,omitempty"`
	Installments []Installment `json:"Installments,omitempty"`
	Refunds []RefundModel `json:"Refunds,omitempty"`
	Links *LinksData `json:"Links,omitempty"`
}

// NewInstallmentPlanGetResponse instantiates a new InstallmentPlanGetResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInstallmentPlanGetResponse(dateCreated time.Time, status PlanStatus) *InstallmentPlanGetResponse {
	this := InstallmentPlanGetResponse{}
	this.DateCreated = dateCreated
	this.Status = status
	return &this
}

// NewInstallmentPlanGetResponseWithDefaults instantiates a new InstallmentPlanGetResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInstallmentPlanGetResponseWithDefaults() *InstallmentPlanGetResponse {
	this := InstallmentPlanGetResponse{}
	return &this
}

// GetInstallmentPlanNumber returns the InstallmentPlanNumber field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetInstallmentPlanNumber() string {
	if o == nil || isNil(o.InstallmentPlanNumber) {
		var ret string
		return ret
	}
	return *o.InstallmentPlanNumber
}

// GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetInstallmentPlanNumberOk() (*string, bool) {
	if o == nil || isNil(o.InstallmentPlanNumber) {
    return nil, false
	}
	return o.InstallmentPlanNumber, true
}

// HasInstallmentPlanNumber returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasInstallmentPlanNumber() bool {
	if o != nil && !isNil(o.InstallmentPlanNumber) {
		return true
	}

	return false
}

// SetInstallmentPlanNumber gets a reference to the given string and assigns it to the InstallmentPlanNumber field.
func (o *InstallmentPlanGetResponse) SetInstallmentPlanNumber(v string) {
	o.InstallmentPlanNumber = &v
}

// GetDateCreated returns the DateCreated field value
func (o *InstallmentPlanGetResponse) GetDateCreated() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.DateCreated
}

// GetDateCreatedOk returns a tuple with the DateCreated field value
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetDateCreatedOk() (*time.Time, bool) {
	if o == nil {
    return nil, false
	}
	return &o.DateCreated, true
}

// SetDateCreated sets field value
func (o *InstallmentPlanGetResponse) SetDateCreated(v time.Time) {
	o.DateCreated = v
}

// GetRefOrderNumber returns the RefOrderNumber field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetRefOrderNumber() string {
	if o == nil || isNil(o.RefOrderNumber) {
		var ret string
		return ret
	}
	return *o.RefOrderNumber
}

// GetRefOrderNumberOk returns a tuple with the RefOrderNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetRefOrderNumberOk() (*string, bool) {
	if o == nil || isNil(o.RefOrderNumber) {
    return nil, false
	}
	return o.RefOrderNumber, true
}

// HasRefOrderNumber returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasRefOrderNumber() bool {
	if o != nil && !isNil(o.RefOrderNumber) {
		return true
	}

	return false
}

// SetRefOrderNumber gets a reference to the given string and assigns it to the RefOrderNumber field.
func (o *InstallmentPlanGetResponse) SetRefOrderNumber(v string) {
	o.RefOrderNumber = &v
}

// GetPurchaseMethod returns the PurchaseMethod field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetPurchaseMethod() PurchaseMethod {
	if o == nil || isNil(o.PurchaseMethod) {
		var ret PurchaseMethod
		return ret
	}
	return *o.PurchaseMethod
}

// GetPurchaseMethodOk returns a tuple with the PurchaseMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetPurchaseMethodOk() (*PurchaseMethod, bool) {
	if o == nil || isNil(o.PurchaseMethod) {
    return nil, false
	}
	return o.PurchaseMethod, true
}

// HasPurchaseMethod returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasPurchaseMethod() bool {
	if o != nil && !isNil(o.PurchaseMethod) {
		return true
	}

	return false
}

// SetPurchaseMethod gets a reference to the given PurchaseMethod and assigns it to the PurchaseMethod field.
func (o *InstallmentPlanGetResponse) SetPurchaseMethod(v PurchaseMethod) {
	o.PurchaseMethod = &v
}

// GetStatus returns the Status field value
func (o *InstallmentPlanGetResponse) GetStatus() PlanStatus {
	if o == nil {
		var ret PlanStatus
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetStatusOk() (*PlanStatus, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *InstallmentPlanGetResponse) SetStatus(v PlanStatus) {
	o.Status = v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetCurrency() string {
	if o == nil || isNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetCurrencyOk() (*string, bool) {
	if o == nil || isNil(o.Currency) {
    return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasCurrency() bool {
	if o != nil && !isNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *InstallmentPlanGetResponse) SetCurrency(v string) {
	o.Currency = &v
}

// GetOriginalAmount returns the OriginalAmount field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetOriginalAmount() float32 {
	if o == nil || isNil(o.OriginalAmount) {
		var ret float32
		return ret
	}
	return *o.OriginalAmount
}

// GetOriginalAmountOk returns a tuple with the OriginalAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetOriginalAmountOk() (*float32, bool) {
	if o == nil || isNil(o.OriginalAmount) {
    return nil, false
	}
	return o.OriginalAmount, true
}

// HasOriginalAmount returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasOriginalAmount() bool {
	if o != nil && !isNil(o.OriginalAmount) {
		return true
	}

	return false
}

// SetOriginalAmount gets a reference to the given float32 and assigns it to the OriginalAmount field.
func (o *InstallmentPlanGetResponse) SetOriginalAmount(v float32) {
	o.OriginalAmount = &v
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetAmount() float32 {
	if o == nil || isNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetAmountOk() (*float32, bool) {
	if o == nil || isNil(o.Amount) {
    return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasAmount() bool {
	if o != nil && !isNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *InstallmentPlanGetResponse) SetAmount(v float32) {
	o.Amount = &v
}

// GetAuthorization returns the Authorization field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetAuthorization() AuthorizationModel {
	if o == nil || isNil(o.Authorization) {
		var ret AuthorizationModel
		return ret
	}
	return *o.Authorization
}

// GetAuthorizationOk returns a tuple with the Authorization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetAuthorizationOk() (*AuthorizationModel, bool) {
	if o == nil || isNil(o.Authorization) {
    return nil, false
	}
	return o.Authorization, true
}

// HasAuthorization returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasAuthorization() bool {
	if o != nil && !isNil(o.Authorization) {
		return true
	}

	return false
}

// SetAuthorization gets a reference to the given AuthorizationModel and assigns it to the Authorization field.
func (o *InstallmentPlanGetResponse) SetAuthorization(v AuthorizationModel) {
	o.Authorization = &v
}

// GetShopper returns the Shopper field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetShopper() ShopperData {
	if o == nil || isNil(o.Shopper) {
		var ret ShopperData
		return ret
	}
	return *o.Shopper
}

// GetShopperOk returns a tuple with the Shopper field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetShopperOk() (*ShopperData, bool) {
	if o == nil || isNil(o.Shopper) {
    return nil, false
	}
	return o.Shopper, true
}

// HasShopper returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasShopper() bool {
	if o != nil && !isNil(o.Shopper) {
		return true
	}

	return false
}

// SetShopper gets a reference to the given ShopperData and assigns it to the Shopper field.
func (o *InstallmentPlanGetResponse) SetShopper(v ShopperData) {
	o.Shopper = &v
}

// GetBillingAddress returns the BillingAddress field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetBillingAddress() AddressData {
	if o == nil || isNil(o.BillingAddress) {
		var ret AddressData
		return ret
	}
	return *o.BillingAddress
}

// GetBillingAddressOk returns a tuple with the BillingAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetBillingAddressOk() (*AddressData, bool) {
	if o == nil || isNil(o.BillingAddress) {
    return nil, false
	}
	return o.BillingAddress, true
}

// HasBillingAddress returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasBillingAddress() bool {
	if o != nil && !isNil(o.BillingAddress) {
		return true
	}

	return false
}

// SetBillingAddress gets a reference to the given AddressData and assigns it to the BillingAddress field.
func (o *InstallmentPlanGetResponse) SetBillingAddress(v AddressData) {
	o.BillingAddress = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetPaymentMethod() PaymentMethodModel {
	if o == nil || isNil(o.PaymentMethod) {
		var ret PaymentMethodModel
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetPaymentMethodOk() (*PaymentMethodModel, bool) {
	if o == nil || isNil(o.PaymentMethod) {
    return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasPaymentMethod() bool {
	if o != nil && !isNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given PaymentMethodModel and assigns it to the PaymentMethod field.
func (o *InstallmentPlanGetResponse) SetPaymentMethod(v PaymentMethodModel) {
	o.PaymentMethod = &v
}

// GetExtendedParams returns the ExtendedParams field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetExtendedParams() map[string]string {
	if o == nil || isNil(o.ExtendedParams) {
		var ret map[string]string
		return ret
	}
	return *o.ExtendedParams
}

// GetExtendedParamsOk returns a tuple with the ExtendedParams field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetExtendedParamsOk() (*map[string]string, bool) {
	if o == nil || isNil(o.ExtendedParams) {
    return nil, false
	}
	return o.ExtendedParams, true
}

// HasExtendedParams returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasExtendedParams() bool {
	if o != nil && !isNil(o.ExtendedParams) {
		return true
	}

	return false
}

// SetExtendedParams gets a reference to the given map[string]string and assigns it to the ExtendedParams field.
func (o *InstallmentPlanGetResponse) SetExtendedParams(v map[string]string) {
	o.ExtendedParams = &v
}

// GetInstallments returns the Installments field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetInstallments() []Installment {
	if o == nil || isNil(o.Installments) {
		var ret []Installment
		return ret
	}
	return o.Installments
}

// GetInstallmentsOk returns a tuple with the Installments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetInstallmentsOk() ([]Installment, bool) {
	if o == nil || isNil(o.Installments) {
    return nil, false
	}
	return o.Installments, true
}

// HasInstallments returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasInstallments() bool {
	if o != nil && !isNil(o.Installments) {
		return true
	}

	return false
}

// SetInstallments gets a reference to the given []Installment and assigns it to the Installments field.
func (o *InstallmentPlanGetResponse) SetInstallments(v []Installment) {
	o.Installments = v
}

// GetRefunds returns the Refunds field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetRefunds() []RefundModel {
	if o == nil || isNil(o.Refunds) {
		var ret []RefundModel
		return ret
	}
	return o.Refunds
}

// GetRefundsOk returns a tuple with the Refunds field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetRefundsOk() ([]RefundModel, bool) {
	if o == nil || isNil(o.Refunds) {
    return nil, false
	}
	return o.Refunds, true
}

// HasRefunds returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasRefunds() bool {
	if o != nil && !isNil(o.Refunds) {
		return true
	}

	return false
}

// SetRefunds gets a reference to the given []RefundModel and assigns it to the Refunds field.
func (o *InstallmentPlanGetResponse) SetRefunds(v []RefundModel) {
	o.Refunds = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *InstallmentPlanGetResponse) GetLinks() LinksData {
	if o == nil || isNil(o.Links) {
		var ret LinksData
		return ret
	}
	return *o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InstallmentPlanGetResponse) GetLinksOk() (*LinksData, bool) {
	if o == nil || isNil(o.Links) {
    return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *InstallmentPlanGetResponse) HasLinks() bool {
	if o != nil && !isNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given LinksData and assigns it to the Links field.
func (o *InstallmentPlanGetResponse) SetLinks(v LinksData) {
	o.Links = &v
}

func (o InstallmentPlanGetResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.InstallmentPlanNumber) {
		toSerialize["InstallmentPlanNumber"] = o.InstallmentPlanNumber
	}
	if true {
		toSerialize["DateCreated"] = o.DateCreated
	}
	if !isNil(o.RefOrderNumber) {
		toSerialize["RefOrderNumber"] = o.RefOrderNumber
	}
	if !isNil(o.PurchaseMethod) {
		toSerialize["PurchaseMethod"] = o.PurchaseMethod
	}
	if true {
		toSerialize["Status"] = o.Status
	}
	if !isNil(o.Currency) {
		toSerialize["Currency"] = o.Currency
	}
	if !isNil(o.OriginalAmount) {
		toSerialize["OriginalAmount"] = o.OriginalAmount
	}
	if !isNil(o.Amount) {
		toSerialize["Amount"] = o.Amount
	}
	if !isNil(o.Authorization) {
		toSerialize["Authorization"] = o.Authorization
	}
	if !isNil(o.Shopper) {
		toSerialize["Shopper"] = o.Shopper
	}
	if !isNil(o.BillingAddress) {
		toSerialize["BillingAddress"] = o.BillingAddress
	}
	if !isNil(o.PaymentMethod) {
		toSerialize["PaymentMethod"] = o.PaymentMethod
	}
	if !isNil(o.ExtendedParams) {
		toSerialize["ExtendedParams"] = o.ExtendedParams
	}
	if !isNil(o.Installments) {
		toSerialize["Installments"] = o.Installments
	}
	if !isNil(o.Refunds) {
		toSerialize["Refunds"] = o.Refunds
	}
	if !isNil(o.Links) {
		toSerialize["Links"] = o.Links
	}
	return json.Marshal(toSerialize)
}

type NullableInstallmentPlanGetResponse struct {
	value *InstallmentPlanGetResponse
	isSet bool
}

func (v NullableInstallmentPlanGetResponse) Get() *InstallmentPlanGetResponse {
	return v.value
}

func (v *NullableInstallmentPlanGetResponse) Set(val *InstallmentPlanGetResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableInstallmentPlanGetResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableInstallmentPlanGetResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInstallmentPlanGetResponse(val *InstallmentPlanGetResponse) *NullableInstallmentPlanGetResponse {
	return &NullableInstallmentPlanGetResponse{value: val, isSet: true}
}

func (v NullableInstallmentPlanGetResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInstallmentPlanGetResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

