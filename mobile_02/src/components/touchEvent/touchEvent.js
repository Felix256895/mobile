import React, { Component } from 'react';
import {is,fromJS} from 'immutable';
import styles from './touchEven.less';

class touchEvent extends Component {

    handleStart=()=>{
        this.refs.btn.style.opacity='0.3';
    }

    handleEnd=()=>{
        this.refs.btn.style.opacity='1';
        this.props.clickCallBack();
    }
    shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState));
    }

    render() {
        return (
            <button className={styles.btn} onTouchStart={this.handleStart} onTouchEnd={this.handleEnd} ref='btn'>{this.props.text||'确认'}</button>
        );
    }
}

export default touchEvent;