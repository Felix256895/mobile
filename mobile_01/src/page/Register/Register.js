import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from '../Login/login.less';
import code from '../../assets/images/code.png';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            confirm:'',
            codeChange:'',
        }
    }
    //获取输入值
    handleChange=(key,v)=>{
        this.setState({
            [key]:v.target.value
        })
    }
    handleSubmit=()=>{
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <ul className={styles.loginBox}>
                    <li>
                        <span>邮箱</span>
                        <input type="text" value={this.state.email} onChange={v=>this.handleChange('email',v)} placeholder='邮箱地址' />
                    </li>
                    <li>
                        <span>设置密码</span>
                        <input type="password" value={this.state.password} onChange={v=>this.handleChange('password',v)} placeholder='6~16字符' />
                    </li>
                    <li>
                        <span>确认密码</span>
                        <input type="password" value={this.state.confirm} onChange={v=>this.handleChange('confirm',v)} placeholder='再次输入密码' />
                    </li>
                    <li>
                        <span>验证码</span>
                        <input type="text" placeholder='验证码' value={this.state.codeChange} onChange={v=>this.handleChange('codeChange',v)} style={{width:'40%'}} />
                        <img src={code} alt='验证码' style={{flexGrow:1,height:'1rem'}} />
                    </li>
                </ul>
                <div className={styles.btn}>
                    <Link to="/login">登录</Link>
                    <a onClick={this.handleSubmit} >注册</a>
                </div>
            </div>
        );
    }
}

export default Register;