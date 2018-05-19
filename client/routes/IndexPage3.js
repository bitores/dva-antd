import React, {Component} from 'react';
import { Table} from 'antd';


class IndexPage extends Component {

	state={
		dd:1,
		ff:2
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

export default IndexPage;