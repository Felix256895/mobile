<template>
    <div class="trolley" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            backgroundColor='#ff6e01'
            color='#fff'
            title='需求清单'
            ></nav-tab>
            <section class="trolley-main">
                <div class="trolley-cart">
                    <div class="trolley-cart-default">
                        <van-checkbox class="checkbox-default" checked-color="#ff6e01" v-model="checked">默认处方包</van-checkbox>
                        <div class="trolley-count">
                            <button class="count-info">-</button>
                            <span class="count-info count-text">1</span>
                            <button class="count-info">+</button>
                        </div>
                        <span  class="icon-shang-jian-to icon-font"></span>
                    </div>
                    <my-carts></my-carts>
                </div>
                <div class="trolley-popular">
                    <div class="trolley-popular-title">
                        <i class="title-left"></i>
                        <b class="diamond-icon"></b>
                        <span>热门推荐</span>
                        <b class="diamond-icon"></b>
                        <i class="title-right"></i>
                    </div>
                    <my-list />
                </div>
            </section>
            <my-footer></my-footer>
        <tab-bar subscript='1'></tab-bar>
    </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import NavTab from "@/components/NavTab";
import MyCarts from "./components/myCarts";
import MyList from "./components/myList";
import MyFooter from "./components/myFooter";
import { Checkbox, CheckboxGroup } from 'vant';
import { Toast } from 'mint-ui';
// 请求api 封装请求
import Utils from '@/utils';             //公共方法
import Constant from '@/api';            //加载API 模块
const { API_URL } = Constant;            //API 地址

export default {
    components:{
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup,
        TabBar,
        NavTab,
        MyList,
        MyCarts,
        MyFooter,
    },
    data:()=>({
        wrapperHeight: 0,  // 页面总高
        checked:true,
        
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


    },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"            
    .trolley
        width 100%
        box-sizing border-box
        height 100%
        overflow-y scroll
        background $color-background
        -webkit-overflow-scrolling touch 
        &::-webkit-scrollbar 
            display none
        &::-moz-scrollbar 
            display none 
        &::-ms-scrollbar 
            display none  
        .icon-font
            display flex
            padding-right 20px
            font-size 40px
            color $color-text-B0B0B0
        .count-info
            width 65px
            height 50px
            border none 
            text-align center
            line-height 50px
            background $color-background
            padding 0
            font-size 35px
        .count-text
            margin 0 10px
            font-size 20px
        .trolley-main
            padding-top 110px
            .trolley-cart
                background-color $color-background-fff
                .trolley-cart-default
                    display flex
                    height 100px
                    align-items center
                    box-sizing border-box
                    .trolley-count
                        flex 1
                        display flex
                .checkbox-default
                    padding-left 20px
                    padding-right 30px
            .trolley-popular
                margin-top 30px
                background-color $color-background-fff 
                padding-bottom 200px  
                .trolley-popular-title
                    display flex
                    height 100px
                    justify-content center
                    align-items center
                    border-bottom 1PX solid #ddd
                    font-size $font-size-32
                    color $color-text-FB6334
                    &>span 
                        padding 0 30px
                    .title-left
                    .title-right  
                        width 100px
                        border 0.5PX solid $color-text-FB6334
                        margin 0 10px
                .diamond-icon
                    width 0
                    height 0
                    border 10px solid transparent
                    border-bottom-color $color-text-FB6334
                    position relative
                    top -10px
                .diamond-icon:after
                    content ''
                    position absolute
                    left -10px
                    top 10px
                    width 0
                    height 0
                    border 10px solid transparent
                    border-top-color $color-text-FB6334


</style>
