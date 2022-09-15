const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new ModuleFederationPlugin({
      name: 'core',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'core' },
      exposes: {
        './BasicButton': './src/components/BasicButton',
        './HelloWorld': './src/components/HelloWorld',
      },
      shared: require('./package.json').dependencies,
    })]
  }
})
