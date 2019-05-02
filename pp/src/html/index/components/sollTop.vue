<template>
<!-- 轮播 -->
    <div class="swipe-box1" style="border-bottom:1px solid #e6e6e6">
        <div class="texts">公告</div>
        <div class="myBox">
            <div v-for="(item,index) in lists" ref="rollul" 
            :key="index" :class="{anim:animate==true}" class="li">
                {{item.name}}
            </div>
        </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
const list=[
    {
        name:'各族人民'
    },
    {
       name:'的接口撒后方可会计师费可接受的'
    },
        {
       name:'22222222'
    },
        {
       name:'3333333'
    },
        {
       name:'4444444'
    },
];
export default {
    components:{Swipe,SwipeItem },
    data:()=>({
        lists:list,
        carIndex:'',   //index 下标
        animate:true,
        funName2:'',
    }),
    created(){
        this.funName2  = setInterval(this.scroll,3000) 
    },
    methods: {
       scroll(){
            let con1 = this.$refs.rollul;
            con1[0].style.marginTop='30px';
            this.animate=!this.animate;
            var that = this;    // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
            setTimeout(function(){
                that.lists.push(that.lists[0]);
                that.lists.shift();
                con1[0].style.marginTop='0px';
                that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
            },0)
        },
    },
    destroyed: function () {
        clearInterval(this.funName2);
    }
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .swipe-box1
        box-sizing border-box
        width 100%
        display flex
        flex-direction row
        font-size $font-size-25
        padding 15px 20px 
        align-items center
        overflow hidden !important
        .texts
            background $color-background-FB6334
            box-sizing border-box
            height 30px
            width 65px
            display flex
            justify-content center
            align-items center
            color $color-text-ffffff
            border-radius 5px
            overflow hidden !important
        .myBox
            flex 1
            transition: all 0.5s
            overflow hidden
            box-sizing border-box
            height 30px
            line-height 30px
            .li
                height 30px
                line-height 30px
            .anim
                transition: all 0.5s              

</style>
