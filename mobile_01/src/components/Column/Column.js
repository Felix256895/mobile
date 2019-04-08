import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './column.less';

class Column extends Component {
    render() {
        const { subTitle,content }=this.props;
        return (
            <li className={styles.columnBox}>
                <Link to='/home'>
                    <div className={styles.itemImg}>
                        <img src={require('../../assets/images/html.png')} alt="图片"/>
                    </div>
                    <div className={styles.introduce}>
                        <h4>{subTitle}</h4>
                        <p>{content}</p>
                    </div>
                    <div className={styles.rightArrow}>
                        <img src={require('../../assets/images/progress.svg')} alt=""/>
                    </div>
                </Link>
            </li>
        );
    }
}

export default Column;