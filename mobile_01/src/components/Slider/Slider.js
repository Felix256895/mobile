import React, { Component } from "react";
import Slider from "react-slick";

import Prerogative from "./Prerogative";

import './slider.less';

const data=[
    {
        fid:1,
        title:'高级VIP特权',
        price:'298',
        content:[
            {
                id:1,
                subTitle:'VIP课程、高级VIP课程',
                info:'全部免费',
                image:'',
            },
            {
                id:2,
                subTitle:'VIP编程实战训练',
                info:'全部免费',
                image:'',
            },
            {
                id:3,
                subTitle:'VIP编程实战证书',
                info:'3张',
                image:'',
            },
            {
                id:4,
                subTitle:'VIP编程题库专享',
                info:'200套',
                image:'',
            },
            {
                id:5,
                subTitle:'PC客户端离线教程下载',
                info:'100本',
                image:'',
            },
            {
                id:6,
                subTitle:'APP离线教程下载',
                info:'100本',
                image:'',
            },
            {
                id:7,
                subTitle:'VIP专享价课程',
                info:'√',
                image:'',
            },
            {
                id:8,
                subTitle:'手册创建',
                info:'30本',
                image:'',
            },
            {
                id:9,
                subTitle:'经验值加倍',
                info:'2倍',
                image:'',
            },
            {
                id:10,
                subTitle:'尊享高级VIP标识',
                info:'√',
                image:'',
            },
            {
                id:11,
                subTitle:'专享礼券福利',
                info:'√',
                image:'',
            },
        ]
    },
    {
        fid:2,
        title:'标准VIP特权',
        price:'198',
        content:[
            {
                id:1,
                subTitle:'VIP课程、高级VIP课程',
                info:'全部免费',
                image:'',
            },
            {
                id:2,
                subTitle:'VIP编程实战训练',
                info:'全部免费',
                image:'',
            },
            {
                id:3,
                subTitle:'VIP编程实战证书',
                info:'3张',
                image:'',
            },
            {
                id:4,
                subTitle:'VIP编程题库专享',
                info:'200套',
                image:'',
            },
            {
                id:5,
                subTitle:'PC客户端离线教程下载',
                info:'100本',
                image:'',
            },
            {
                id:6,
                subTitle:'APP离线教程下载',
                info:'100本',
                image:'',
            },
            {
                id:7,
                subTitle:'VIP专享价课程',
                info:'√',
                image:'',
            },
            {
                id:8,
                subTitle:'手册创建',
                info:'30本',
                image:'',
            },
            {
                id:9,
                subTitle:'经验值加倍',
                info:'2倍',
                image:'',
            },
            {
                id:10,
                subTitle:'尊享高级VIP标识',
                info:'√',
                image:'',
            },
            {
                id:11,
                subTitle:'专享礼券福利',
                info:'√',
                image:'',
            },
        ]
    }
]


export default class Responsive extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };
    return (
      <div>
        <Slider {...settings}>
          {
              data.map((v,k)=>(<Prerogative key={k} {...v} />))
          }
          
        </Slider>
      </div>
    );
  }
}