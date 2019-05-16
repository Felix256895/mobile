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
                    <div class="title-name">订单编号：<span class="order-number">20191314</span></div>
                    <div class="title-name">订单状态：<span class="order-status">已取消</span></div>
                </div>
                <div class="address-info">
                    <div class="info-name">付款时间：<span class="order-text">2019-05-13 17:00:00</span></div>
                    <div class="info-name">收货人： <span class="order-text"> clearSource  18397908189</span></div>
                    <div class="info-name">地址： <span class="order-text">广东省深圳市宝安区留仙路汇聚创新园405</span> </div>
                </div>
                <div class="content-list">
                    <div class="content-default">
                        <span>默认处方包</span>
                        <div class="multiple">
                            <span>x1</span>
                            <i class="icon-shang-jian-to icon-font"></i>
                        </div>
                    </div>
                    <my-list></my-list>
                </div>
            </div>
            <div class="content-remark">
                <my-remark></my-remark>
            </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import MyFooter from "./components/myFooter";
import MyList from "./components/myList";
import MyRemark from "./components/myRemark";
export default {
    components:{
        NavTab,
        MyFooter,
        MyList,
        MyRemark,
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
            .address-info
                padding 10px 30px
                position relative
                &::before
                    content ''
                    left 0
                    right 0
                    bottom 0
                    height 4PX
                    position absolute
                    background -o-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                    background -moz-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                    background -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                    background repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                    background-size 250px
            .title-name
                color $color-text-868686
                font-size $font-size-20
            .order-number
                color #000
            .order-status
                color $color-text-FB6334
            .info-name
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp  1
                -webkit-box-orient vertical 
                color $color-text-868686
                font-size $font-size-20
                line-height 50px
            .order-text
                color #000
                font-size $font-size-20
            .content-list
                padding 0 30px
            .content-default
                display flex
                justify-content space-between
                height 70px
                align-items center
                .multiple
                    display flex
                    height 70px
                    align-items center
                    span 
                        margin-right 20px
                        color #666
                    .icon-font
                        color $color-text-868686
                        font-size $font-size-30
        .content-remark
            margin-top 20px
            margin-bottom 160px
</style>
