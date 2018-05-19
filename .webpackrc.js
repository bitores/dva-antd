const path = require('path');

export default {
  entry: 'client/index.js',
  extraBabelPlugins: [
  	['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    "transform-decorators-legacy"
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'client/components/'),
  },
  ignoreMomentLocale: true,
  // theme: './client/theme.js',
  html: {
    template: './client/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};
