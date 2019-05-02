<template>
    <div class="index" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <div class="mint-post" ref="text">
            <div class="mint-radiolist-titles">
                <div class="row" @click="_map">
                    <i class="icon-ding-wei row-icon"></i>
                    <span class="lef">送至:</span>
                    <span>广州市海珠区广州大道</span>
                    <i class="icon-y-j-t row-icons"></i>
                </div>
                <div class="index-1" @click="searchStroke">
                    <i class="icon-sho-sho icon-s-s"></i>
                    <span style="font-size:12px;">搜索药品、症状、品牌、附近药店</span>
                </div>
            </div>
        </div>
        <div class="tops" :style="{display:navTop?'block':'none'}">
            <div class="nav" ref="navss">
                <div class="box" 
                ref="rows"
                v-for="(item,index) in arr" :key="index"
                @click="moreRows(index)"
                :style="{color:subscript==index?'#000':'#000'}"
                >{{item.name}}</div>
                <div class="bg" :style="{left:lefts+'px',width:widths+'px',}">
                    <div class="bgs"></div>
                </div>
            </div>
        </div>
        <div class="mint-indexlist" :style="{marginTop:margintop+'px',height: wrapperHeight + 'px',paddingBottom:margintop+'px'}">
            <div class="all">
                <v-loadmore
                    :topDistance="50"
                    :cancelable='false'
                    :bottomDistance='50'
                    :top-method="loadTop"
                    :bottom-method="loadBottom"
                    :bottom-all-loaded="allLoaded"
                    :auto-fill="false"
                    @bottom-status-change="handleBottomChange"
                    @top-status-change="handleTopChange"
                    ref="loadmore">
                    <!-- 加载的组件 -->
                    <div class="zindex" :style="{height: zindexs + 'px'}">
                        <div class="zindexs" ref="zindexs">
                            <!-- 轮播 -->
                            <swipe></swipe>
                            <!-- 商标 -->
                            <trademark-office></trademark-office>
                            <soll-top></soll-top>
                            <div class="index-img">
                                <img src="@/assets/banner1.jpg" alt="" class="imgs" />
                            </div>

                            <!--横向滚动 -->
                            <tab></tab>
                            <!-- 5折图片 -->
                            <div class="indexImg">
                                <img src="@/assets/banner1.jpg" alt="" class="imgs" />
                            </div>
                        </div>
                    </div>    
                    <div ref="navs" :class="{'nav' : true, 'is-sactive': hidden}">
                        <div class="box" ref="rows" v-for="(item,index) in arr" :key="index" @click="moreRows(index)" :style="{color:subscript==index?'#FB6334':'#000'}">{{item.name}}</div>
                        <div class="bg" :style="{left:lefts+'px',width:widths+'px',}">
                            <div class="bgs"></div>
                        </div>
                    </div>
                    <!--横向最下放滚动 -->
                    <!-- 显示组件 -->
                    <taba-list :list="tabaList"></taba-list>
                    <div slot="top" class="mint-loadmore-top">
                        <img src="@/assets/sx.gif" alt=""  v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }" />
                    </div>
                    <!-- 上拉刷新提示 -->
                    <div slot="bottom" class="mint-loadmore-bottom">
                        <img src="@/assets/sx.gif" alt=""  v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }" />
                    </div>
                </v-loadmore>
            </div>
        </div>    
        <tab-bar subscript='0'></tab-bar>
    </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import { Toast } from 'mint-ui';
