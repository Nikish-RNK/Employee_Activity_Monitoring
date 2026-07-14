
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
        rules: {
            semi: "error",
            "no-unused-vars": "warn",
        },
    },
]);
