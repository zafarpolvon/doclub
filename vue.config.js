const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "doclub",
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
});
