import React, { Component } from 'react';

import styles from './prerogative.less';

class Prerogative extends Component {
    render() {
        const {title,price,content}=this.props;
        return (
            <div >
                <div className={styles.prerogative}>
                    <h1>{title}</h1>
                    <ul className={styles.itemBox}>
                        {
                            content.map((value,key)=>{
                                return (
                                    <li className={styles.item} key={key}>
                                        <div >
                                            <img src={require("../../assets/images/vip-coupon.png")} alt=""/>
                                            <span>{value.subTitle}</span>
                                        </div>
                                        <div className={styles.itemRight} >{value.info}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h1>{price}<span>元/年</span></h1>
                </div>
            </div>
        );
    }
}

export default Prerogative;