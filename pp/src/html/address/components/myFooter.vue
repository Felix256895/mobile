<template>
    <div class="my-footer">
        <span class="my-footer-icon">
            <img class="my-footer-img" src="@/assets/add.png" alt="">
        </span>
        <span>添加新地址</span>
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
        height 100px
        width 100%
        display flex
        justify-content center
        align-items center
        background-color $color-background-fff
        .my-footer-icon
            height 50px
            .my-footer-img
                max-width 100%
                max-height 100%
</style>
