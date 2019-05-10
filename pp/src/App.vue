<template>
  <div id="app">
      <!-- 可以提升体验，就是改变窗口时，内容不刷新 -->
      <!-- <keep-alive> -->
      <!-- 变成div -->
    <router-view tag="div" v-if="isRouterAlive"></router-view>
      <!-- </keep-alive> -->
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    name: 'App',
    data:()=>({
        isRouterAlive:true,
    }),
    mounted() {
        document.body.addEventListener('focusout', function () {
            window.scrollTo(0,0);
        });
    },
    provide (){
        return {
            reload:this.reload
        }
    },
    methods:{
        reload (){
            this.isRouterAlive=false;
            this.$nextTick(function(){
                this.isRouterAlive =true;
            });
        },
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import 'vant/lib/index.css' 
    @import 'mint-ui/lib/style.css' 
    @import '~@/common/stylus/mtin.styl';  //自定义框架css修改';

</style>
