import React,{useState} from 'react';
import { Table} from 'antd';

const columns = [
    {
      title: 'To-Do',
      dataIndex: 'name',
      render: (text: React.ReactNode) => <a>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'age',
    },
    {
      title: 'Delete',
      dataIndex: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

// console.log("arrayOfToDos", arrayOfToDos);


function ToDoItems(arrayOfToDos:any) {

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default ToDoItems
