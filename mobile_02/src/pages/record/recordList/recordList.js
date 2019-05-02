import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "@/api/api";
import styles from "./recordList.less";

class recordList extends Component {
  state = {
    recordData: []
  };
  //获取数据
  getRecord = async type => {
    try {
      let result = await API.getRecord({ type });
      this.setState({ recordData: result.data || [] });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  componentWillReceiveProps(nextProps) {
    let currenType = this.props.location.pathname.split("/")[2];
    let type = nextProps.location.pathname.split("/")[2];
    if (currenType !== type) {
      this.getRecord(type);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }
  componentWillMount() {
    let type = this.props.location.pathname.split("/")[2];
    this.getRecord(type);
  }

  render() {
    return (
      <div>
        <ul className={styles.record_list}>
          {
              this.state.recordData.map((item,index)=>{
                  return (
                    <li className={styles.record_item} key={index}>
                        <section className={styles.record_item_header}>
                        <span>创建时间：{item.created_at}</span>
                        <span>{item.type_name}</span>
                        </section>
                        <section className={styles.record_item_content}>
                        <p>
                            <span>用户名：</span> {item.customers_name} &emsp; {item.customers_phone}
                        </p>
                        <p>
                            <span>商&emsp;品</span>{item.product.product_name}
                        </p>
                        <p>
                            <span>金&emsp;额：</span>{item.sales_money} &emsp; 佣金：{item.commission}
                        </p>
                        </section>
                        <p className={styles.record_item_footer}>
                        等待管理员审核，审核通过后，佣金将结算至账户
                        </p>
                  </li>
                  )
              })
          }
        </ul>
      </div>
    );
  }
}

export default recordList;
