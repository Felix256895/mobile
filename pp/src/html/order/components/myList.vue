<template>
    <div>
        <div class="my-list" v-for="index in 6" :key="index" @click="handleClick" >
            <div class="list-header" >
                <span class="list-header-left">0112211222</span>
                <span class="list-header-right">取消订单 >></span>
            </div>
            <div class="list-content">
                <div class="list-content-img">
                    <img src="@/assets/banner1.jpg" alt="">
                </div>
                <div class="list-detail">
                    <div class="list-detail-title">【坤康】羚羊感冒片</div>
                    <div class="list-detail-total">
                        <span class="price">¥69.80</span>
                        <span class="num">x1</span>
                    </div>
                </div>
            </div>
            <div class="list-price">
                共1件商品，合计75.80（含运费6.00）微信
            </div>
            <div class="list-footer">
                <a class="list-footer-cancel">取消订单</a>
                <a class="list-footer-pay">支付</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        active: {
            type:Number,
            default:0,
        }, 
    },
    data:()=>({
        list:[]
    }),
    mounted(){
        
    },
    methods:{
        handleClick(){
            this.$router.push('/order/order-detail');
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .my-list
        width 100%
        background #fff
        margin-top 15px
        box-sizing border-box
        .list-header
            height 60px
            display flex
            justify-content space-between
            align-items center
            border-bottom 1PX solid #ddd
            padding 0 25px
            .list-header-right
                color $color-text-FB6334
        .list-content
            height 200px
            display flex
            align-items center
            padding 0 25px
            .list-content-img
                width 160px
                height 160px
                display flex
                align-items center
                img 
                    max-width 100%
                    max-height 100%
        .list-detail
            height 100%
            flex 1
            display flex
            flex-direction column
            justify-content space-around
            margin-left 25px
            .list-detail-title
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp  1
                -webkit-box-orient vertical 
                font-size $font-size-30
            .list-detail-total
                display flex
                justify-content space-between
                .price
                    color $color-text-FB6334
                    font-size $font-size-30
                .num
                    color $color-text-868686
        .list-price
            height 50px
            padding-left 25px
            color $color-text-868686
        .list-footer
            height 100px
            display flex
            align-items center
            justify-content flex-end
            margin 0 25px
            border-top 1PX solid #ddd
            .list-footer-cancel
                border 1PX solid $color-text-B0B0B0
                padding 10px 20px
                border-radius 8px
                color #000
                margin-right 30px
            .list-footer-pay
                border 1PX solid $color-text-FB6334
                padding 10px 20px
                border-radius 8px
                color $color-text-FB6334
</style>

