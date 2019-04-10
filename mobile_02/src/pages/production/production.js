import React, { Component } from 'react';
import NavHeader from '@/components/navHeader/navHeader';

import styles from './production.less';

class production extends Component {
    render() {
        return (
            <main>
                <NavHeader title='首页' confirm />
                <section className={styles.pro_list_con}>
                    <ul className={styles.pro_list_ul}>
                        <li className={styles.pro_item}>
                            <div className={styles.pro_item_select}>
                                <span className={true?styles.select_true:styles.select_false}></span>
                                <span className={styles.pro_name}>七彩世界</span>
                            </div>
                            <div className={styles.pro_item_edit}>
                                <span className={false?styles.pro_subtract:styles.pro_defalut}></span>
                                <span className={styles.pro_num}>0</span>
                                <span className={styles.pro_add}></span>
                            </div>
                        </li>
                        <li className={styles.pro_item}>
                            <div className={styles.pro_item_select}>
                                <span className={`${false?styles.select_true:styles.select_false}`}></span>
                                <span className={styles.pro_name}>七彩海洋</span>
                            </div>
                            <div className={styles.pro_item_edit}>
                                <span className={true?styles.pro_subtract:styles.pro_defalut}></span>
                                <span className={styles.pro_num}>1</span>
                                <span className={styles.pro_add}></span>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default production;