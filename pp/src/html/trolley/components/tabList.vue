<template>
    <ul class="tab-list">
        <li class="tab-list-item" v-for="item in list" :key="item">
            <div class="item-img">
                <img src="@/assets/banner1.jpg" alt="">
            </div>
            <div class="item-content">
                <p class="item-content-title">【坤康】羚羊感冒片</p>
                <p class="item-content-text">清热解表。用于流行感冒，症见发热恶风、头痛头晕、咳嗽、胸闷、咽喉肿痛地方撒范德萨范德萨发大</p>
                <span>¥69.60</span>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        data:()=>({
            list:[0,1,2,3]
        }),
    }
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable" 
    .tab-list
        width 100%
        height 100%
        .tab-list-item
            display flex
            width 100%
            height 250px
            padding 20px
            box-sizing border-box
            border-bottom 1PX solid #ddd
            .item-img
                width 250px
                height 210px
                display flex
                align-items center
                margin-right 20px
                img 
                    max-width 100%
                    max-height 100%
        .item-content
            flex 1
            display flex
            flex-direction column
            justify-content space-around
            .item-content-title
                font-size 30px
                padding-top 20px
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp  1
                -webkit-box-orient vertical 
            .item-content-text
                font-size $font-size-24   
                line-height 35px
                color $color-text-868686
                height 63px
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp  2
                -webkit-box-orient vertical 
            span 
                color $color-text-FB6334
                font-size  26px
</style>
