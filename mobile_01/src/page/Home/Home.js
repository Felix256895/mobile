import React, { Component } from 'react';
import {Switch,Route,Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import styles from './home.less';
import IndexList from './index';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Program from '../Program/Program';
import Documents from '../Document/Document';
import Special from '../Special/Special';
import Vip from '../Vip/Vip';

import headerLogo from '../../assets/images/header-logo.png';
import shrink from '../../assets/images/shrink.svg';
import user from '../../assets/images/user.svg';
import home from '../../assets/images/home.svg';
import returnIcon from '../../assets/images/return.svg';

const routeList=[
    {
        path:'/home',
        navLeft:[shrink,'/'],
        navCenter:headerLogo,
        navRight: [user,'/login'],
        component:IndexList,
    },
    {
        path:'/login',
        navLeft:[returnIcon,'/'],
        navCenter:'w3cschool 登录',
        navRight: [home,'/'],
        component:Login,
    },
    {
        path:'/register',
        navLeft:[returnIcon,'/'],
        navCenter:'注册',
        navRight: [home,'/'],
        component:Register,
    },
    {
        path:'/program',
        navLeft:[returnIcon,'/'],
        navCenter:'编程入门教程',
        navRight: [home,'/'],
        component:Program,
    },
    {
        path:'/document',
        navLeft:[returnIcon,'/'],
        navCenter:'极客文档',
        navRight: [home,'/'],
        component:Documents,
    },
    {
        path:'/special',
        navLeft:[returnIcon,'/'],
        navCenter:'专题',
        navRight: [home,'/'],
        component:Special,
    },
    {
        path:'/vip',
        navLeft:[returnIcon,'/'],
        navCenter:'w3cschool会员',
        navRight: [home,'/'],
        component:Vip,
    },
]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const pathname=this.props.location.pathname;
        return (
            <div >
                {
                    routeList.map(item=>{
                        if(item.path===pathname) return <NavBar key={item.path} {...item} />
                    })
                }
                <div className={styles.content}>
                    <Switch>
                        {
                            routeList.map((v,k)=>(
                                <Route key={v.path} path={v.path} component={v.component} />
                            ))
                        }
                        {/* 重定向首页 */}
                        <Redirect to='/home' /> 
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;