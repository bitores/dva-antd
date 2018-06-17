import React, {Component} from 'react';
import { connect } from 'dva';
import { Table} from 'antd';
import Example from '../components/Example';

@connect(({example, common})=>({
	common,
	example,
	// myData: example.data,
}))        
export default class IndexPage extends Component {

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
				url:'/users/users',
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
	}


	render(){
		const columns = [
		    {
		      title: 'ID',
		      dataIndex: 'id'
		    },
		    {
		      title: '值',
		      dataIndex: 'value'
		    }
		  ];
		console.log(this.props);

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