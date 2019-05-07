<template>
    <div class="my-delivery">
        <ul class="delivery-list">
            <li class="delivery-item" @click="show1 = true;">
                <div>选择配送方式</div>
                <div>
                    <span>邦邦立达</span>
                    <i class="icon-y-j-t icon-font"></i>
                </div>
            </li>
            <li class="delivery-item">
                <div>配送费</div>
                <div>
                    <span>¥6.00</span>
                </div>
            </li>
            <li class="delivery-item">
                <div>优惠券</div>
                <div>
                    <span>无</span>
                    <i class="icon-y-j-t icon-font"></i>
                </div>
            </li>
            <li class="delivery-item">
                <div>邦邦币（100币抵扣1元）</div>
                <div>
                    <input class="delivery-item-input" type="text" placeholder="0币可用">
                </div>
            </li>
            <li class="delivery-item">
                <div>支付方式</div>
                <div>
                    <span>微信</span>
                    <i class="icon-y-j-t icon-font"></i>
                </div>
            </li>
            <li class="delivery-item">
                <van-checkbox checked-color="#ff6e01" v-model="invoice">开发票</van-checkbox>
                <div>
                    <i class="icon-y-j-t icon-font"></i>
                </div>
            </li>
            <li class="delivery-item">
                <van-checkbox checked-color="#ff6e01" v-model="reserve">预约配送</van-checkbox>
                <div>
                    <i class="icon-y-j-t icon-font"></i>
                </div>
            </li>
        </ul>
        <div class="delivery-text">
            <textarea class="delivery-textarea" placeholder="备注信息" ></textarea>
        </div>
        <van-popup v-model="show1" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="show1 = false"
          @cancel="show1 = false"
        />
      </van-popup>
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup,Picker,Popup } from 'vant';
export default {
    components:{
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup,
        [Picker.name]:Picker,
        [Popup.name]:Popup,
    },
    data:()=>({
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        invoice:true,
        reserve:true,
        show1: false,
    }),
}
</script>
<style lang="stylus" >
    @import "~@/common/stylus/variable"
    .my-delivery
        background-color $color-background-fff
        .van-checkbox
            height 30px
        .van-checkbox__icon
            height 30px
        .van-checkbox__icon
        .van-checkbox__label
            line-height 30px
        .van-checkbox__icon .van-icon
            width 30px
            height 30px
            font-size 24px
        .delivery-item
            height 75px
            display flex
            align-items center
            justify-content space-between
            padding 0 25px
            border-bottom 1PX solid #ddd
            .icon-font
                color $color-text-B0B0B0
                padding-left 10px
            .delivery-item-input
                width 100px
        .delivery-text
            height 100px
            padding 20px 25px
        .delivery-textarea
            height 100%
            width 100%
            border none
            color $color-text-B0B0B0
            font-size $font-size-12
            line-height 30px
</style>
