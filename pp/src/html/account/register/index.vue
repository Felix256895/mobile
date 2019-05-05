<template>
    <div class="register" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <nav-tab
            leftIcon='icon-z-j-t'
            color='#000'
            title='注册'
            rightText='登录'
        ></nav-tab>
        <div class="register-form" >
            <div class="register-form-input">
                <span class="register-input-title">手机号</span>
                <input type="text" v-model="userName" class="register-input-item" name="userName" placeholder="请输入手机号">
            </div>
            <div  class="register-form-input">
                <span class="register-input-title">验证码</span>
                <div class="register-form-verify">
                    <input type="text" v-model="verifyCode" class="register-input-item" name="verification" style='width:70%' placeholder="请输入验证码">
                    <a class="register-verification">获取验证码</a>
                </div>
            </div>
            <div  class="register-form-input">
                <span class="register-input-title">密码</span>
                <input type="password" v-model="password" class="register-input-item" name="password" placeholder="请输入登录密码（6-12位数字或字母）">
            </div>
            <div  class="register-form-input invite">
                <span class="register-input-title">邀请码</span>
                <input type="text" v-model="invite" class="register-input-item" name="invite" placeholder="请输入邀请码">
            </div>
            <div class="register-form-checkbox">
                <input type="checkbox" id="checked-name"  v-model="checked" />
                <label for="checked-name">点击注册表示同意</label>
                <router-link class="form-pact" to='/agreement'>《注册协议》</router-link>
            </div>
            <div class="register-btn">
                <button @click='handleSubmit' class="register-btn-item">注册</button>
            </div>
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
        checked:true,
        userName:'',
        verifyCode:'',
        password:'',
        invite:'',

    }),
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
        
   },
   methods:{
       handleSubmit(){
           console.log(this.userName)
       }
   },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable" 
    .register
        width 100%
        box-sizing border-box
        height 100%
        overflow hidden
        background $color-background
        .register-form
            padding-top 130px
            .register-form-item
                display flex
                justify-content space-between
                padding 20px
                .register-verify
                    color #000
            .register-form-input
                display flex
                height 100px
                align-items center
                background $color-background-fff
                font-size $font-size-26
                .register-input-title
                    width 120px
                    padding-left 20px
                    display inline-block
                .register-input-item
                    height 100px
                    flex 1
                    background transparent
                input[name='userName']
                .register-form-verify
                    flex 1
                    border-bottom 1PX solid #ddd
                .register-verification
                    color $color-text-FB6334
                    padding 10px 20px
                    border-left 1PX solid #ddd
            .register-form-checkbox
                display flex
                height 30px
                padding 20px 40px
                align-items center
                .form-pact
                    color $color-text-FB6334
            .register-btn
                margin-top 50px
                text-align center
                .register-btn-item
                    width 90%
                    height 100px
                    border none 
                    background #FFA07A
                    color $color-text-ffffff
                    font-size $font-size-30
                    border-radius 4PX
            input[type=checkbox]
                visibility: hidden;
            input[type="checkbox"] + label::before 
                content "\a0"
                display inline-block
                width 25px 
                height 25px  
                margin-right 10px
                border-radius 2PX	
                padding-left 1PX	
                border 1PX solid #666
            input[type="checkbox"]:checked + label::before 
                content "\2714"	
                color #FFFFFF
                background-color: $color-background-FB6334
                border 1PX solid $color-background-FB6334	
            .invite
                margin-top 20px
</style>