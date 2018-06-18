const models = [
	'common',
	'example',
];

export default models.map(item=>{
	let model = require(`./data/${item}`).default;

	// 自动注册 变量保存函数 save function in reducers
	model['reducers']['save'] = (state, action) => {
      return { ...state, ...action.payload };
    }

    // 自动注册 变量清除函数 clean function in effects
    model['effects']['clean'] = function *({payload},{put}) {
      yield put({
        type:'save',
        payload,
      })
    },

    console.log(model)

    return model;
})