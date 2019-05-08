<template>
  <footer class="my-footer">
    <van-checkbox checked-color="#ff6e01" v-model="checked">全选</van-checkbox>
    <div class="my-footer-total">
      <p>
        合计：
        <span>¥0.00</span>
      </p>
      <p>不含运费</p>
    </div>
    <router-link to="/confirm-order" class="my-footer-button">提交需求</router-link>
  </footer>
</template>
<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
    components:{
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup,
    },
  data: () => ({
      checked:true,
  }),
};
</script>
<style lang="stylus" scoped>
    @import '~@/common/stylus/variable';
    .my-footer
        position fixed
        bottom 101px
        left 0
        height 80px
        width 100%
        display flex
        align-items center
        padding-left 20px
        background $color-background-fff
        z-index 100
        .my-footer-total
            flex 1
            height 80px
            display flex
            justify-content center
            flex-direction column
            align-content space-around
            align-items flex-end
            padding-right 30px
            &>p:first-child
                margin-bottom 15px
                span
                    color $color-text-FB6334
        .my-footer-button
            flex 1
            height 80px
            display flex
            justify-content center
            align-items center
            background-color $color-background-FB6334
            color $color-text-ffffff
            font-size 30px
</style>
