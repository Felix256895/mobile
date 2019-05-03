<template>
    <div class="login" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab
            leftIcon='icon-z-j-t'
            color='#000'
            title='登录'
            rightText='注册'
        ></nav-tab>
        <form class="login-form">
            <div class="login-form-input">
                <span class="login-input-title">账号</span>
                <input type="text" name="userName" placeholder="请输入账号">
            </div>
            <div class="login-form-input">
                <span class="login-input-title">密码</span>
                <input type="password" name="password" placeholder="请输入密码">
            </div>
            <div class="login-form-item">
                <a class="login-verify">验证码登录</a>
                <router-link class="login-verify" to='/forgetpassword'>忘记密码</router-link>
            </div>
            <div class="login-btn">
                <button class="login-btn-item">登录</button>
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
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable" 
    .login
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background $color-background
        .login-form
            padding-top 130px
            .login-form-item
                display flex
                justify-content space-between
                padding 20px
                .login-verify
                    color #000
            .login-form-input
                display flex
                height 100px
                align-items center
                background $color-background-fff
                font-size $font-size-26
                .login-input-title
                    padding-left 20px
                    padding-right 50px
                input[name='userName']
                    height 100px
                    flex 1
                    border-bottom 1PX solid #ddd
                    background transparent
            .login-btn
                margin-top 50px
                text-align center
                .login-btn-item
                    width 90%
                    height 100px
                    border none 
                    background $color-background-FB6334
                    color $color-text-ffffff
                    font-size $font-size-30
                    border-radius 4PX
</style>