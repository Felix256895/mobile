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
        </section>
        <my-footer></my-footer>
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import MyFooter from './myFooter';
export default {
    components:{
        NavTab,
        MyFooter,
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
                border-bottom 4PX solid #e89abe
                padding 0 30px
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

</style>
