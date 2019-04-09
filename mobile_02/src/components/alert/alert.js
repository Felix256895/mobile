import React, { Component } from 'react';
import { is, fromJS } from 'immutable';

import styles from './alert.less';

class alert extends Component {

    handleConfirm=()=>{
        this.props.closeAlert();
    }

    shouldComponentUpdate(nextPorps,nextState){
        return !is(fromJS(this.props),fromJS(nextPorps)) || !is(fromJS(this.state),fromJS(nextState));
    }

    render() {
        const {alertStatus, alertConttext,} = this.props;
        return (
            <div>
                {alertStatus && <div className={styles.alert_container}>
                    <div className={styles.alert_context}>
                        <div className={styles.context_item}>{alertConttext}</div>
                        <a className={styles.alert_btn} onTouchEnd={this.handleConfirm}>确认</a>
                    </div>
                </div>}
            </div>
        );
    }
}

export default alert;