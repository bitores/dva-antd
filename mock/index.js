

const data = [
	'common',
	'demo',
];

const controllers = data.map(item=>{
	const t = require(`${__dirname}/data/${item}`);
    return t.default||t;
})

// console.log(`${__dirname}/data/${item}`);
// console.log(require('./'))


// const controllers = require('require-all')({
//   dirname: __dirname + '/data',
// })


// 自动注册 Mock 数据

const objArray = Object.values(controllers);


const mock = Object.assign(...objArray)

export default mock;