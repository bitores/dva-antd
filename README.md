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





#### 入坑记

```
1、@connect 使用时一直报错，把需要的依赖一个个地安装完毕后，配置，还是不行，
重启还是不行，
最后，
把 node_modules 包全部删除，
重新安装依赖包，
忽然间，可以了
不过，
这一切是发生在，我安装了
bable-runtime 之后，
但是，
后面，我把 bable-runtime 这个依赖去掉后，
依然可以正常执行？？
？？
坑吧。。。。
我怀疑：
安装 babel-runtime 后，
我电脑的某处，已含有 babel-runtime,
即使在此项目下 没有 babel-runtime,
但其需要时，依然可以在电脑的某片找到。。。
。。。
入坑容易，出坑难

===========
原因分析：
1、可能由于网络原因，某些依赖包在下载时，没有下载完全，所以会出现运行失败的情况==这就是我们 node_module 删除重装 的理由之一

2、
```



#### ES6

```
# node runtime support es6

1、es-check
	es-check -g 
2、babel
	babel-cli -g --save-dev 
	babel-preset-es2015 --save-dev
3、.babelrc 
	{
        "presets":[
            "es2015"  ------babel-preset-es2015,
            "stage-2" ------babel-preset-stage-2
        ],
        "plugins":[]
	}
	
4、transform
	babel src -d dist
	
-----------
执行代码时：
	> babel-node demo.js
但是：
	> node demo.js 报错

======== 实现 node demo.js 成功
1、babel-register --save
2、app.js
	var fs = require('fs');  
    var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));  
    require('babel-register')(babelConfig);  
    require('./demo.js'); 
3、> node app.js


======= hmr 开发热
```

#### server 端开发，代码实时监控（服务器的热启动）

```
# 热启动
nodemon/forever/pm2....
开发时 nodemon
```

