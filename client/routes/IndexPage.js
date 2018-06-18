import React, {Component} from 'react';
import { connect } from 'dva';
import { Table} from 'antd';
import Example from 'components/Example';

@connect(({example, common})=>({
	common,
	example,
	columns: [
	    {
	      title: 'ID',
	      dataIndex: 'id'
	    },
	    {
	      title: '值',
	      dataIndex: 'value'
	    }
	 ]
}))        
export default class IndexPage extends Component {

	state={
		dd:1,
		ff:2
	};

	componentDidMount(){
		const {dispatch} = this.props;

		dispatch({
			type: 'example/fetchUser',
			payload:null
		});

		dispatch({
			type: 'example/fetchXiaoming',
			payload:null
		});

		dispatch({
			type:'common/get',
			payload:{
				url:'/users/xiaoming',
				params: {}
			},
			data:'xx',
			callback:(data)=>{
				console.log(data)
			}
		})

		dispatch({
			type:'common/get',
			payload:{
				url:'/mockData',
			},
			callback:(data)=>{
				console.log('mock data:', data)
			}
		})

		dispatch({
			type:'common/get',
			payload:{
				url:'/users/1',
				params:{
					pageSize:10,
					currentPage: 1,
				}
			},
			callback:(data)=>{
				console.log('users data:', data)
			}
		})
	}


	render(){
		const {columns} = this.props;
		const {dd} = this.state;
		console.log(this.state.dd, this.state.ff)

		const {example:{data}} = this.props;
		return (
			<div>
				<Example></Example>
				<Table
			      dataSource={data}
			      columns={columns}
			      rowKey="id"
			    ></Table>
		    </div>
		)
	}
}

// connect 作为函数 另一种用法
// export default connect(()=>{
//   return {
//     data:[
//       {
//         id: 1,
//         value: 56464
//       },
//       {
//         id: 3,
//         value: 56464
//       },
//     ]
//   }
// })(IndexPage);