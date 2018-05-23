import { delay } from 'roadhog-api-doc';
import example from "./mock/example";
import * as demo from './mock/demo';

// console.log(demo)

Object.keys(demo).find((key,val)=>{
  console.log(key,val, demo[key])
})

const apiPrefix="/api";

const mock = {
// 	// 支持值为 Object 和 Array
  [`GET ${apiPrefix}/users`]: { users: [1,3] },
 
//   // GET POST 可省略
  [`${apiPrefix}/users/1`]: { id: 1 },
 
//   // 支持自定义函数，API 参考 express@4
  [`POST ${apiPrefix}/users/create`]: (req, res) => { res.end('OK'); },
 
//   // Forward 到另一个服务器
  [`GET /assets/*`]: 'https://assets.online/',
 
//   // Forward 到另一个服务器，并指定子路径
//   // 请求 /someDir/0.0.50/index.css 会被代理到 https://alicdn.com/taobao, 
//   // 实际返回 https://alicdn.com/taobao/0.0.50/index.css
  [`GET /someDir/(.*)`]: 'https://alicdn.com//taobao',

  // ...example,

  "GET /demoapi":{
    $desc: '获取用户充币记录接口',
    $params: {
      currentPage: {
        desc: '第几页',
        exp: '1',
      },
    },
    $body: {}
  }
};


export default delay(mock, 1000);