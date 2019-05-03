<template>
    <div class="my" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            backgroundColor='#ff6e01'
            leftIcon='icon-yo-xiang'
            color='#fff'
            rightIcon='icon-she-zhi'
            title='我的'
            ></nav-tab>
        <div class="my-header">
            <div class="upload" @click="upload">
                <i class="icon-my icon-font "></i>
            </div>
            <router-link to='/login' class="login" >登录 / 注册</router-link>
        </div>
        <div class="my-order" @click='handleOrder'>
            <span>我的购药订单</span>
            <a >
                查看全部订单
                <i class="icon-y-j-t icon-font"></i>
            </a>
        </div>
        <ul class="my-order-list"  >
            <li class="my-order-item" v-for="(item,index) in list" :key="index" >
                <p :class="item.icon+' icon-font'" ></p>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <div class="my-content-item">
            <list-component 
                v-for="(item,index) in infos" 
                :key="index"
                :img="item.img"
                :solid="item.flag"
                :title="item.name"
                v-on:incre="handlePath(item.path)"
                ></list-component>
        </div>
        <div class="my-content-item">
            <list-component 
                v-for="(item,index) in familys" 
                :key="index"
                :img="item.img"
                :solid="item.flag"
                :title="item.name"
                v-on:incre="handlePath(item.path)"
                ></list-component>
        </div>
        <div class="my-content-item my-bottom">
            <list-component 
                v-for="(item,index) in others" 
                :key="index"
                :img="item.img"
                :solid="item.flag"
                :title="item.name"
                v-on:incre="handlePath(item.path)"
                ></list-component>
        </div>
        <tab-bar subscript='2'></tab-bar>
    </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import NavTab from "@/components/NavTab";
import ListComponent from "@/components/ListComponent";
import { Toast } from 'mint-ui';
// 请求api 封装请求
import Utils from '@/utils';             //公共方法
import Constant from '@/api';            //加载API 模块
const { API_URL } = Constant;            //API 地址

export default {
    components:{
        TabBar,
        NavTab,
        ListComponent
    },
    data:()=>({
        wrapperHeight: 0,  // 页面总高
        list:[
                {
                    icon:'icon-dai-fu-kuai',
                    to:'/order',
                    name:'待付款',
                    ts:false
                },
                {
                    icon:'icon-dai-fa-huo',
                    to:'/order',
                    name:'待发货',
                    ts:false
                },
                {
                    icon:'icon-dai-sho-huo',
                    to:'/order',
                    name:'待收货',
                    ts:false
                },
                {
                    icon:'icon-ping-jia-1',
                    to:'/order',
                    name:'待评价',
                    ts:false
                },
            ],
        infos:[
            {
                img:'gold',
                path:'/my/bangbang',
                name:'我的邦邦币',
                flag:true,
            },
            {
                img:'money',
                path:'/my/money',
                name:'我的钱包',
                flag:true,
            },
            {
                img:'coupon',
                path:'/my/coupon',
                name:'优惠券',
                flag:true,
            },
            {
                img:'collection',
                path:'/my/collection',
                name:'我的收藏',
                flag:false,
            },
        ],
        familys:[
            {
                img:'data',
                path:'/my/health',
                name:'我的健康资料',
                flag:true,
            },
            {
                img:'member',
                path:'/my/member',
                name:'我的家庭成员',
                flag:false,
            },
        ],
        others:[
            {
                img:'address',
                path:'/my/address',
                name:'收货地址管理',
                flag:true,
            },
            {
                img:'server',
                path:'/my/server',
                name:'联系客服',
                flag:true,
            },
        ],
    }),
    watch:{

    },
    created(){

    },
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
   
   },
    methods:{
        upload(){

        },
        handleOrder(){
            this.$router.push({
                path: '/order'
            });
        },
        handlePath(e){
            console.log(e)
            // this.$router.push({
            //     path: '/order'
            // });
        }
    },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"            
    .my
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background $color-background

        .my-header
            width 100%
            height 240px
            display flex
            background #ff6e01
            padding-top 110px
            box-sizing border-box
            align-items center
            .icon-font
                font-size 47px
                display inline-block
            .login
                font-size 30px
                color #fff
                margin-left $font-size-25
            .upload
                width 70px
                height 70px
                margin-left $font-size-15
                border-radius 50%
                border 1PX solid #fff
                display flex
                align-items center
                justify-content center
                background #FFA07A
                .icon-font
                    color #fff;
        .my-order
            display flex
            justify-content space-between
            height 80px
            border-bottom 1PX solid #ddd
            align-items center
            padding 0 $font-size-15
            background $color-text-ffffff
            .icon-font
                display inline-block
                font-size $font-size-12
        .my-order-list
            height 120px
            display flex
            align-items center
            background $color-text-ffffff
            .my-order-item
                flex 1
                text-align center
                align-self center
                .icon-font
                    font-size 40px
                    margin-bottom 15px
                    color #7e8c8d
        .my-content-item
            margin-top 20px
            background $color-text-ffffff
        .my-bottom
            padding-bottom 20px

</style>
