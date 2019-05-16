<template>
    <ul class="my-list">
        <li class="my-list-item" v-for="item in 3" :key="item">
            <div class="list-item-img">
                <img src="@/assets/banner1.jpg" alt="">
            </div>
            <div class="list-item-content">
                <div class="list-item-content-title">【坤康】羚羊感冒片</div>
                <div class="list-item-content-text">
                    <span class="price">¥15.00</span>
                    <span class="multiple">x1</span>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>

export default {
    data:()=>({

    }),
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .my-list
        background-color $color-background-fff
        .my-list-item
            height 180px
            display flex
            align-items center
            border-top 1px solid #ddd
            padding 20px 0
            box-sizing  border-box
            .list-item-img
                height 140px
                width 130px
                display flex
                align-items center
                margin-right 30px
                img
                    max-width 100%
                    max-height 100%
            .list-item-content
                flex 1
                display flex
                height 100%
                flex-direction column
                justify-content space-around
            .list-item-content-title
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp  1
                -webkit-box-orient vertical
            .list-item-content-text
                display flex
                justify-content space-between
                .price
                    color $color-text-FB6334
                .multiple
                    color $color-text-868686
</style>
