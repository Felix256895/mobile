import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';
class LikeItem extends Component {
    render() {
        const {tag,shop,picture,product,currentPrice,oldPrice,saleDesc} = this.props.data;
        return (
            <Link to='detail' className={styles.likeItem}>
                <div className={styles.likeItem__picContainer}>
                    <div className={styles.likeItem__picTag}>{tag}</div>
                    <img src={picture} className={styles.likeItem__pic} alt=""/>
                </div>
                <div className={styles.likeItem__content}>
                    <div className={styles.likeItem__shop}>{shop}</div>
                    <div className={styles.likeItem__product}>{product}</div>
                    <div className={styles.likeItem__detail}>
                        <div className={styles.likeItem__price}>
                            <ins className={styles.likeItem__currentPrice}>{currentPrice}</ins>
                            <del className={styles.likeItem__oldPrice}>{oldPrice}</del>
                        </div>
                        <div className={styles.likeItem__sale}>{saleDesc}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default LikeItem;