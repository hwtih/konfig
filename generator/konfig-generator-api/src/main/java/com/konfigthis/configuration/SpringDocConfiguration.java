package com.konfigthis.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SpringDocConfiguration {

    @Bean
    OpenAPI apiInfo() {
        return new OpenAPI()
                .info(
                        new Info()
                                .title("Konfig Generator API")
                                .description("This is the specification for [Konfig's Generator API](https://api.konfigthis.com)")
                                .contact(
                                        new Contact()
                                                .email("dylan@konfigthis.com")
                                )
                                .version("1.0.0")
                )
        ;
    }
}