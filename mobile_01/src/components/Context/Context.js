import React, { Component } from "react";
import Column from '../Column/Column';
import styles from "./context.less";

class Context extends Component {
  render() {
      const {title,context}=this.props;
    return (
      <div className={styles.context}>
        <h3>{title}</h3>
        <ul className={styles.text}>
            {
                context.map((value,key)=><Column key={key} {...value} />)
            }
        </ul>
      </div>
    );
  }
}

export default Context;
