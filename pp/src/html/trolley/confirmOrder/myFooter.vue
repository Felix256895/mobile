<template>
    <div class="my-footer">
        <div class="my-footer-text">
            <span>合计：</span>
            <span class="footer-total">¥ 150.10</span>
        </div>
        <a class="confirm-btn">确认</a>
    </div>
</template>
<script>
export default {
    data:()=>({
        
    }),
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .my-footer
        position fixed
        left 0
        bottom 0
        height 80px
        width 100%
        background-color $color-background-fff
        display flex
        align-items center
        justify-content space-between
        .my-footer-text
            padding-left 30px
            .footer-total
                color $color-text-FB6334
        .confirm-btn
            height 100%
            width 250px
            display flex
            align-items center
            justify-content center
            background-color $color-background-FB6334
            color $color-text-ffffff
            font-size $font-size-28
</style>
