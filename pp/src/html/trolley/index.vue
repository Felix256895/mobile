<template>
    <div class="trolley" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">




        <tab-bar subscript='1'></tab-bar>
    </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import { Toast } from 'mint-ui';
// 请求api 封装请求
import Utils from '@/utils';             //公共方法
import Constant from '@/api';            //加载API 模块
const { API_URL } = Constant;            //API 地址

export default {
    components:{
        TabBar,
    },
    data:()=>({
        wrapperHeight: 0,  // 页面总高

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


    },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"            
    .trolley
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden

</style>
