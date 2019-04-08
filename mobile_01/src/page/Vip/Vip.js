import React, { Component } from "react";
import { Link } from "react-router-dom";

import SimpleSlider from "../../components/Slider/Slider";
import styles from "./vip.less";

class Member extends Component {
  render() {
    return (
      <div className={styles.vip}>
        <div className={styles.vipSection}>
          <div className={styles.vipInfo}>
            <div className={styles.vipBanner}>
              <Link to="/login">
                <div className={styles.avatar}>
                  <img
                    src={require("../../assets/images/avatar.png")}
                    alt="头像"
                  />
                </div>
                <div className={styles.status}>
                  <p>未登录</p>
                  <p>点击头像登录 ></p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.vipBoon}>
            <h1 className={styles.title}>开通VIP，尊享三大超值特权</h1>
            <div className={styles.category}>
              <div>
                <img src={require("../../assets/images/vip-priv.png")} alt="" />
                <p>会员福利</p>
              </div>
              <div>
                <img
                  src={require("../../assets/images/vip-course.png")}
                  alt=""
                />
                <p>课程福利</p>
              </div>
              <div>
                <img
                  src={require("../../assets/images/vip-coupon.png")}
                  alt=""
                />
                <p>礼券福利</p>
              </div>
            </div>
            <div className={styles.vipOpen}>
              <Link to="/vip">
                开通VIP低至 <i /> 0.82元/天
              </Link>
              <p>每天花点小钱，好好学~</p>
            </div>
          </div>
        </div>
        <div className={styles.vipModule}>
          <h1 className={styles.title}>VIP特权介绍</h1>
          <SimpleSlider />
        </div>
        <div className={styles.vipModule}>
          <h1 className={styles.title}>VIP课程畅享</h1>
          <ul className={styles.vipEnjoy}>
            <li>
              <div>课程名称</div>
              <div>高级VIP免费</div>
              <div>标准VIP免费</div>
            </li>
            <li>
              <div>
                <p>HTML微课</p>
                <p>19.9元</p>
              </div>
              <div>
                <img src={require("../../assets/images/success.png")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/images/error.png")} alt="" />
              </div>
            </li>
            <li>
              <div>
                <p>PHP微课</p>
                <p>19.9元</p>
              </div>
              <div>
                <img src={require("../../assets/images/success.png")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/images/error.png")} alt="" />
              </div>
            </li>
            <li>
              <div>
                <p>CSS微课</p>
                <p>19.9元</p>
              </div>
              <div>
                <img src={require("../../assets/images/success.png")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/images/error.png")} alt="" />
              </div>
            </li>
            <li>
              <div>
                <p>jQuery微课</p>
                <p>19.9元</p>
              </div>
              <div>
                <img src={require("../../assets/images/success.png")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/images/error.png")} alt="" />
              </div>
            </li>
            <li>
              <div>
                <p>Javascript微课</p>
                <p>19.9元</p>
              </div>
              <div>
                <img src={require("../../assets/images/success.png")} alt="" />
              </div>
              <div>
                <img src={require("../../assets/images/error.png")} alt="" />
              </div>
            </li>
          </ul>
          <div className={styles.text}>会员免费课程不断更新添加中~</div>
        </div>
        <div className={styles.vipModule}>
          <h1 className={styles.title}>VIP礼券专享</h1>
          <div className={styles.prompt}>
            为了感谢您对我们的支持和认可，我们额外再赠送您以下礼券，用于购买非VIP课程。
          </div>
          <ul>
            <li className={styles.ticket}>
              <div className={styles.ticketLeft}>
                <div>高级VIP专享礼券礼包</div>
                <div className={styles.price}>
                  <div>
                    ¥<span>100</span>
                  </div>
                  <div>
                    <p>5元 x 10张</p>
                    <p>10元 x 5张</p>
                  </div>
                </div>
              </div>
              <div className={styles.ticketRight}>
                <span>专享礼券</span>
              </div>
            </li>
            <li className={styles.ticket}>
              <div className={styles.ticketLeft}>
                <div>高级VIP专享礼券礼包</div>
                <div className={styles.price}>
                  <div>
                    ¥<span>100</span>
                  </div>
                  <div>
                    <p>5元 x 10张</p>
                    <p>10元 x 5张</p>
                  </div>
                </div>
              </div>
              <div className={styles.ticketRight}>
                <span>专享礼券</span>
              </div>
            </li>
          </ul>
          <div>温馨提示：VIP购买成功后，赠送的礼券将自动发放到您的w3cschool账户中，请到“我的礼券”中查看。</div>
        </div>
        <div className={styles.vipModule}>
            <h1 className={styles.title}>会员开通享优惠</h1>
            <div className={styles.prompt} style={{textAlign:'center'}}>一处开通，多端享用(APP/网站/客户端)</div>
            <div className={styles.privBox}>
                <ul>
                    <li>
                        <span>高级VIP特权</span>
                        <span>价值298元</span>
                    </li>
                    <li>
                        <span>高级VIP特权</span>
                        <span>价值298元</span>
                    </li>
                    <li>
                        <span>高级VIP特权</span>
                        <span>价值298元</span>
                    </li>
                    <li>
                        <span>高级VIP特权</span>
                        <span>价值298元</span>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
        <div className={styles.vipFooter}>
          <Link to="/vip">立即开通VIP</Link>
        </div>
      </div>
    );
  }
}

export default Member;
