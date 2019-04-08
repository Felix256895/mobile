import React, { Component } from "react";
import {Link} from 'react-router-dom';

import styles from "./login.less";

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      userName:'',
      password:'',
    }
  }
  handleSubmit=()=>{
    console.log(this.state.userName,this.state.password)
  }
  //公共获取输入框的值
  handleChange=(key,v)=>{
    this.setState({
      [key]:v.target.value
    });
  }

  render() {
    return (
      <div>
        <ul className={styles.loginBox}>
          <li>
            <span>账号</span>
            <input type="text" value={this.state.userName}  onChange={v=>this.handleChange('userName',v)} placeholder="邮箱/学号/手机号" />
          </li>
          <li>
            <span>密码</span>
            <input type="password" value={this.state.password} onChange={v=>this.handleChange('password',v)} placeholder="密码" />
          </li>
        </ul>
        <div className={styles.btn}>
          <Link to="/register">注册</Link>
          <a onClick={this.handleSubmit} >登录</a>
        </div>
      </div>
    );
  }
}

export default Login;
