// 入口文件列表
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const PAGES_PATH = path.resolve(ROOT_PATH, 'client/pages');
const TEMPLATE_PATH = path.resolve(ROOT_PATH, 'client/index.ejs');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');

const APP_PATH = path.resolve(ROOT_PATH, 'client');

// pages增加一个模块配置一个属性
const build = {
  pages: {
    page1: {
      entry: path.resolve(PAGES_PATH, 'a.js'),
      title: 'page1',
    },
    page2: {
      entry: path.resolve(PAGES_PATH, 'b.js'),
      title: 'page2',
    },
  },
  template: TEMPLATE_PATH,
  output: OUTPUT_PATH,
  publicPath: path.resolve(__dirname, 'dist'),
};

export default function(webpackConfig){
	
	const ExtractTextPlugin = require('extract-text-webpack-plugin');
	const HtmlWebpackPlugin = require('html-webpack-plugin');

	// 输出配置
  webpackConfig.output = {
    path: build.output,
    filename: 'static/js/[name]-bundle.js',
    pathinfo: true,
    publicPath,
    // 按需加载
    chunkFilename: 'static/js/chunk/[name]-chunk.js',
  };

  	// 变量初始化
  const childProcess = require('child_process');
  const cmd = "git branch | grep \\* | cut -d ' ' -f2";
  const BRANCH = childProcess.execSync(cmd).toString().trim();
  const DATETIME = (new Date()).toLocaleString();

  let BUILDTAG = '';

  const env = "development";
  switch (env) {
    case 'development':
      BUILDTAG = `${BRANCH}@DEV - build@${DATETIME}`;
      break;
    case 'production':
      BUILDTAG = `${BRANCH}@PROD - build@${DATETIME}`;
      break;
    default:
      BUILDTAG = `${BRANCH}@OTHER - build@${DATETIME}`;
  }

  const BUILD = BUILDTAG.toString();

  // 输入配置
  const entrys = {};
  for (const key in build.pages) {
    if (env === 'production') {
      entrys[key] = build.pages[key].entry;
    } else {

      entrys[key] = [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        build.pages[key].entry,
      ];
    }
  }


  console.log(entrys)


  webpackConfig.entry = Object.assign({}, entrys);
  // delete webpackConfig.entry.index;

  // 输出配置暂时不配置hash串，[hash:8]
  let publicPath = '/';
  if (env === 'production') {
    publicPath = build.publicPath;
  }


	// 模块支持
  webpackConfig.module.loaders = [
      {
        exclude: [/\.(jsx?)$/, /\.(less|css)$/, /\.html$/, /\.ejs$/, /\.json$/, /\.(jpe?g|gif|png|webp|bmp)$/, /\.(svg|woff2?|ttf|eot)\??(.*?)$/],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/other/[name].[ext]',
        },
      }, {
        test: /\.(jsx?)$/,
        loader: 'babel?cacheDirectory=.cache',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        include: APP_PATH,
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&modules&localIdentName=[local]___[hash:base64:8]!postcss'),
      }, {
        test: /\.less$/,
        include: APP_PATH,
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&modules&localIdentName=[local]___[hash:base64:8]!postcss!less'),
      }, {
        test: /\.css$/,
        include: path.resolve(ROOT_PATH, 'node_modules'),
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss'),
      }, {
        test: /\.less$/,
        include: path.resolve(ROOT_PATH, 'node_modules'),
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss!less'),
      }, {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.(jpe?g|gif|png|webp|bmp)$/,
        loader: 'file?name=static/images/[name].[ext]',
      }, {
        test: /\.(svg|woff2?|ttf|eot)\??(.*?)$/,
        loader: 'file?name=static/fonts/[name].[ext]',
      },
    ];


	// console.log("@@@@@@", webpackConfig);

	// console.log(JSON.stringify(webpackConfig.output));
  let isExtractTextPlugin = false;
  for (const x in webpackConfig.plugins) {
    if (Object.prototype.hasOwnProperty.call(webpackConfig.plugins, x)) {
      const constructorName = webpackConfig.plugins[x].constructor.name;
      if (constructorName === 'DefinePlugin') {
        const pluginsDefinitions = {
          __DEV__: JSON.stringify((env === 'development')),
          __BUILD__: JSON.stringify(BUILD),
        };
        webpackConfig.plugins[x].definitions = Object.assign(
          {}, webpackConfig.plugins[x].definitions, pluginsDefinitions);
      }
      // CommonsChunkPlugin
      if (constructorName === 'CommonsChunkPlugin') {
        webpackConfig.plugins[x].filenameTemplate = 'static/js/common.js';
      }
      // webpack替换
      if (constructorName === 'ExtractTextPlugin') {
        isExtractTextPlugin = true;
        webpackConfig.plugins[x] = new ExtractTextPlugin('static/css/[name].css', { allChunks: true });
      }
    }
  }

  if (!isExtractTextPlugin) {
    webpackConfig.plugins.push(new ExtractTextPlugin('static/css/[name].css', { allChunks: true }));
  }

  const pageLinks = [];
  for (const name in build.pages) {
    if (Object.prototype.hasOwnProperty.call(build.pages, name)) {
      pageLinks.push(`${name}.html`);
      webpackConfig.plugins.push(new HtmlWebpackPlugin({
        title: build.pages[name].title,
        filename: path.resolve(build.output, `${name}.html`),
        template: build.template,
        inject: true,
        chunks: ['common', name],
        hash: true,
        cache: false,
      }));
    }
  }

  if (env === 'development') {
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      filename: path.resolve(build.output, 'index.html'),
      templateContent() {
        let links = '';
        for (const link in pageLinks) {
          if (Object.prototype.hasOwnProperty.call(pageLinks, link)) {
            links += `<li><a href="${pageLinks[link]}">${pageLinks[link]}</a></li>`;
          }
        }
        return '<!DOCTYPE html><html><head><meta charset="UTF-8">' +
          '<title>开发调试工具</title></head>' +
          `<body><ul>${links}</ul></body></html>`;
      },
      inject: false,
      hash: false,
      cache: false,
    }));
  }




	return webpackConfig;
}