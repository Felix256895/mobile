<template>
  <footer class="footer">
    <div >
      <span class="footer-title">商品总额：</span>
      <span class="footer-total-price">¥180.00</span>
    </div>
    <div >
      <span class="footer-title">支付方式：</span>
      <span >微信支付</span>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .footer
        position fixed
        left 0
        bottom 0
        width 100%
        height 100px
        display flex
        flex-direction column
        justify-content space-around
        padding-left 25px
        background-color $color-background-fff
        .footer-title
            color $color-text-868686
        .footer-total-price
            color $color-text-FB6334
</style>
