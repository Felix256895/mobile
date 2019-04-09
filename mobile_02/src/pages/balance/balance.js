import React, { Component } from 'react';

import NavHeader from '@/components/navHeader/navHeader';

import styles from './balance.less';

class balance extends Component {
    render() {
        return (
            <main className={styles.balance_container}>
                <NavHeader title='提现' record/>
                <section className={styles.balance_content}>
                    <p className={styles.balance_header}>您的可提现现金为：¥ 60</p>
                    <form className={styles.balance_form} >
                        <p>请输入提现金额（元）</p>
                        <p>¥ <input type="text" placeholder='0.00' maxLength='5' /></p>
                    </form>
                </section>
            </main>
        );
    }
}

export default balance;