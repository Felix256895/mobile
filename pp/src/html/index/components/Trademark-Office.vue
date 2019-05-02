<template>
<!-- 商标 -->
    <div class="Office-box" style="border-bottom:1px solid #e6e6e6">
        <div class="isso" v-for="(itme,index) in list" :key="index" @click="_officeBox(itme)">
            <div class="imgs">
                <img :src="itme.img" alt="" class="img-s">
            </div>
            <span class="text">{{itme.name}}</span>
        </div>
    </div>
</template>
<script>
const list=[
    {
        name:'药师咨询',
        img:require('@/assets/chuanyi.png'),
        url:'/pharmacist-consult',
    },
    {
        name:'医师问诊',
        img:require('@/assets/chuanyi.png'),
        url:'/physician-inquiry',
    },
    {
        name:'药友圈',
        img:require('@/assets/chuanyi.png'),
        url:'',
    },
    {
        name:'全国找药',
        img:require('@/assets/chuanyi.png'),
        url:'',
    },
    {
        name:'新手指南',
        img:require('@/assets/chuanyi.png'),
        url:'',
    },
];
export default {
    data:()=>({
        list:list,
    }),
    methods: {
        _officeBox(itme){
            if(itme.url!=''){
                this.$router.push({
                    path: itme.url
                });
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .Office-box
        box-sizing border-box
        width 100% 
        display flex
        flex-direction row
        align-items center 
        z-index 101
        background #fff 
        .isso
            flex 1
            display flex
            padding-top 35px
            padding-bottom 35px
            align-items center
            justify-content center
            flex-direction column
            box-sizing border-box
            .imgs
                width 90px
                height 90px
                overflow hidden
                border-radius 50%
                .img-s
                    width 100%
                    height 100%
                    border-radius 50%
            .text
                font-size $font-size-25
                margin-top 15px
                color $color-text-020202        
</style>
