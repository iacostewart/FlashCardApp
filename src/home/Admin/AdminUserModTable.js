import React from 'react';
import { Table } from 'reactstrap';

const AdminUserModTable =(props) =>   {


    return (
      <div>
      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>All</th>
            <th>users</th>
            <th>forz</th>
            <th>delete or update</th>
          </tr>
        </thead>
        <tbody>
          {
            
            props.userlist.map((users, id) => {
           console.log("props.userlist.map",users)
              return (
          
          <tr key={id}>
            <th scope="row">{users.id}</th>
            <td>{users.username}</td>
            <td>{users.password}</td>
            <td>{users.email}</td>
          </tr>
              )
            })
          }
        </tbody>
      </Table>
      </div>
    );
  }


export default AdminUserModTable;