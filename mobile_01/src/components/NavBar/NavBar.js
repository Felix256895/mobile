import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './navBar.less';
import appLogo from '../../assets/images/app-logo.png';

class NavBar extends Component {
    render() {
        const { navLeft,navCenter,navRight,path }=this.props;
        return (
            <header className={styles.header}>
                <div className={styles.headerItem1}>
                    <div className={styles.appLogo}>
                        <img src={appLogo} alt="logo"/>
                        <span>随时随地学编程</span>
                    </div>
                    <a className={styles.download} href="https://m.w3cschool.cn/appDownload">下载App</a>
                </div>
                <div className={styles.headerItem2}>
                    <Link to={navLeft[1]}>
                        <img src={navLeft[0]} alt=""/>
                    </Link>
                    <a >
                    {/* <img src={navCenter} alt=""/> */}
                        {path==='/home'?(<img src={navCenter} className={styles.logo} alt=""/>):navCenter}
                    </a>
                    <Link to={navRight[1]}>
                        <img src={navRight[0]} alt=""/> 
                    </Link>
                </div>
            </header>
        );
    }
}

export default NavBar;