<template>
<!-- 轮播 -->
    <div class="swipe-box">
        <ul class="swipe-ul">
            <li class="li" :class="carIndex==index?'active':''" v-for="(item,index) in lists" :key="index"></li>
        </ul>
        <swipe :autoplay="5000" class="swipe"  :duration='1000'
         ref="mtSwipe" @change="handleChange" :show-indicators="false">
            <swipe-item v-for="(item,index) in lists" :key="index" class="itme">
                <a href="#" class="itme">
                    <img :src="item.src" alt="" class="img">
                </a>
            </swipe-item>
        </swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
const list=[
    {
        src:require('@/assets/banner1.jpg')
    },
    {
        src:require('@/assets/banner2.jpg')
    },
];
export default {
    components:{Swipe,SwipeItem },
    data:()=>({
        lists:list,
        carIndex:'',   //index 下标
    }),
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
    .swipe-box
        position relative
        overflow hidden
        box-sizing border-box
        width 100%
        height 260px !important
        z-index 101
        background #000
        .swipe-ul
            position absolute
            z-index 10100
            right 0
            left 0
            bottom 20px
            text-align center
            font-size 0
            .li
                display inline-block
                margin 0 3px
                width 10px
                height 10px
                border-radius 50%
                background #fff
                &.active
                  background $color-background-FB6334
                  transition: all 0.4s
                  width 22px
                  border-radius 22px
        .swipe
            height 260px
            width 100%
            z-index 1000
            overflow hidden
            box-sizing border-box
            background #000
            .itme
                display flex
                align-items center
                justify-content center
                width 100%
                height 100%
                background $color-background-FB6334
                overflow hidden
                box-sizing border-box
                .img
                    width 100%
                    height 100%
</style>
