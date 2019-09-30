import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Aside from '@/components/Aside';
import styles from './style.less';

class Home extends Component {
   
    render() {
        return (
            <main className={styles.home}>
                <Aside />
                <header className={styles.header}>
                    <div className={styles.home__banner}>  
                        <img src={require('@/assets/images/banner.svg')} alt=""/>
                    </div>
                    <h1 className={styles.home__title}>clearSource blog</h1>
                    <p className={styles.home__description}>系统性学习，打造完善的知识体系</p>
                    <p className={styles.home__btn}>
                        <Link to='/main' >开始阅读 →</Link>
                    </p>
                </header>
                <ul className={styles.featrues}>
                    <li className={styles.featrue}>
                        <h2>JS进阶</h2>
                        <p>掌握高级JavaScript技巧。</p>
                    </li>
                    <li className={styles.featrue}>
                        <h2>React深入</h2>
                        <p>从实际问题出发，由源码深入React。</p>
                    </li>
                    <li className={styles.featrue}>
                        <h2>多端开发</h2>
                        <p>用JavaScript开发移动端、客户端、Web端...</p>
                    </li>
                </ul>
                <div className={styles.footer}>MIT Licensed | Copyright © 2019-present clearSource</div>
            </main>
        );
    }
}

export default Home;

