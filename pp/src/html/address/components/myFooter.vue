<template>
    <router-link to='/add-address' class="my-footer">
        <span class="my-footer-icon">
            <img class="my-footer-img" src="@/assets/add.png" alt="">
        </span>
        <span class="my-footer-text">添加新地址</span>
    </router-link>
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
        display flex
        justify-content center
        align-items center
        background-color $color-background-fff
        .my-footer-icon
            height 40px
            .my-footer-img
                max-width 100%
                max-height 100%
        .my-footer-text
            color $color-text-FB6334
            margin-left 20px
            font-size $font-size-26
</style>
