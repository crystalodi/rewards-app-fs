module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                "/api": {
                    target: "http://localhost:8080"
                }
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "~@/scss/variables.scss";
                    @import "~@/scss/global.scss";
                `
            }
        }
    }
};