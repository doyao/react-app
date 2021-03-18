import React,{Component} from 'react';
import { Table, Space } from 'antd';
import {DeleteOutlined,CopyOutlined} from '@ant-design/icons';
class TableList extends Component{
    constructor(props){
        super(props);
        this.handledeletes=this.handledeletes.bind(this)
    }
    render(){
      const data = this.props.list;
      const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
            },
            {
              title: 'Age',
              dataIndex: 'age',
            },
            {
              title: 'Tel',
              dataIndex: 'tel',
            },
            {
              title: 'Sex',
              dataIndex: 'sex',
            },
            
            {
              title: '操作',
              render: (text, record) => (
                <Space size="middle">
                  <DeleteOutlined alt="删除"/>
                  <CopyOutlined  key={data.key} onClick={this.handledeletes} alt="修改"/>
                </Space>
              ),
            },
        ];
        
        return (<Table rowKey={data.key} style={{marginTop:20}} pagination={{pageSize:10}} columns={columns} dataSource={data} />)
        
    }
    handledeletes(){
      console.log(this.key)
    }
}
export default TableList;