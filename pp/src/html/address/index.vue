<template>
    <div class="address" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            leftIcon='icon-z-j-t'
            color='#000'
            title='我的收货地址'
            ></nav-tab>

        <my-footer></my-footer> 
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import MyFooter from './components/myFooter';
export default {
    components:{
        NavTab,
        MyFooter,
    },
    data:()=>({
         wrapperHeight: 0,  // 页面总高
    }),
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
   },
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .address
        width 100%
        box-sizing border-box
        height 100%
        overflow-y scroll
        background $color-background
        -webkit-overflow-scrolling touch 
        &::-webkit-scrollbar 
            display none
        &::-moz-scrollbar 
            display none 
        &::-ms-scrollbar 
            display none  
</style>
