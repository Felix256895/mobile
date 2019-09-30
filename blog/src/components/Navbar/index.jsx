import React, { Component } from 'react';
import { Link,NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { asideTrue,asideFalse } from '@/redux/actions';
import styles from './style.less';

const mapStateToProps = (state) => {
    return {
        aside: state.aside
    }
}
@connect(mapStateToProps,{asideTrue,asideFalse})
class Navbar extends Component {
    handleClickSlider=()=>{
        const { asideTrue, asideFalse,aside} =this.props;
        aside && asideFalse();
        !aside && asideTrue();
    }
    render() {
        return (
            <header className={styles.navbar}>
                <div className={styles.navbae__slider} onClick={this.handleClickSlider}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" className={styles.icon}><path fill="currentColor" 
                    d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z">
                    </path></svg>
                </div>
                <Link to='/' className={styles.navbar__left}>clearSource</Link>
                <div className={styles.navbar__right} style={{maxWidth:'1700px'}}>
                    <div className={styles.navbar__input}>
                        <input type="text"  autoComplete='off' spellCheck='false' />
                    </div>
                    <ul className={styles.navbar__link}>
                        <li className={styles.navbar__link__item}>
                            <NavLink to='/main' >文章目录</NavLink>
                        </li>
                        <li className={styles.navbar__link__item}>
                            <NavLink to='/blog' >博客</NavLink>
                        </li>
                        <li className={styles.navbar__link__item}>
                            <a href='https://github.com/clear-source' target='_blank' rel="nofollow noopener noreferrer">github</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navbar;