import Swipe from './components/swipe';
import TrademarkOffice from './components/Trademark-Office';
import sollTop from './components/sollTop';
import Tab from './components/tab';
import TabaList from './components/taba-list';
// 请求api 封装请求
import Utils from '@/utils';             //公共方法
import Constant from '@/api';            //加载API 模块
const { API_URL } = Constant;            //API 地址
import ListDrug from './components/index.js';
import { Loadmore } from 'mint-ui';
export default {
    name:"vue-scroll",
    components:{
        TabBar,Swipe,TrademarkOffice,sollTop,Tab,TabaList,
        'v-loadmore':Loadmore,
    },
    data:()=>({
        subscript:0,       // 导航显示active
        wrapperHeight: 0,  // 页面总高
        wrapperWidth:0,    // 页面宽
        margintop:0,       // 元素高 
        scrollHight:0,     // 页面滚动       
        arr:ListDrug.arr,  // 导航条静态数据
        lefts:0,           // 滑动偏移位置
        widths:0,          // 滑动偏移的宽
        zindexs:0,         // 定位高度
        hidden:false,      // 导航条的显示隐藏
        navTop:true,       // 头定位导航条的定位位置


        allLoaded: false,  // （当数据加载完时为true）
        bottomStatus:'',   // 下拉提示
        topStatus: '',     // 上拉提示
        // 分页数据
        LOADMORE_COUNT: 10,
        LOADMORE_START: 1,
        page:0,
        btooms:false,


        tabaList:[],       // 请求数据显示
    }),
    watch:{

    },
    created(){
        setTimeout(() => {

        }, 20);
    },
    mounted(){
        // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;
        // 计算固定定位元素的高
        this.margintop =this.$refs.text.offsetHeight;   //mtop 高
        this.zindexs=this.$refs.zindexs.offsetHeight;
        this.wrapperWidth =`${document.documentElement.clientWidth}`;  //获取页面总宽
        this.widths=this.$refs.rows[0].clientWidth;    //获取元素的宽
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件

        this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
   },
    methods:{
        // 地图
        _map(){
            this.$router.push({
                path: '/map'
            });
        },
        searchStroke(){

        },
        // 滑动点击显示商品
        moreRows(index){
            // this.navTop=true;
            this.subscript=index;
            this.lefts=this.widths*this.subscript;
            if(this.wrapperWidth<this.widths*this.subscript+150){
                this.$refs.navss.scrollLeft=this.widths*(this.subscript-3);
                if(!this.hidden){
                    this.$refs.navs.scrollLeft=this.widths*(this.subscript-3);
                }
            }
            if(index==2 || index==0 || index==1 || index==3){
                this.$refs.navss.scrollLeft=0;
                if(!this.hidden){
                    this.$refs.navs.scrollLeft=0;
                }
            }
            if(index==5 &&this.wrapperWidth<this.widths*this.subscript+150){
                this.$refs.navss.scrollLeft=this.widths*(this.subscript-3);
                if(!this.hidden){
                    this.$refs.navs.scrollLeft=this.widths*(this.subscript-3);
                }  
            }

            switch (index){
                case 0:
                     this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;
                case 1:
                     this.tabaList=[1,2,3,4,5,6]
                    break;
                case 2:
                    this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;
                case 3:
                    this.tabaList=[1,1,1,1,1,1,1,1,1,1,1]
                    break;
                case 4:
                    this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;
                case 5:
                     this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;
                case 6:
                     this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;
                case 7:
                     this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;  
                case 8:
                     this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break; 
                case 9:
                     this.tabaList=[1,2,3,4,5,6,7,8,9,0,0,0,0,0]
                    break;   
                    default:break;
            };
     
        },
        handleScroll: function (e) {
            var newPage=this.$refs.navs
            this.scrollHight=e.srcElement.scrollTop;

            if(this.scrollHight>720){
                this.hidden=true;
                this.navTop=true;
            }else if(this.scrollHight<720){
                this.hidden=false;
            }

            if(this.scrollHight<200 && this.scrollHight>20){
                this.navTop=false;
            }

        },


        /**
         * ---------
         * 上拉加载
         * ---------
         * **/   
        handleBottomChange(status) {
            this.bottomStatus = 'drop';
        },
        /***
         * ---------------------
         *  上拉加载（从下向上拉）
         * ---------------------
         * **/  
        loadBottom() { 
            setTimeout(() => {
                Toast('没有更多的数据了');
                this.$refs.loadmore.onBottomLoaded();
            }, 1000);     
        },



        // （从上向下拉）
        loadTop() {
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded();
                Toast('刷新成功');
            }, 1000);
        },
        // （从上向下拉）
        handleTopChange(status) {
            this.topStatus = 'drop';
            this.navTop=false;
        },



    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"            
    .index
        width 100%
        height 100%
        box-sizing border-box    
        overflow hidden 
        background #e6e6e6
        .mint-post
            position fixed
            top 0px
            left 0px
            z-index 1000003
            width 100%
            box-sizing border-box
            background $color-background
            transform: translateZ(0)
            -webkit-transform: translateZ(0)
            height 160px
            .mint-radiolist-titles
                width 100%
                background $color-background-FB6334
                padding-left 20px
                padding-right 20px
                overflow hidden
                box-sizing border-box
                .row
                    display flex
                    flex-direction row
                    align-items center
                    box-sizing border-box
                    padding-top 20px
                    padding-bottom 20px
                    color $color-text-ffffff
                    font-size $font-size-24
                    .lef
                        margin-left 8px
                        margin-right 8px
                    .row-icon
                        font-size $font-size-30 
                    .row-icons
                        font-size $font-size-18
                        margin-left 10px       
                .index-1
                    background $color-background-fff
                    width 100%
                    height 70px
                    display flex
                    align-items center
                    border-radius 5px
                    padding-left 10px
                    color $color-text-868686 
                    box-sizing border-box
                    margin-bottom 20px
                    .icon-s-s
                        font-size $font-size-25
                        position relative
                        top 0px 
                        padding-right 6px  
        .tops
            position fixed
            left 0px
            top 160px
            z-index 10
            width 100%
            box-sizing border-box
            background $color-background
            transform: translateZ(0)
            -webkit-transform: translateZ(0)
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
                    text-align center
                    font-size $font-size-22 !important
                    -ms-flex-negative 0
                    flex-shrink 0
                    padding 15px 0
                    width 150px
                .bg
                    position absolute
                    bottom  18px
                    height 4px
                    padding-left 40px
                    padding-right 40px
                    box-sizing border-box
                    transition all .4s
                    .bgs
                        background $color-background-FB6334  
                        width 100%
                        height 100%                                  
        .mint-indexlist
            width 100%
            box-sizing border-box
            background $color-background-fff
            .all::-webkit-scrollbar 
                display none
            .all::-moz-scrollbar 
                display none 
            .all::-ms-scrollbar 
                display none          
            .all
                width 100%
                box-sizing border-box
                height 100%
                overflow-y scroll
                -webkit-overflow-scrolling:touch 
                padding-bottom 100px
                .zindex
                    z-index 100
                    width 100%
                    box-sizing border-box
                    position relative
                    background #fff
                    .zindexs
                        position absolute
                        top 0px
                        left 0
                        z-index 101
                        box-sizing border-box
                        width 100%
                        background #fff
                        .index-img
                            width 100%
                            height 350px   
                            margin-bottom 20px
                            box-sizing border-box
                            .imgs
                                width 100%
                                height 100%    
                        .indexImg
                            width 100%
                            height 250px
                            padding 10px 20px   
                            box-sizing border-box
                            background $color-background
                            .imgs
                                width 100%
                                height 100% 
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
                    padding-top 10px
                    padding-bottom 10px
                    overflow-x: scroll
                    position relative
                    box-sizing border-box
                    z-index 100000
                    .box
                        text-align: center
                        font-size $font-size-22 !important
                        -ms-flex-negative: 0
                        flex-shrink 0
                        padding 15px 0
                        width 150px
                    .bg
                        position absolute
                        bottom  12px
                        height 4px
                        padding-left 40px
                        padding-right 40px
                        box-sizing border-box
                        transition all .4s
                        .bgs
                            background $color-background-FB6334  
                            width 100%
                            height 100%            
</style>
