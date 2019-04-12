import React, { Component } from "react";
import { is, fromJS} from 'immutable';
import NavHeader from "@/components/navHeader/navHeader";
import styles from './helpcenter.less';

class helpcenter extends Component {

    shouldComponentUpdate(nextProps,nextState){
        return !is(fromJS(this.props),fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState));
    }

  render() {
    return (
      <main>
        <NavHeader title="帮助中心" record />
        <article className={styles.context}>
          <h2>介绍</h2>
          <p>
            本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux
            之间的配合方式
          </p>
          <h2>技术要点</h2>
          <p>react：v16.7</p>
          <p>redux：v6.0</p>
          <p>webpack：v4.19.1</p>
          <p>react-router-dom：v4.3.1</p>
          <p>ES 6/7/8</p>
          <p>code split</p>
          <p>hot loader</p>
          <p>axios：v0.18</p>
          <p>less：v3.9</p>
          <p>immutable：v4.0</p>
          <p>
            项目地址{" "}
            <a href="https://github.com/clear-source/mobile/tree/master/mobile_02" target="_blank">github</a>
          </p>
        </article>
      </main>
    );
  }
}

export default helpcenter;
