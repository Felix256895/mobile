<template>
<!-- 轮播 -->
    <div class="Tab" >
        <div class="top-s">
            <div class="nav" ref="navss">
                <div class="box" 
                ref="rows"
                v-for="(item,index) in arr" :key="index"
                @click="moreRows(index)"
                :style="{color:subscript==index?'#FB6334':'#000'}"
                >{{item.name}}</div>
                <div class="bg" :style="{left:lefts+'px',width:widths+'px',}">
                    <div class="bgs"></div>
                </div>
            </div>
        </div>
        <tb-swipe :list='list1' v-if="subscript==0"></tb-swipe>
        <tb-swipe :list='list2' v-if="subscript==1"></tb-swipe>
        <tb-swipe :list='list3' v-if="subscript==2"></tb-swipe>
        <tb-swipe :list='list4' v-if="subscript==3"></tb-swipe>
        <tb-swipe :list='list5' v-if="subscript==4"></tb-swipe>
        <tb-swipe :list='list6' v-if="subscript==5"></tb-swipe>
        <tb-swipe :list='list7' v-if="subscript==6"></tb-swipe>
        <tb-swipe :list='list8' v-if="subscript==7"></tb-swipe>
    </div>
</template>
<script>
import TbSwipe from './components/tbSwipe';
import ListDrug from './index.js';
export default {
    components:{TbSwipe },
    data:()=>({
        active:0,
        arr:ListDrug.list,
        list1:ListDrug.list1,
        list2:ListDrug.list2,
        list3:ListDrug.list3,
        list4:ListDrug.list4,
        list5:ListDrug.list5,
        list6:ListDrug.list6,
        list7:ListDrug.list7,
        list8:ListDrug.list8,

        lefts:0,           // 滑动偏移位置
        widths:0,          // 滑动偏移的宽
        subscript:0,       // 尾部导航显示active
        wrapperWidth:0,    // 页面宽
    }),
    watch:{

    },
    mounted(){
        this.widths=this.$refs.rows[0].clientWidth;    //获取元素的宽
        this.wrapperWidth =`${document.documentElement.clientWidth}`;  //获取页面总宽
   },
    created(){
  
    },
    methods: {
        moreRows(index){
            this.subscript=index;
            this.lefts=this.widths*this.subscript;
            if(this.wrapperWidth<this.widths*this.subscript+150){
                this.$refs.navss.scrollLeft=this.widths*(this.subscript-3);
            }
            if(index==2 || index==0 || index==1 || index==3){
                this.$refs.navss.scrollLeft=0;
            }
        },
        
        

    },
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .Tab
        width 100% 
        height 420px
        box-sizing border-box 
        overflow hidden
        z-index 10000
        position relative
        .top-s
            z-index 100000
            width 100%
            box-sizing border-box
            background $color-background
            .nav::-webkit-scrollbar 
                display none
            .nav::-moz-scrollbar 
                display none 
            .nav::-ms-scrollbar 
                display none        
            .nav
                display: flex
                align-items: center
                background-color: #fff
                flex-direction row
                padding-top 12px
                padding-bottom 12px
                overflow-x: scroll
                position relative
                box-sizing border-box
                .box
                    text-align: center
                    font-size: $font-size-22
                    -ms-flex-negative: 0
                    flex-shrink: 0
                    padding 15px 0
                    width 150px
                    color: #000
                .bg
                    position absolute
                    bottom  18px
                    height 3px
                    padding-left 40px
                    padding-right 40px
                    box-sizing border-box
                    transition all .4s
                    .bgs
                        background $color-background-FB6334  
                        width 100%
                        height 100% 
</style>
