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
                <input type="text" class="login-input-item" name="userName" placeholder="请输入账号">
            </div>
            <div  v-if='verify===true' class="login-form-input">
                <span class="login-input-title">密码</span>
                <input type="password" class="login-input-item" name="password" placeholder="请输入密码">
            </div>
            <div  v-if='verify===false' class="login-form-input">
                <span class="login-input-title">验证码</span>
                <input type="text" class="login-input-item" name="" placeholder="请输入验证码">
                <a class="login-verification">获取验证码</a>
            </div>
            <div class="login-form-item">
                <a v-if='verify===true' @click='handleVerifyChange' class="login-verify">验证码登录</a>
                <a v-if='verify===false' @click='handleVerifyChange' class="login-verify">使用密码登录</a>
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
        verify:true,

    }),
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
        
   },
   methods:{
       handleVerifyChange(e){
          this.verify=!this.verify;
        }
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
                    width 120px
                    padding-left 20px
                    display inline-block
                .login-input-item
                    height 100px
                    flex 1
                    background transparent
                input[name='userName']
                    border-bottom 1PX solid #ddd
                .login-verification
                    color $color-text-FB6334
                    padding 10px 20px
                    border-left 1PX solid #ddd
            .login-btn
                margin-top 50px
                text-align center
                .login-btn-item
                    width 90%
                    height 100px
                    border none 
                    background #FFA07A
                    color $color-text-ffffff
                    font-size $font-size-30
                    border-radius 4PX
</style>