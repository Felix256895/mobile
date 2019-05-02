<template>
<div>
    <div class="tabbar" ref="companyStyle" style="border-top:1px solid rgba(0,0,0,.1)">
         <!-- :to="itme.to" -->
        <div class="tabbar-router" v-for="(itme,index) in list" 
        :key="index" 
        @click="toClick(itme)"
        :style="{'width':clientWidth+'px'}">
            <i :class="['bor-icon',itme.icon]" :style="{color:subscript==index?'#FB6334':'#333'}"></i>
            <span class="bor-text" :style="{color:subscript==index?'#FB6334':'#333'}">{{itme.name}}</span>
        </div>
    </div>
</div>    
</template>
<script>
import { Dialog } from 'vant';
const list=[
    {
        icon:'icon-index',
        img:require('@/assets/index.png'),
        img1:require('@/assets/index-1.png'),
        to:'/index',
        name:'首页',
        ts:false
    },
    // {
    //     icon:'icon-ji-shi',
    //     img:require('@/assets/shi-ji.png'),
    //     img1:require('@/assets/shi-ji-1.png'),
    //     to:'/prescription',
    //     name:'处方取药',
    //     ts:false
    // },

    {
        icon:'icon-trolley',
        img:require('@/assets/trolley.png'),
        img1:require('@/assets/trolley-1.png'),
        to:'/trolley',
        name:'需求清单',
        ts:false
    },
    {
        icon:'icon-my',
        img:require('@/assets/my.png'),
        img1:require('@/assets/my-1.png'),
        to:'/my',
        name:'我的',
        ts:false
    },
];
export default {
    props:{
        subscript:{
            type:String,
            default:'0'
        }
    },
    components:{

    },
    data:()=>({
        list:list,
        clientWidth:'',
     
    }),
    created() { //加载后
  
    },
    mounted() { //加载前
        // 获取浏览器可视区域高度
        let width = `${document.documentElement.clientWidth}`  
        this.clientWidth = width/this.list.length;
    },
    computed: { //计算

    },
    methods: {  //函数
        toClick(e){
            this.$router.push({
                path: e.to
            });
        },
    },
}
</script>
<style lang="stylus">
    @import "~@/common/stylus/variable"
    .tabbar
        position fixed
        background $color-background-fff
        bottom 0
        left 0
        width 100%
        display flex
        flex-direction row
        z-index 1000000000001
        transform: translateZ(0)
        -webkit-transform: translateZ(0)
    .tabbar-router
        display flex
        flex-direction column
        align-items center
        justify-content center
        height 100px
        .bor-icon
            font-size 40px
        .img-s
            width 36px
            height 36px
            .imgs-1
                width 100%
                height 100%
        .bor-text
            font-size 24px
            margin-top 10px   
</style>
