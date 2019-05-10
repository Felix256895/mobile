import React, { Component } from 'react';
import styles from './loading.less';

class loading extends Component {
    render() {
        return (
            <div className={styles.loadEffect}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default loading;