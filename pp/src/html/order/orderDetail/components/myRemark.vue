<template>
    <div class="my-remark">
        <div class="my-remark-item">
            配送费：<span class="remark-item-text">6</span>
        </div>
        <div class="my-remark-item">
            优惠券：<span class="remark-item-text">无</span>
        </div>
        <div class="my-remark-item">
            邦邦币：<span class="remark-item-text">0</span>
        </div>
        <div class="my-remark-item">
            预约配送时间：<span class="remark-item-text">无</span>
        </div>
        <div class="my-remark-item">
            是否代煎：<span class="remark-item-text">否</span>
        </div>
        <div class="my-remark-item">
            发票抬头：<span class="remark-item-text">否</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .my-remark
        background-color $color-text-ffffff
        padding 15px 30px
        .my-remark-item
            line-height 45px
            color $color-text-868686
            font-size $font-size-20
            .remark-item-text
                color $color-text-020202
</style>
