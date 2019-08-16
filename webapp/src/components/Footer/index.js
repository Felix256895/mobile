import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';
class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <Link className={styles.footer__link} to='myinfo'>
                我的
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                社区论坛
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                添加商户
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                意见反馈
                </Link>
                <br/>
                <Link className={styles.footer__link} to='myinfo'>
                美团网
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                美团下载
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                结婚
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                亲子
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                家装
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                宴会
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                教育
                </Link>
                <br/>
                <Link className={styles.footer__link} to='myinfo'>
                电脑版
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <Link className={styles.footer__link} to='myinfo'>
                客户端
                </Link>
                <em className={styles.footer__seperator}>|</em>
                <br/>
                <p className={styles.footer__copyright}>copyright ©2019 clearSource</p>
            </footer>
        );
    }
}

export default Footer;