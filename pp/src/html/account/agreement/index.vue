<template>
    <div class="agreement" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab
            leftIcon='icon-z-j-t'
            color='#000'
            title='注册协议'
        ></nav-tab>
        <div class="agreement-content">
            注册协议
        </div>
    </div>
</template>
<script>
    import NavTab from "@/components/NavTab";
    export default {
    components:{
        NavTab,
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
   methods:{
   },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable" 
    .agreement
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background $color-background
        .agreement-content
            padding-top 110px
</style>