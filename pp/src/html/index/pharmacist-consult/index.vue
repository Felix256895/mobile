<template>
    <div class="pharmacist-consult" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <!-- 药师咨询 -->
        <nav-tab title="药师咨询"
        rightText="一键拨号"
        tel="1"
        ></nav-tab>
        <div class="consultTop" :style="{ height: wrapperHeight + 'px' }">
            <div class="box"  v-for="(v,index) in list" :key="index">
                <div class="boxBottom" style="border-bottom:1px solid #e6e6e6">
                    <div class="imgs">
                        <img src="@/assets/banner1.jpg" alt="" class="img-s">
                    </div>
                    <div class="boxRig">
                        <div class="row">
                            <span class="textRow">药师花简单</span>
                            <div>(...  <span class="text-ping">评分:</span> <span><i class="icon-w-j-x"></i><i class="icon-w-j-x"></i><i class="icon-w-j-x"></i><i class="icon-w-j-x"></i><i class="icon-w-j-x"></i></span></div>
                        </div>
                        <div class="textTop">快递费金卡戴珊富家大室考虑房价开了房进度款该地块</div>
                    </div>
                </div>
                <!-- 按钮 -->
                <div class="btns">
                    <div class="btn" style="border:1px solid #FF6E01" @click="_btnZaiXianZhiXun">
                        <span>在线咨询</span>
                    </div>
                    <div class="btn" style="border:1px solid #FF6E01">
                        <a href="tel:020 8852 5087" style="color:#FF6E01">
                          电话咨询
                        </a>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import NavTab from "@/components/NavTab";
// 请求api 封装请求
import Utils from '@/utils';             //公共方法
import Constant from '@/api';            //加载API 模块
const { API_URL } = Constant;            //API 地址

export default {
    components:{
        NavTab
    },
    data:()=>({
        wrapperHeight: 0,  // 页面总高
        list:[1,2,3,4,5,6,7,8]
    }),
    watch:{

    },
    created(){

    },
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
   
   },
    methods:{
        // 拨打电话
        _btnZaiXianZhiXun(){
            Toast("敬请期待")
        },

    },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"            
    .pharmacist-consult
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background #e6e6e6
        .consultTop::-webkit-scrollbar 
            display none
        .consultTop::-moz-scrollbar 
            display none 
        .consultTop::-ms-scrollbar 
            display none  
        .consultTop
            padding-top 110px
            width 100%
            height 100%
            box-sizing border-box
            overflow-y scroll
            -webkit-overflow-scrolling:touch 
            .box
                width 100%
                height 300px
                background #fff
                box-sizing border-box
                margin-top 15px
                .boxBottom
                   box-sizing border-box 
                   width 100%
                   height 220px
                   display flex
                   flex-direction row
                   align-items center
                   padding-left 20px
                   padding-right 20px
                   .imgs
                        width 180px
                        height 180px
                        .img-s
                            width 100%
                            height 100%
                    .boxRig
                        flex 1
                        height 220px
                        padding 20px 0 20px 30px
                        box-sizing border-box    
                        .row
                            width 100%  
                            box-sizing border-box    
                            display flex
                            flex-direction row
                            align-items center 
                            font-size $font-size-28
                            .textRow
                                font-size $font-size-30
                                color #000
                                margin-right 20px  
                            .text-ping
                                margin-left 30px
                                color #aaaaaa
                                margin-right 15px  
                            .icon-w-j-x
                                color #FF6E01      
                        .textTop
                            margin-top 20px
                            line-height 35px
                            font-size $font-size-24   
                .btns
                    display flex
                    align-items center
                    box-sizing border-box  
                    flex-direction row
                    justify-content:flex-end
                    height 80px
                    padding-right 30px
                    .btn
                        margin-left 30px
                        height 40px
                        width 140px
                        display flex
                        align-items center
                        justify-content center
                        font-size $font-size-25
                        color #FF6E01

</style>
