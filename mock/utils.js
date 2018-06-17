import slices from './slice';


// 函数 field 
// 描述 生成单条 数据

export function field(field, desc, exp){
	return {
		[field]:{
			desc,
			exp,
		}
	}
}

// 函数 params
// 描述 生成最终 params
// 参数 t
// 参数 值 
// [
// 	[字段, 描述, 值],
// 	[field, desc, exp],
// ]
// 结果 值
// {
// 	字段：{
// 		desc:描述,
// 		exp:值,
// 	}
// }
// eg.
// $params: params([
//   ['currentPage', '第几页', 1],
//   ['pageSize', '每页数据量', 10],
//   ['startTime', '开始时间', 15235646898],
// ]),
export function params(t){

	const objArray = t.map((item)=>{

		if(item.length !== 3) return {};
		return {
			[item[0]]:{
				desc:item[1],
				exp:item[2],
			}
		}
	})

	return Object.assign(...objArray);
}




// 函数 pack
// 描述 打包参数
// eg.
// $params: pack([
// 	'currentPage',
// 	'pageSize',
// 	'startTime',
// 	'endTime'
// ])

export function pack(t){

	const data = t.map((item)=>{
		return {
			[item]:slices[item]
		}
	})

	return Object.assign(...data);
}