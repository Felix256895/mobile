import React, { Component } from "react";
import { NavLink ,Switch,Redirect,Route} from "react-router-dom";
import { is, fromJS} from 'immutable';
import NavHeader from "@/components/navHeader/navHeader";
import RecordList from './recordList/recordList';
import styles from "./record.less";

class record extends Component {
  state = {
    flagBar: "17%"
  };

  /**
   * 设置头部底部标签位置
   * @param  {string} type 数据类型
   */
  setFlagBar = type => {
    let flagBar;
    switch (type) {
      case "passed":
        flagBar = "17%";
        break;
      case "audited":
        flagBar = "50%";
        break;
      case "failed":
        flagBar = "83%";
        break;
      default:
        flagBar = "17%";
    }
    this.setState({ flagBar });
  };

  componentWillReceiveProps(nextProps) {
    let currenType = this.props.location.pathname.split("/")[2];
    let type = nextProps.location.pathname.split("/")[2];
    if (currenType !== type) {
      this.setFlagBar(type);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  componentWillMount() {
    // 初始化设置头部底部标签位置
    let type = this.props.location.pathname.split("/")[2];
    this.setFlagBar(type);
  }

  render() {
    const { path } = this.props.match;
    console.log(path);
    return (
      <main className={styles.record_container}>
        <NavHeader title="记录" />
        <section className={styles.record_section}>
          <nav className={styles.record_nav}>
            <NavLink to={`${path}/passed`} className={styles.nav_link}>
              已通过
            </NavLink>
            <NavLink to={`${path}/audited`} className={styles.nav_link}>
              待审核
            </NavLink>
            <NavLink to={`${path}/failed`} className={styles.nav_link}>
              未通过
            </NavLink>
          </nav>
          <i
            className={styles.nav_flag_bar}
            style={{ left: this.state.flagBar }}
          />
        </section>
        <Switch>
            <Route path={`${path}/:type`} component={RecordList} />
            <Redirect from={path} to={`${path}/passed`} exact component={RecordList} />
        </Switch>
      </main>
    );
  }
}

export default record;
