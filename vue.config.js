const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
    transpileDependencies: true,

    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "src"),
                "@router": path.join(__dirname, "src/router"),
                "@routes": path.join(__dirname, "src/router/routes"),
                "@store": path.join(__dirname, "src/store"),
                "@headers": path.join(__dirname, "src/components/headers"),
                "@tabs": path.join(__dirname, "src/components/tabs"),
                "@components": path.join(__dirname, "src/components"),
                "@animals": path.join(__dirname, "src/components/animals"),
                "@pages": path.join(__dirname, "src/pages"),
                "@subPages": path.join(__dirname, "src/components/pages"),
            },
            extensions: [".js", ".vue", ".json"],
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "~@/assets/scss/header.scss";
                `,
            },
        },
    },
});
