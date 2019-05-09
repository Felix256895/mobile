<template>
    <div class="add-address" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            leftIcon='icon-z-j-t'
            color='#000'
            title='添加收货地址'
            rightText='保存'
            ></nav-tab>
        <form class="add-address-form">
            <div class="form-item">
                <span class="form-item-label">收货人</span>
                <input type="text" class="form-item-input" placeholder="请输入收货人" />
            </div>
            <div class="form-item">
                <span class="form-item-label">联系电话</span>
                <input type="text" class="form-item-input" placeholder="请输入联系电话" />
            </div>
            <div class="form-item item-align" @click="show=true;">
                <span class="form-item-label">所在地区</span>
                <div>
                    <span>{{areaText}}</span>
                    <i class="icon-y-j-t font-icon"></i>
                </div>
            </div>
            <div class="form-item item-align">
                <span class="form-item-label">定位地址</span>
                <a href="" class="form-location">
                    <div class="form-location-item">
                        <i class="icon-ding-wei font-icon"></i>
                        <span class="location-text">宝安区留仙大道</span>
                    </div>
                    <i class="icon-y-j-t font-icon"></i>
                </a>
            </div>
            <div class="form-my-item">
                <input class="form-my-detail" type="text" placeholder="收件人详细地址（详细到门牌）" />
            </div>
        </form>
         <van-popup v-model="show" position="bottom">
             <van-area 
             :area-list="areaList"
             @confirm="onConfirm"
             @cancel="show = false"
             :item-height=30
              />
         </van-popup>
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import AreaList from "@/city/city";
import { Area ,Popup} from 'vant';
export default {
    components:{
        NavTab,
        [Area.name]:Area,
        [Popup.name]:Popup,
    },
    
    data:()=>({
         wrapperHeight: 0,  // 页面总高
         areaList:AreaList,
         show:false,
         areaText:'',
    }),
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
   },
   methods:{
       onConfirm(value,index){
           this.areaText=value[0].name+value[1].name+value[2].name;
           this.show=false;
       }
   }
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .add-address
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background $color-background
        padding-top 110px
        .add-address-form
            margin-top 20px
            padding-left 25px
            background $color-background-fff
            .font-icon
                font-size $font-size-30
                color $color-text-B0B0B0
                margin-right 20px
            .form-item
                display flex
                height 70px
                align-items center
                border-bottom 1PX solid #ddd
                .form-item-label
                    width 125px
                    height 70px
                    line-height 70px
                .form-item-input
                    flex 1
                    height 70px
            .item-align
                justify-content space-between
                .form-location
                    flex 1
                    display flex
                    justify-content space-between
                    align-items center
                .form-location-item
                    display flex
                    height 70px
                    align-items center
                .icon-ding-wei.font-icon
                    color $color-text-FB6334
                    font-size $font-size-40
                    margin-right 0
                .location-text
                    color $color-text-020202
            .form-my-item
                padding-top 30px
                padding-right 25px
                padding-bottom 50px
                .form-my-detail
                    height 60px
                    width 100%
</style>

