//
// OptionLeg.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Option Leg */
public struct OptionLeg: Codable, JSONEncodable, Hashable {

    public enum Action: String, Codable, CaseIterable {
        case buyToOpen = "BUY_TO_OPEN"
        case buyToClose = "BUY_TO_CLOSE"
        case sellToOpen = "SELL_TO_OPEN"
        case sellToClose = "SELL_TO_CLOSE"
    }
    public var action: Action?
    /** Obtained from calling options chain endpoint (option_id) */
    public var optionSymbolId: String?
    public var quantity: Double?

    public init(action: Action? = nil, optionSymbolId: String? = nil, quantity: Double? = nil) {
        self.action = action
        self.optionSymbolId = optionSymbolId
        self.quantity = quantity
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case action
        case optionSymbolId = "option_symbol_id"
        case quantity
    }

    public var additionalProperties: [String: AnyCodable] = [:]

    public subscript(key: String) -> AnyCodable? {
        get {
            if let value = additionalProperties[key] {
                return value
            }
            return nil
        }

        set {
            additionalProperties[key] = newValue
        }
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(action, forKey: .action)
        try container.encodeIfPresent(optionSymbolId, forKey: .optionSymbolId)
        try container.encodeIfPresent(quantity, forKey: .quantity)
        var additionalPropertiesContainer = encoder.container(keyedBy: String.self)
        try additionalPropertiesContainer.encodeMap(additionalProperties)
    }

    // Decodable protocol methods

    public init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)

        action = try container.decodeIfPresent(Action.self, forKey: .action)
        optionSymbolId = try container.decodeIfPresent(String.self, forKey: .optionSymbolId)
        quantity = try container.decodeIfPresent(Double.self, forKey: .quantity)
        var nonAdditionalPropertyKeys = Set<String>()
        nonAdditionalPropertyKeys.insert("action")
        nonAdditionalPropertyKeys.insert("option_symbol_id")
        nonAdditionalPropertyKeys.insert("quantity")
        let additionalPropertiesContainer = try decoder.container(keyedBy: String.self)
        additionalProperties = try additionalPropertiesContainer.decodeMap(AnyCodable.self, excludedKeys: nonAdditionalPropertyKeys)
    }
}
