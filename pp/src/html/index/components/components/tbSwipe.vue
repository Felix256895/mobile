<template>
<!-- 轮播 -->
    <div class="swipes-box1">
        <ul class="swipe-ul">
            <li class="li" :class="carIndex==index ? 'active' : '' " v-for="(item,index) in list" :key="index"></li>
        </ul>
        <swipe class="swipe" :prevent='true' :duration='400' :autoplay="0" @change="handleChange" ref="mtSwipe" :show-indicators="false">
            <swipe-item v-for="(item,index) in list" :key="index" class="itme">
                <div class="tetx">
                    <div class="felx" v-for="(itmes,index) in item" :key="index">
                        <div class="imgs">
                            <img src="@/assets/chuanyi.png" alt="" class="img-1" />
                        </div>
                        <span class="text-font">{{itmes.name}}</span>
                    </div>
                </div>
            </swipe-item>
        </swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import { addClass,removeClass } from '@/common/js/dom.js';
export default {
    components:{Swipe,SwipeItem },
    data:()=>({
        carIndex:'',   //index 下标
    }),
    props:{
        list:{
            type:Array,
            default:[],
        }
    },
    mounted(){

    },
    methods: {
        // 下标滑动
        handleChange(index){    //跳转之后获取当前的下标
            this.carIndex = index;
        },
    },
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .swipes-box1
        position relative
        overflow hidden
        white-space: nowrap
        box-sizing border-box
        .swipe-ul
            position absolute
            z-index 101
            right 0
            left 0
            bottom 20px
            text-align center
            font-size 0
            .li
                display inline-block
                margin 0 3px
                width 8px
                height 8px
                border-radius 50%
                background rgba(0,0,0,.1)
                &.active
                  background $color-background-FB6334
        .swipe
            height 360px
            width 100%
            box-sizing border-box
            .itme
                box-sizing border-box
                width 100%
                height 360px
                background $color-background
                padding-top 10px
                padding-bottom 10px
                .tetx
                    height 300px
                    background #ffffff
                    box-sizing border-box
                    width 100%
                    display flex
                    flex-wrap: wrap
                    .felx
                        width 25%
                        height 150px
                        display flex
                        flex-direction column
                        align-items center
                        justify-content center
                        .imgs
                            width 75px
                            height 75px
                            border-radius 50%
                            .img-1
                                width 100%
                                height 100%
                                border-radius 50%
                        .text-font
                            font-size $font-size-23 
                            color $color-text-020202
                            margin-top 15px        
</style>
