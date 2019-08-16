import React, { Component } from 'react';
import styles from './style.less';
class Loading extends Component {
    render() {
        return (
            <div className={styles.loading}>
                <div className={styles.loading__img} />
                <span>正在加载...</span>
            </div>
        );
    }
}

export default Loading;