import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {asideFalse } from '@/redux/actions';
import styles from './style.less';

const mapStateToProps = (state) => {
    return {
        aside: state.aside
    }
}
@connect(mapStateToProps,{asideFalse})
class Aside extends Component {
    handleTouchMove=()=>{
        this.props.asideFalse();
    }
    render() {
        const { aside }=this.props;
        return (
            <aside onTouchMove={this.handleTouchMove}
             className={aside?classnames(styles.aside,styles.aside__show):classnames(styles.aside)}>
                <ul className={styles.aside__slidebar}>
                    <li className={styles.aside__slidebar__item}>
                        <NavLink to='/main' >文章目录</NavLink>
                    </li>
                    <li className={styles.aside__slidebar__item}>
                        <NavLink to='/blog' >博客</NavLink>
                    </li>
                    <li className={styles.aside__slidebar__item}>
                        <a href='https://github.com/clear-source' target='_blank' rel="nofollow noopener noreferrer">github</a>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Aside;

