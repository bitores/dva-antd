```
# 配置过程
1、安装脚本架，生成项目
npm i -g dva-cli
dva new dva-react-antd-koa2-roadhog


默认情况：
1、dva不带 antd
2、带 eslint 代码规范检测
3、带 roadhog
4、hmr 代码开发组件热更，webpack-dev 服务器热启
5、

2、升级依赖文件

3、安装 UI 依赖
npm install antd babel-plugin-import --save
antd
babel-plugin-import  --是用来按需加载 antd 的脚本和样式的
安装完成后,配置使用antd  修改.roadhogrc文件 
添加 ["import",{ "libraryName":"antd","style":"css" }]
style": true则是引入js和css模块，包括less、sass

---- 可以使用 dva + antd 开发
```

[roadhog2](https://github.com/sorrycc/blog/issues/55)

```
# roadhog 启动
1、cmd
set PORT=3000 && npm start
2、shell or bash
PORT=3000 npm start
```

```
# roadhog 配置(2.x版本 .roadhogrc 更名为 .webpackrc)
配置文件：
.roadhogrc.mock.js

.webpackrc
.webpackrc.js

格式：js\json\es6\es5
```

```
# roadhog2 版本
roadhog2 ,, af-wepack,  
升级 roadhog 版本为 2.x
更名 .roadhogrc 为 .webpackrc
更名 roadhog server 为 roadhog dev
babel-plugin-dva-hmr，请升级到 0.4.x，

所有的配置都能自动生效（热更新或自重启）
dev server 断线重连
配置项校验和提醒（同时出现在浏览器和控制台里）
配置文件语法错误提示到行
```



```
# dva 其它配置
1、配置 mock 及 api代理
.roadhogrc.mock.js下配置 API 请求代理
2、添加代码 
babel-plugin-transform-decorators-legacy
```





```
# 默认情况下 React 组件的 props 变量的值
history:{length: 1, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
location:{pathname: "/", search: "", hash: "", state: undefined}
match:{path: "/", url: "/", isExact: true, params: {…}}
staticContext:undefined

# connect 之后，组件的 props 变量的值
data:(2) [{…}, {…}]
dispatch:ƒ (action)
history:{length: 1, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
location:{pathname: "/", search: "", hash: "", state: undefined}
match:{path: "/", url: "/", isExact: true, params: {…}}
staticContext:undefined
```

