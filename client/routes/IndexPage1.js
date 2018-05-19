import React from 'react';
import { connect } from 'dva';
import { Table} from 'antd';

const IndexPage = ({data, dispatch})=>{
  console.log(data)
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
  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="id"
    ></Table>
  );
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
