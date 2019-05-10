<template>
    <div class="order" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            backgroundColor='#fff'
            title='订单'
            leftIcon='icon-y-j-t'
        ></nav-tab>
        <section class="order-section">
            <van-tabs 
            @click="handleClick"
            v-model="active"
            :line-width=35
            :line-height=2
            :swipe-threshold=5
            title-active-color='#000'
            swipeable
             animated >
                <van-tab v-for="item in titles" :key="item" :title="item">
                    <my-list 
                    :active="active"
                    ></my-list>
                </van-tab>
            </van-tabs>
        </section>
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import MyList from "./components/myList";
import { Tab, Tabs } from 'vant';
export default {
    components:{
        [Tabs.name]:Tabs,
        [Tab.name]:Tab,
        NavTab,
        MyList,
    },
    data:()=>({
        wrapperHeight: 0,  // 页面总高
        active:0,
        titles:['全部','待付款','待发货','待收货','待评价'],
    }),
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
   },
   methods:{
       handleClick(index,title){
        //    this.index=index;
        //    this.title=title;
       }
   }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"
    .order
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
        .order-section
            padding-top 110px
            .van-tabs__wrap
                position fixed
                top 110px
                left 0
                padding 0
            .van-hairline--top-bottom:after
                border-width 0
</style>