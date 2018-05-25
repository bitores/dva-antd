import React, {Component} from 'react';
import { connect } from 'dva';
import { Table} from 'antd';

// @connect(({example})=>({
// 	example,
// }))
class IndexPage extends Component {

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
		// const data = [
		//       {
		//         id: 1,
		//         value: 56464
		//       },
		//       {
		//         id: 3,
		//         value: 56464
		//       },
		//     ];
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

export default connect(()=>{
  return {
    data:[
      {
        id: 1,
        value: 56464
      },
      {
        id: 3,
        value: 56464
      },
    ]
  }
})(IndexPage);