<template>
    <div class="address" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab 
            leftIcon='icon-z-j-t'
            color='#000'
            title='我的收货地址'
            ></nav-tab>
        <section class="address-section">
            <my-list></my-list>
        </section>
        <my-footer></my-footer> 
    </div>
</template>
<script>
import NavTab from "@/components/NavTab";
import MyFooter from './components/myFooter';
import MyList from './components/myList';
export default {
    components:{
        NavTab,
        MyFooter,
        MyList,
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
        .address-section
            padding-top 110px
</style>
