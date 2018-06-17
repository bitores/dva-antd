import common from './data/common';

const controllers = require('require-all')({
  dirname: __dirname + '/data',
})



// 自动注册 Mock 数据
const objArray = Object.values(controllers);

const mock = Object.assign(...objArray)

// console.log(mock)

export default mock;