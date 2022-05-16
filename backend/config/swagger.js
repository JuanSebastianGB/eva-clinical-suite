const path = require('path');
export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Eva Clinical Suite API",
            version: "1.0.0",
            description: "A simple Express Library API.",
            termsOfService: "http://example.com/terms/",
            contact: {
                name: "API Support",
                url: "http://www.exmaple.com/support",
                email: "electromedicina2huv@gmail.com",
            },
        },

        servers: [
            {
                url: `${process.env.URL || 'http://localhost'}:${process.env.PORT || 5000}`,
                description: "Eva clinical suit API Documentation",
            },
        ],
    },
    apis: [`${path.join(__dirname, '../app/routes/*.js')}`]
};