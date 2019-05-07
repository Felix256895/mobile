<template>
    <div class="confirm-order" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            leftIcon='icon-z-j-t'
            color='#000'
            title='确认订单'
            ></nav-tab>
        <section class="confirm-order-section">
            <div class="section-point">您的收货地址不在配送范围内</div>
            <div class="section-address">
                <div v-if="JSON.stringify(address)!=='{}'" class="show-address">
                    <div class="address-personal">
                        <span>收货人：{{address.name}}</span>
                        <span>{{address.phone}}</span>
                    </div>
                    <div class="address-info">
                        <span class="address-info-text">地址：{{address.text}}</span>
                        <i class="icon-y-j-t icon-font"></i>
                    </div>
                </div>
                <div v-else class="add-address">
                    <span class="add-address-text">请添加收货地址</span>
                    <i class="icon-y-j-t icon-font"></i>
                </div>
            </div>
            <div class="order-list">
                <div class="order-default">
                    <span class="title">默认处包方</span>
                    <span class="multiple">x1</span>
                </div>
                <my-list></my-list>
            </div>
            <div class="section-pint">
                需求单中有处方药，将由药店凭处方送达或者货到付款
            </div>
            <my-delivery></my-delivery>
            <div class="section-footer">
                <div class="section-footer-total">
                    共 <span>1</span> 件商品 合计 <span>¥ 13.30</span>
                </div>
                <div class="section-footer-pint" >(请尽快交付备货保证金，否则需求单将在30分钟后自动关闭)</div>
            </div>
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import MyList from "./components/myList";
import MyDelivery from "./components/myDelivery";
import MyFooter from './components/myFooter';
export default {
    components:{
        NavTab,
        MyFooter,
        MyList,
        MyDelivery,
    },
    data:()=>({
         wrapperHeight: 0,  // 页面总高
         address:{
             name:'cleaSource',
             phone:'18397908189',
             text:'广东省深圳市宝安区汇聚创新园405',
             },
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
    .confirm-order
        width 100%
        height 100%
        box-sizing border-box
        overflow-y scroll
        background-color $color-background
        -webkit-overflow-scrolling touch
        &::-webkit-scrollbar 
            display none
        &::-moz-scrollbar 
            display none 
        &::-ms-scrollbar 
            display none  
        .confirm-order-section
            padding-top 110px
            .section-point
                width 100%
                height 50px
                line-height 50px
                text-align center 
                color $color-text-ffffff
                background-color #FFA07A
            .section-address
                height 150px
                background-color $color-background-fff
                padding 0 30px
                position relative
                &::before
                    content: '';
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 4PX;
                    position: absolute;
                    background: -o-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%);
                    background: -moz-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%);
                    background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%);
                    background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%);
                    background-size: 250px;
                .icon-font
                    font-size $font-size-30
                    color $color-text-B0B0B0
            .add-address
                display flex
                height 100%
                justify-content space-between
                align-items center
                .add-address-text
                    color #666
                    font-size $font-size-30
            .show-address
                width 100%
                height 100%
                .address-personal
                    height 75px
                    display flex
                    align-items center
                    justify-content space-between
                    font-size $font-size-12
                .address-info
                    height 75px
                    display flex
                    justify-content space-between
                    font-size $font-size-12
                    .address-info-text
                        line-height 35px
                        height 70px
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp  2
                        -webkit-box-orient vertical 
                    .icon-font
                        padding-left 15px
                        align-self center
            .order-list
                background-color $color-background-fff
                margin-top 20px
                padding 0 30px
                .order-default
                    height 75px
                    display flex
                    justify-content space-between
                    align-items center
                    .multiple
                        color $color-text-868686
            .section-pint
                height 70px
                line-height 70px
                color $color-text-FB6334
                font-size $font-size-12
                padding-left 20px
            .section-footer
                margin-bottom 80px
                margin-top 20px
                background-color $color-background-fff
                line-height 40px
                padding 15px 25px
                .section-footer-total
                    color $color-text-868686
                    span 
                        color #000
                .section-footer-pint
                    color $color-text-FB6334
                    font-size $font-size-10
</style>
