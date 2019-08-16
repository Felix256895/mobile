import React, { Component } from 'react';
import styles from './style.less';

class Banner extends Component {
    render() {
        return (
            <header className={styles.banner}>
                <div className={styles.banner__title}>
                    <span className={styles.banner__logo} />
                    <span className={styles.banner__text}>吃喝玩乐，找优惠</span>
                </div>
                <div className={styles.banner__btns}>
                <a className={styles.banner__btn}
                    href='https://evt.dianping.com/synthesislink/6702.html'>打开大众点评</a>
                <a className={styles.banner__btn+' '+styles.banner__btn__bg}
                    href='https://m.dianping.com/download/redirect?id=11186'>下载APP享特价</a>
                </div>
            </header>
        );
    }
}

export default Banner;