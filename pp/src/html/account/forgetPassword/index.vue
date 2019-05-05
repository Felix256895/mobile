<template>
    <div class="forget" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab
            leftIcon='icon-z-j-t'
            color='#000'
            title='提交'
        ></nav-tab>
        <form class="forget-form">
            <div class="forget-form-input">
                <span class="forget-input-title">手机号</span>
                <input type="text" class="forget-input-item" name="userName" placeholder="请输入手机号">
            </div>
            <div class="forget-form-input">
                <span class="forget-input-title">验证码</span>
                <input type="text" class="forget-input-item" name="" placeholder="请输入验证码">
                <a class="forget-verification">获取验证码</a>
            </div>
            <div  class="forget-form-input forget-password">
                <span class="forget-input-title">新密码</span>
                <input type="password" class="forget-input-item" name="password" placeholder="请输入新密码（6-12位数字或字母）">
            </div>
            <div class="forget-btn">
                <button class="forget-btn-item">提交</button>
            </div>
        </form>
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
        checked:true,
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
    .forget
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background $color-background
        .forget-form
            padding-top 130px
            .forget-form-item
                display flex
                justify-content space-between
                padding 20px
                .forget-verify
                    color #000
            .forget-form-input
                display flex
                height 100px
                align-items center
                background $color-background-fff
                font-size $font-size-26
                .forget-input-title
                    width 120px
                    padding-left 20px
                    display inline-block
                .forget-input-item
                    height 100px
                    flex 1
                    background transparent
                input[name='userName']
                    border-bottom 1PX solid #ddd
                .forget-verification
                    color $color-text-FB6334
                    padding 10px 20px
                    border-left 1PX solid #ddd
            .forget-btn
                margin-top 50px
                text-align center
                .forget-btn-item
                    width 90%
                    height 100px
                    border none 
                    background #FFA07A
                    color $color-text-ffffff
                    font-size $font-size-30
                    border-radius 4PX
            .forget-password
                margin-top 20px
</style>
