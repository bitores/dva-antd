const models = [
	'common',
	'example',
];

export default models.map(item=>{
	return require(`./data/${item}`).default
})