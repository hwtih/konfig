/*
 * java-nullable-ref-using-all-of-schema API
 * A simple API based for testing java-nullable-ref-using-all-of-schema.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.javanullablerefusingallofschema.client.api;

import com.konfigthis.javanullablerefusingallofschema.client.ApiException;
import com.konfigthis.javanullablerefusingallofschema.client.ApiClient;
import com.konfigthis.javanullablerefusingallofschema.client.ApiException;
import com.konfigthis.javanullablerefusingallofschema.client.Configuration;
import com.konfigthis.javanullablerefusingallofschema.client.model.TestFetchRequestWithAllOf;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeAll;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TestApi
 */
@Disabled
public class TestApiTest {

    private static TestApi api;

    
    @BeforeAll
    public static void beforeClass() {
        ApiClient apiClient = Configuration.getDefaultApiClient();
        api = new TestApi(apiClient);
    }

    /**
     * Fetches a JSON value based on input parameter
     *
     * Provide an input parameter to receive a JSON value with properties.
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void fetchTest() throws ApiException {
        Double input = null;
        Object response = api.fetch()
                .input(input)
                .execute();
        // TODO: test validations
    }

}