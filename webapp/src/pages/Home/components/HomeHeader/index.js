import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';

class HomeHeader extends Component {
    render() {
        return (
            <div className={styles.homeHeader}>
                <header className={styles.homeHeader__wrapper}>
                    <a className={styles.homeHeader__city} >深圳</a>
                    <Link to='/search' className={styles.homeHeader__search}>输入商品名、地点</Link>
                    <Link to='/user' className={styles.homeHeader__self}>
                        <div className={styles.homeHeader__portrait} />
                    </Link>
                </header>
            </div>
        );
    }
}

export default HomeHeader;