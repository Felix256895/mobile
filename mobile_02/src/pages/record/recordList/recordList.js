import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "@/api/api";
import Loading from '@/components/loading/loading';
import styles from "./recordList.less";


class recordList extends Component {
  constructor(props){
    super(props);
    this.state = {
      recordData: [
        {"sales_id":527,"register_user_id":385,"sales_money":12,"customers_name":"测试1111","customers_phone":"12313123131","product":[{"product_id":2,"product_name":"PaiPad（2G/32G)","quantity":"1"},{"product_id":3,"product_name":"PaiBand","quantity":"1"}],"invoice":"[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/af7514e555dd525bac5000b0dfb5a5f57b99c2c3.jpg\"]","product_price":2298,"commission":130,"is_closed":"OPEN","type":"UNAUDIT","content":null,"created_at":"2017.01.10 20:43:22","type_name":"已通过"},
        {"sales_id":526,"register_user_id":385,"sales_money":12,"customers_name":"测试2222","customers_phone":"12313131123","product":[{"product_id":1,"product_name":"PaiBot（2G/32G)","quantity":"1"},{"product_id":2,"product_name":"PaiPad（2G/32G)","quantity":"1"}],"invoice":"[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/d52a7c73676a1f5e4cb8015544cf6404f4923eee.jpg\"]","product_price":4998,"commission":300,"is_closed":"OPEN","type":"UNAUDIT","content":null,"created_at":"2017.01.10 20:42:46","type_name":"已通过"},
        {"sales_id":525,"register_user_id":385,"sales_money":12,"customers_name":"cangdu","customers_phone":"12131232131","product":[{"product_id":1,"product_name":"PaiBot（2G/32G)","quantity":"1"}],"invoice":"[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/fa2b435d3dca0cb43d82790777121648377f418c.jpg\"]","product_price":2999,"commission":200,"is_closed":"OPEN","type":"UNAUDIT","content":null,"created_at":"2017.01.10 20:42:05","type_name":"已通过"},
        {"sales_id":527,"register_user_id":385,"sales_money":12,"customers_name":"测试1111","customers_phone":"12313123131","product":[{"product_id":2,"product_name":"PaiPad（2G/32G)","quantity":"1"},{"product_id":3,"product_name":"PaiBand","quantity":"1"}],"invoice":"[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/af7514e555dd525bac5000b0dfb5a5f57b99c2c3.jpg\"]","product_price":2298,"commission":130,"is_closed":"OPEN","type":"UNAUDIT","content":null,"created_at":"2017.01.10 20:43:22","type_name":"已通过"},
        {"sales_id":526,"register_user_id":385,"sales_money":12,"customers_name":"测试2222","customers_phone":"12313131123","product":[{"product_id":1,"product_name":"PaiBot（2G/32G)","quantity":"1"},{"product_id":2,"product_name":"PaiPad（2G/32G)","quantity":"1"}],"invoice":"[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/d52a7c73676a1f5e4cb8015544cf6404f4923eee.jpg\"]","product_price":4998,"commission":300,"is_closed":"OPEN","type":"UNAUDIT","content":null,"created_at":"2017.01.10 20:42:46","type_name":"已通过"},
        {"sales_id":525,"register_user_id":385,"sales_money":12,"customers_name":"cangdu","customers_phone":"12131232131","product":[{"product_id":1,"product_name":"PaiBot（2G/32G)","quantity":"1"}],"invoice":"[\"http:\\/\\/mall.file.putaocdn.com\\/file\\/fa2b435d3dca0cb43d82790777121648377f418c.jpg\"]","product_price":2999,"commission":200,"is_closed":"OPEN","type":"UNAUDIT","content":null,"created_at":"2017.01.10 20:42:05","type_name":"已通过"}
      ],
      loadTimes:0,
    };
    this.removeListener=false;
    this.myRef=React.createRef();
  }
  //获取数据
  getRecord = async type => {
    try {
      let result = await API.getRecord({ type });
      const newData=this.state.recordData.concat(result.data);
      const newLoadTimes=this.state.loadTimes+1;
        this.setState({ 
          recordData: newData,
          loadTimes:newLoadTimes,
         });
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
    // let type = this.props.location.pathname.split("/")[2];
    // this.getRecord(type);
  }
  componentDidMount(){
    document.addEventListener('scroll',this.handleScroll);
  }
  componentWillUnmount(){
    if(!this.removeListener){
      document.removeEventListener('scroll',this.handleScroll);
    }
  }
  componentDidUpdate(){
    if(this.state.loadTimes>=3&&!this.removeListener){
      document.removeEventListener('scroll',this.handleScroll);
      this.removeListener=true;
    }
  }
  handleScroll=()=>{
    const scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//获取滚动条高度
    const screenHeight=document.documentElement.clientHeight||document.body.clientHeight; //获取屏幕高度
    const listTop=this.myRef.current.offsetTop; //获取当前内容未显示高度
    const listHeight=this.myRef.current.offsetHeight;//获取当前内容所有高度
    //判断下拉加载刷新 滚动条高度
    if(scrollTop>=listHeight+listTop-screenHeight){
      let type = this.props.location.pathname.split("/")[2];
      this.getRecord(type);
    }
  }
  render() {
    const {recordData,loadTimes}=this.state;
    return (
        <div ref={this.myRef}>
            <ul className={styles.record_list} >
            {
                recordData.map((item,index)=>{
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
          <div className={styles.loading} >
            {
              loadTimes<3?(<Loading />):( <a className={styles.addLoading}>没有更多数据加载了</a>)
            }
          </div>
        </div>
    );
  }
}

export default recordList;
