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
                "@pages": path.join(__dirname, "src/pages"),
                "@images": path.join(__dirname, "src/assets/images"),
                "@components": path.join(__dirname, "src/components"),
                "@headers": path.join(__dirname, "src/components/headers"),
                "@tabs": path.join(__dirname, "src/components/tabs"),
                "@animals": path.join(__dirname, "src/components/animals"),
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
