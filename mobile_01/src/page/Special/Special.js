import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './special.less';


const data=[
    {
        id:1,
        title:'Python微课，当下最热门后端语言',
        content:'数据采集，大数据分析，AI技术智能化等等必学python...',
        time:'2019-03-27 13:49:43',
        image:'',
    },
    {
        id:2,
        title:'Python微课，当下最热门后端语言',
        content:'数据采集，大数据分析，AI技术智能化等等必学python...',
        time:'2019-03-27 13:49:43',
        image:'',
    },
    {
        id:3,
        title:'Python微课，当下最热门后端语言',
        content:'数据采集，大数据分析，AI技术智能化等等必学python...',
        time:'2019-03-27 13:49:43',
        image:'',
    },
];

class Special extends Component {
    render() {
        return (
            <div className={styles.special}>
                <ul className={styles.specialNav}>
                    <li>
                        <Link to='/special'>官方推荐</Link>
                    </li>
                    <li>
                        <Link to='/special'>前端开发</Link>
                    </li>
                    <li>
                        <Link to='/special'>客户端开发</Link>
                    </li>
                    <li>
                        <Link to='/special'>移动端开发</Link>
                    </li>
                    <li>
                        <Link to='/special'>数据库</Link>
                    </li>
                </ul>
                <div className={styles.context}>
                    <ul className={styles.contextSub}>
                        {
                            data.map((v,k)=>{
                                return (
                                    <li key={k}>
                                        <Link to="/special"  >
                                            <div className={styles.subLeft}>
                                                <h2>{v.title}</h2>
                                                <p>{v.content}</p>
                                                <p>{v.time}</p>
                                            </div>
                                            <div className={styles.subRight}>
                                                <img src={require('../../assets/images/vip.png')} alt=""/>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Special;