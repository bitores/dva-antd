const path = require('path');

export default {
  entry: 'client/index.js',
  extraBabelPlugins: [
  	['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
      "transform-decorators-legacy"
    },
  },
  alias: {
    components: path.resolve(__dirname, 'client/components/'),
  },
  ignoreMomentLocale: true,
  theme: {
    "@primary-color": "#1DA57A"
  },
  html: {
    template: './client/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  proxy: {
    "/proxyApi": {
      "target": "http://192.168.11.16:8000",
      "changeOrigin": true,
      "pathRewrite":{
        "^/proxyApi": ""
      }
    }
  }
};
