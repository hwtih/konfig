/*
splitit-web-api-v3

Splitit's Web API

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AddressData } from './address-data';
import { AuthorizationModel } from './authorization-model';
import { BluesnapVaultedShopperToken } from './bluesnap-vaulted-shopper-token';
import { CardBrand } from './card-brand';
import { CardData } from './card-data';
import { CardType } from './card-type';
import { GwAuthorizationStatus } from './gw-authorization-status';
import { Installment } from './installment';
import { InstallmentStatus } from './installment-status';
import { LinksData } from './links-data';
import { MockerShopperToken } from './mocker-shopper-token';
import { PaymentMethodModel } from './payment-method-model';
import { PaymentMethodType } from './payment-method-type';
import { PlanStatus } from './plan-status';
import { PurchaseMethod } from './purchase-method';
import { RefundModel } from './refund-model';
import { RefundStatus } from './refund-status';
import { ShopperData } from './shopper-data';
import { SpreedlyToken } from './spreedly-token';
import { ThreeDsRedirectDataV3 } from './three-ds-redirect-data-v3';

/**
 * 
 * @export
 * @interface SearchInstallmentPlanResponseItem
 */
export interface SearchInstallmentPlanResponseItem {
    /**
     * 
     * @type {string}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'InstallmentPlanNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'DateCreated': string;
    /**
     * 
     * @type {string}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'RefOrderNumber'?: string;
    /**
     * 
     * @type {PurchaseMethod}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'PurchaseMethod'?: PurchaseMethod;
    /**
     * 
     * @type {PlanStatus}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Status': PlanStatus;
    /**
     * 
     * @type {string}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Currency'?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'OriginalAmount'?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Amount'?: number;
    /**
     * 
     * @type {AuthorizationModel}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Authorization'?: AuthorizationModel;
    /**
     * 
     * @type {ShopperData}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Shopper'?: ShopperData;
    /**
     * 
     * @type {AddressData}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'BillingAddress'?: AddressData;
    /**
     * 
     * @type {PaymentMethodModel}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'PaymentMethod'?: PaymentMethodModel;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'ExtendedParams'?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Installment>}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Installments'?: Array<Installment>;
    /**
     * 
     * @type {Array<RefundModel>}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Refunds'?: Array<RefundModel>;
    /**
     * 
     * @type {LinksData}
     * @memberof SearchInstallmentPlanResponseItem
     */
    'Links'?: LinksData;
}
