import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import NavHeader from '@/components/navHeader/navHeader';
import TouchEvent from '@/components/touchEvent/touchEvent';
import Alert from '@/components/alert/alert';
import styles from './balance.less';

class balance extends Component {
    constructor(props){
        super(props);
        this.state={
            alertStatus:false,
            alertContext:'',
            money:'',
            balance:60,
        }
    }

    /**
   * 格式化输入数据
   * 格式为微信红包格式：最大 200.00
   * @param  {object} event 事件对象
   */
    handleInput=(e)=>{
        let money=e.target.value;
        if((/^\d*?\.?\d{0,2}?$/gi).test(money)){
            if((/^0+[1-9]+/).test(money)) {
                money = money.replace(/^0+/,'');
            }
            if((/^0{2}\./).test(money)) {
                money = money.replace(/^0+/,'0');
            }
            money = money.replace(/^\./gi,'0.');
            if(parseFloat(money) > 200){
                money = '200.00';
            }
            this.setState({money});
        }
    }
    /**
     *提交
     *
     * @memberof balance
     */
    submitForm=()=>{
        let alertContext;
        if(!this.state.money){
            alertContext='请输入提现现金额';
        }else if(parseFloat(this.state.money)>this.state.balance){
            alertContext='申请提现金额不能大于余额';
        }else{
            alertContext='申请提现成功';
        }
        this.setState({
            alertStatus:true,
            alertContext,
            money:'',
        })
    }

    //关闭弹窗
    closeAlert=()=>{
        this.setState({
            alertStatus:false,
            alertContext:''
        })
    }

    shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState));
    }

    render() {
        return (
            <main className={styles.balance_container}>
                <NavHeader title='提现' record/>
                <section className={styles.balance_content}>
                    <p className={styles.balance_header}>您的可提现现金为：¥ {this.state.balance}</p>
                    <form className={styles.balance_form} >
                        <p>请输入提现金额（元）</p>
                        <p>¥ <input type="text" value={this.state.money} onChange={this.handleInput} placeholder='0.00' maxLength='5' /></p>
                    </form>
                    <TouchEvent text='申请提现' clickCallBack={this.submitForm} />
                </section>
                <Alert closeAlert={this.closeAlert}  {...this.state} />
            </main>
        );
    }
}

export default balance;