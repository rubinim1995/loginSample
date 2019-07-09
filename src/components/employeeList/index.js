import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import {
    Redirect
  } from 'react-router-dom'
class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        user:[{
        "id":1,
        "name":"test1",
        "age" : "11",
        "gender":"male",
        "email" : "test1@gmail.com",
        "phoneNo" : "9415346313"
        },
        {
        "id" : 2,
        "name":"test2",
        "age" : "12",
        "gender":"male",
        "email" : "test2@gmail.com",
        "phoneNo" : "9415346314"
        },
        {
        "id":3,
        "name":"test3",
        
        "age" : "13",
        "gender":"male",
        "email" : "test3@gmail.com",
        "phoneNo" : "9415346315"
        },
        {
        "id":4,
        "name":"test4",
        "age" : "14",
        "gender":"male",
        "email" : "test4@gmail.com",
        "phoneNo" : "9415346316"
        },
        {
        "id":5,
        "name":"test5",
        "age" : "15",
        "gender":"male",
        "email" : "test5@gmail.com",
        "phoneNo" : "9415346317"
        },
        {
        "id":6,
        "name":"test6",
        "age" : "16",
        "gender":"male",
        "email" : "test6@gmail.com",
        "phoneNo" : "9415346318"}] 
    };
  }

  render() {
   
    return (
        <div>
        <div className="jumbotron">
                          <h1 className="display-3">EmployeeList</h1>
                      </div>
        <table>
        <tbody >{this.state.user.map(function(item, key) {
               
                 return (
                    <tr  key = {key}>
                        <td >{item.id}</td>
                        <td >{item.name}</td>
                        <td >{item.age}</td>
                        <td >{item.gender}</td>
                        <td >{item.email}</td>
                        <td >{item.phoneNo}</td>
                    </tr>
                  )
               
               })}</tbody>
         </table>
         <div style={{paddingTop: "10px",color:"grey"}}><button type="button" onclick={()=><Redirect to="/Home" />}>Go Back</button></div>
         </div>
    )
  }

  
}

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);