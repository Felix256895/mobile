<template>
  <ul class="tab-carts">
    <li class="carts-list" v-for="item in list" :key="item">
      <div class="carts-item">
        <van-checkbox checked-color="#ff6e01" v-model="checked"/>
        <div class="carts-shop">
          <div class="carts-shop-img">
            <img src="@/assets/banner1.jpg" alt>
          </div>
          <div class="carts-shop-price">
            <div class="carts-shop-name">
              <span>【坤康】羚羊感冒片</span>
              <i class="icon-shang-chu icon-font"></i>
            </div>
            <div class="carts-shop-count">
              <span>¥12.30</span>
              <div class="trolley-count">
                <button class="count-info">-</button>
                <span class="count-info count-text">1</span>
                <button class="count-info">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carts-footer">
        数量
        <span>1</span> 总数
        <span>¥69.80</span>
      </div>
    </li>
  </ul>
</template>
<script>
import { Checkbox, CheckboxGroup } from "vant";
export default {
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data: () => ({
      list:[0,1],
      checked:true,
  }),
};
</script>
<style lang="stylus" scoped>
@import '~@/common/stylus/variable';
.tab-carts
    background-color: $color-background-fff;
    .carts-list
        border-top 1PX solid #ddd
        padding 0 20px
        .carts-item
            display flex
            height 200px
            align-items center
            .carts-shop
                flex 1
                display flex
                align-items center
                border-bottom 1PX solid #ddd
                margin-left 20px
                .carts-shop-img
                    width 160px
                    height 200px
                    display flex
                    align-items center
                    padding 20px 0
                    box-sizing border-box
                    margin-right 30px
                    img 
                        max-width 100%
                        max-height 100%
                .carts-shop-price
                    flex 1
                    height 200px
                    display flex
                    flex-direction column
                    justify-content space-around
                    padding 20px 0
                    box-sizing border-box
                    .carts-shop-name
                        display flex
                        width 100%
                        height 40px
                        justify-content space-between
                        align-items center
                        span
                            overflow hidden
                            text-overflow ellipsis
                            white-space nowrap
                            width 350px
                    .carts-shop-count
                        display flex
                        width 100%
                        justify-content space-between
                        align-items center
                        &>span 
                            color $color-text-FB6334
                        .trolley-count
                            display flex
        .carts-footer
            text-align right
            padding 25px 20px  

</style>
