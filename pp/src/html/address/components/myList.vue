<template>
    <ul class="my-list">
        <li class="my-list-item" v-for="item in list" :key="item">
            <div class="receiver-info">
                <div class="receiver-name">
                    <span>收货人：claerSource</span>
                    <span>18397908189</span>
                </div>
                <div class="receiver-address">地址：广东省深圳市宝安区留仙路汇聚创新园范德萨发放发发大水发</div>
            </div>
            <div class="operate">
                <van-checkbox checked-color="#ff6e01" v-model="ckecked">默认地址</van-checkbox>
                <div class="operate-item">
                    <a class="operate-edit">
                        <i class="font-icon-edit font-icon"></i>
                        <span>编辑</span>
                    </a>
                    <a class="operate-delete">
                        <i class="font-icon-delete font-icon"></i>
                        <span>删除</span>
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
    components:{
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup,
    },
    data:()=>({
        ckecked:true,
        list:[0,1,2,3],
    }),
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .my-list
        width 100%
        .my-list-item
            position relative
            background-color $color-background-fff
            padding 0 30px
            margin-top 15px
            &::before
                content ''
                left 0
                right 0
                top 0
                height 4PX
                position absolute
                background -o-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                background -moz-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                background -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                background repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #868686 0, #868686 45%, transparent 0, transparent 50%)
                background-size 250px
            .receiver-info
                display flex
                flex-direction column
                padding-top 4PX
                line-height 60px
                border-bottom 1PX solid #ddd
                .receiver-name
                    display flex
                    justify-content space-between
                    padding-top 10px
                    font-size $font-size-20
                .receiver-address
                    padding-bottom 10px
                    font-size $font-size-20
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp  1
                    -webkit-box-orient vertical 
            .operate
                height 70px
                display flex
                justify-content space-between
                align-items center
                .operate-item
                    display flex
                .operate-edit
                .operate-delete
                    display flex
                    color $color-text-020202
                    align-items center
                    font-size $font-size-20
                .font-icon
                    width 35px
                    height 35px
                    margin-right 10px
                .font-icon-edit
                    background url('../../../assets/edit.png')
                    background-size 100% 100%
                .font-icon-delete
                    margin-left 60px
                    background url('../../../assets/delete.png')
                    background-size 100% 100%
</style>
