//
// RunWorkflowSchema.swift
//
// Generated by Konfig
// https://konfigthis.com
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct RunWorkflowSchema: Codable, JSONEncodable, Hashable {

    /** The ID of the workflow to be run. */
    public var workflowId: String
    /** The URL to which the workflow results should be sent to on completion. */
    public var webhookUrl: String?
    /** Variables that the workflow can use globally and their values. */
    public var input: [String: AnyCodable]?

    public init(workflowId: String, webhookUrl: String? = nil, input: [String: AnyCodable]? = nil) {
        self.workflowId = workflowId
        self.webhookUrl = webhookUrl
        self.input = input
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case workflowId = "workflow_id"
        case webhookUrl = "webhook_url"
        case input
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(workflowId, forKey: .workflowId)
        try container.encodeIfPresent(webhookUrl, forKey: .webhookUrl)
        try container.encodeIfPresent(input, forKey: .input)
    }
}
