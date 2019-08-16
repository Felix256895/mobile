import React, { Component } from 'react';
import styles from './style.less';

class ErrorToast extends Component {
    render() {
        const { msg }=this.props;
        return (
            <div className={styles.errorToast}>
                <div className={styles.errorToast__text}>
                    {msg}
                </div>
            </div>
        );
    }
}

export default ErrorToast;