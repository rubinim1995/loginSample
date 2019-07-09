import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/login';
import './style.css';
import {
  Redirect
} from 'react-router-dom'
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      isFormSubmit : false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {username, password} = this.state;
    let {loginStatus} = this.props;
    console.log("render")
    return (
      <div>
      <div className="jumbotron">
                        <h1 className="display-3">Login Here</h1>
                    </div>
      <form name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Username</label>
            <input type="username" name="username" onChange={e => this.setState({username: e.target.value})} value={username}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
          </div>
        </div>

        <input type="submit" value="Login" />
        { loginStatus && <div>Success.<Redirect to="/employeeList" /> </div> }
        {!loginStatus && this.state.isFormSubmit && <div style={{color:"red"}}>Authentication Failure </div>}
      </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let { username, password } = this.state;
    let regex = /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
    if(!this.state.username && !this.state.password){
      alert("username  or password cannot be empty")
    }
    if (regex.test(this.state.username) && regex.test(this.state.password) ) {
      this.props.login(username, password);
     }  else {
      alert("invalid username  or password")
     }
   
    
    this.setState({
      isFormSubmit : true,
      username: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.login.loginStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);