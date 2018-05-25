import React, {Component} from 'react';
import { connect } from 'dva';
import { Table} from 'antd';

@connect(()=>{
	return {
    data:[
      {
        id: 1,
        value: 56464
      },
      {
        id: 4,
        value: 56464
      },
    ]
  }
})        
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
		console.log(this.props);

		const {data} = this.props;
		return (
			<Table
		      dataSource={data}
		      columns={columns}
		      rowKey="id"
		    ></Table>
		)
	}
}