import React, {Component} from 'react';
import { connect } from 'dva';
import { Table} from 'antd';

@connect()        
export default class IndexPage extends Component {

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
		const {data} = this.props;
		console.log(this.props);
		return (
			<Table
		      dataSource={data}
		      columns={columns}
		      rowKey="id"
		    ></Table>
		)
	}
}