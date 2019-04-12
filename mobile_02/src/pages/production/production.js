import React, { Component } from "react";
import { is, fromJS } from "immutable";
import { connect } from "react-redux";
import { getProData, togSelectPro, editPro } from "@/store/production/action";
import NavHeader from "@/components/navHeader/navHeader";

import styles from "./production.less";

class production extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //商品是否选中
  togSelect = key => {
    this.props.togSelectPro(key);
  };
  //编辑商品数量
  handleEdit = (index, num) => {
    let currenNum = this.props.proData.dataList[index].selectNum + num;
    if (currenNum < 0) return;
    this.props.editPro(index, currenNum);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }
  //获取数据
  componentDidMount() {
    if (!this.props.proData.dataList.length) {
      this.props.getProData();
    }
  }
  render() {
    const { dataList } = this.props.proData;
    return (
      <main>
        <NavHeader title="首页" confirm />
        <section className={styles.pro_list_con}>
          <ul className={styles.pro_list_ul}>
            {dataList.map((item, index) => {
              return (
                <li className={styles.pro_item} key={index}>
                  <div
                    className={styles.pro_item_select}
                    onClick={this.togSelect.bind(this, index)}
                  >
                    <span
                      className={
                        item.selectStatus
                          ? styles.select_true
                          : styles.select_false
                      }
                    />
                    <span className={styles.pro_name}>{item.product_name}</span>
                  </div>
                  <div className={styles.pro_item_edit}>
                    <span
                      onClick={this.handleEdit.bind(this,index,-1)}
                      className={
                        item.selectNum > 0
                          ? styles.pro_subtract
                          : styles.pro_defalut
                      }
                    />
                    <span className={styles.pro_num}>{item.selectNum}</span>
                    <span className={styles.pro_add} onClick={this.handleEdit.bind(this,index,1)} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    );
  }
}

export default connect(
  state => ({
    proData: state.proData
  }),
  {
    getProData,
    togSelectPro,
    editPro
  }
)(production);
