<template>
<div class="boxs">
    <!-- 列表 -->
    <div class="tabe-list" v-for="(itme,index) in list" :key="index">
        <div class="box" style="border-bottom:1px solid #e6e6e6">
            <div class="img">
                <img src="@/assets/banner2.jpg" alt="" class="imgs">
            </div>
            <div class="Right">
                <div class="text">【露娜】偏远太饥渴了偏远太饥渴了偏远太饥渴了</div>
                <div class="e6">客服还上课交话费富士康交话费房价还是开发和富家大室客服号富家大室客户方发货速度快放假独守空房</div>
                <div class="btom">
                    <div class="row">
                        <span class="rowText">10g*9袋</span>
                        <div class="rowBtn">非处方药</div>
                    </div>
                    <div class="botmTetx">￥ 99.00</div>
                </div>
            </div>
        </div>
        <div class="position" @click="_position">
            <i class="icon-xiao-go-wu-che" style="color:#fff"></i>
        </div>
    </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';

export default {
    components:{ },
    data:()=>({
        
    }),
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    methods: {
        _position(){
            Toast('敬请期待')
        },
    },
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .boxs
        box-sizing border-box
        width 100%
        background #e6e6e6
        overflow hidden
        z-index 100
        height 100%
        .tabe-list
            box-sizing border-box
            width 100%
            position relative
            background #fff
            height 250px
            .box
                padding 15px
                width 100%
                height 100%
                box-sizing border-box
                display flex
                flex-direction row
                align-items center
                .img
                    flex 1
                    height 220px
                    padding-left 30px
                    padding-right 30px
                    box-sizing border-box
                    .imgs
                        width 100%
                        height 100%
                .Right
                    width 420px
                    box-sizing border-box
                    height 220px
                    padding-top 5px
                    padding-bottom 5px
                    display flex
                    flex-direction column     
                    .text
                        box-sizing border-box
                        font-size $font-size-28
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                        height 40px
                        line-height 40px
                    .e6
                        display flex
                        flex-direction column
                        margin-top 15px 
                        font-size $font-size-24   
                        line-height 35px
                        color $color-text-868686
                        height 63px
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp  2
                        -webkit-box-orient vertical 
                    .btom
                        margin-top 15px 
                        box-sizing border-box
                        .row
                            display flex
                            flex-direction row
                            align-items center
                            font-size $font-size-20   
                            .rowText
                                font-size $font-size-18
                                color $color-text-868686
                                margin-right 20px
                            .rowBtn
                                height 33px
                                width 110px
                                display flex
                                align-items center
                                justify-content center
                                background #ffaa33   
                                color $color-text-ffffff 
                                box-sizing border-box
                        .botmTetx
                            font-size $font-size-25
                            color $color-text-FB6334
                            margin-top 10px 
            .position
                position absolute
                bottom 20px
                right 20px
                box-sizing border-box
                background $color-background-FB6334
                width 55px
                height 55px
                border-radius 50%
                z-index 9
                overflow hidden
                display flex
                align-items center
                justify-content center
                font-size $font-size-26
   
</style>
