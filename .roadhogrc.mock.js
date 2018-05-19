import example from "./mock/example";

export default {
	// 支持值为 Object 和 Array
  'GET /api/users': { users: [1,2] },
 
  // GET POST 可省略
  '/api/users/1': { id: 1 },
 
  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
 
  // Forward 到另一个服务器
  'GET /assets/*': 'https://assets.online/',
 
  // Forward 到另一个服务器，并指定子路径
  // 请求 /someDir/0.0.50/index.css 会被代理到 https://alicdn.com/taobao, 
  // 实际返回 https://alicdn.com/taobao/0.0.50/index.css
  'GET /someDir/(.*)': 'https://alicdn.com//taobao',

  ...example,
};
