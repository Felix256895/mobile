<template>
    <div class="order-detail" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            backgroundColor='#fff'
            title='订单详情'
            leftIcon='icon-y-j-t'
        ></nav-tab>
        <header class="header">已取消</header>
        <section class="content">
            <div class="content-box">
                <div class="order-bar">
                    <div class="order-bar-name">订单编号：<span class="order-number">20191314</span></div>
                    <div class="order-bar-name">订单状态：<span class="order-status">已取消</span></div>
                </div>
                <div class="address-info">
                    <div class="address-time">付款时间：<span class="">2019-05-13 17:00:00</span></div>
                    <div class="address-name">收货人： <span> clearSource  18397908189</span></div>
                    <div class="address-text">地址： <span>广东省深圳市宝安区留仙路汇聚创新园405</span> </div>
                </div>
            </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import myFooter from "./components/myFooter";
export default {
    components:{
        NavTab,
        myFooter,
    },
    data:()=>({
        wrapperHeight: 0,  // 页面总高
    }),
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
   },
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .order-detail
        width 100%
        box-sizing border-box
        height 100%
        overflow-y scroll
        background $color-background
        -webkit-overflow-scrolling touch 
        .header
            height 150px
            line-height 150px
            background-color $color-background-FB6334 
            padding-top 110px
            padding-left 30px
            color $color-text-ffffff
            font-size $font-size-30
        .content-box
            margin-top 15px
            background-color $color-background-fff
            .order-bar
                height 70px
                display flex
                justify-content space-between
                align-items center
                border-bottom 1PX solid #ddd
                padding 0 30px
            .order-bar-name
                color $color-text-868686
                font-size $font-size-20
            .order-number
                color #000
            .order-status
                color $color-text-FB6334
</style>
