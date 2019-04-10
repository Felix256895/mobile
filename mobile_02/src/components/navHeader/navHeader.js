import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navHeader.less';



class NavHeader extends Component {
    constructor(props){
        super(props);
        this.state={
            navState:false,
        }
    }
    toggleNav=()=>{
        this.setState({
            navState:!this.state.navState
        });
    }

    render() {
        return (
            <header className={styles.header_container} >
                <span className={styles.header_slider_icon} onClick={this.toggleNav} ></span>
                <span className={styles.header_title} >{this.props.title}</span>
                {
                    this.props.record&&<NavLink to='/record' className={styles.header_record_icon} />
                }
                {
                    this.props.confirm&&<NavLink to='/' className={styles.header_home}>确认</NavLink>
                }
                {this.state.navState&&<aside className={styles.nav_slider_list} onClick={this.toggleNav}>
                    <NavLink to="/" exact className={styles.nav_link}>首页</NavLink>
                    <NavLink to="/balance"  className={styles.nav_link}>提现</NavLink>
                    <NavLink to="/helpcenter"  className={styles.nav_link}>帮助中心</NavLink>
                </aside>}
            </header>
        );
    }
}

export default NavHeader;