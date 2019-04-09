import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavHeader from '@/components/navHeader/navHeader';
import TouchEvent from '@/components/touchEvent/touchEvent';
import Alert from '@/components/alert/alert';
import styles from './home.less';

class home extends Component {
    constructor(props){
        super(props);
        this.state={
            selectList:[],
            alertStatus:false,
            alertConttext:'',
        }
    }

    //提交
    submitForm=()=>{
        this.setState({
            alertStatus:true,
            alertConttext:'请输入订单金额'
        })
    }
    //关闭弹窗
    closeAlert=()=>{
        this.setState({
            alertStatus:false,
            alertConttext:''
        })
    }
    render() {
        return (
            <main className={styles.home_container} >
                <NavHeader title='首页' record />
                <p className={styles.common_title}>请输入您的信息</p>
                <form className={styles.home_form} >
                    <div className={styles.home_form_item}>
                        <label>销售金额：</label>
                        <input type="text" placeholder='请输入订单金额' />
                    </div>
                    <div className={styles.home_form_item}>
                        <label>客户名称：</label>
                        <input type="text" placeholder='请输入客户名称' />
                    </div>
                    <div className={styles.home_form_item}>
                        <label>客户电话：</label>
                        <input type="text" maxLength='13' placeholder='请输入客户电话' />
                    </div>
                </form>
                <div>
                    <p className={styles.common_title}>请选择销售产品</p>
                    <Link to='/production' className={styles.common_select_btn} >
                        {
                            this.state.selectList.length ? <ul className={styles.select_list}>
                                {
                                    this.state.selectList.map((value,index)=>(
                                        <li key={index} className={styles.select_item}>{value.product_name}X{value.productNum}</li>
                                    ))
                                }
                            </ul> : '选择产品'
                        }
                    </Link>
                </div>
                <div className={styles.upload_img}>
                    <p className={styles.common_title}>请上传发票凭证</p>
                    <div className={styles.file_label}>
                        <span className={styles.common_select_btn}>上传图片</span>
                        <input type="file" />
                    </div>
                    <img src="" className={styles.select_img} alt=""/>
                </div>
                <TouchEvent text='提交' clickCallBack={this.submitForm} />
                <Alert closeAlert={this.closeAlert} {...this.state} />
            </main>
        );
    }
}

export default home;