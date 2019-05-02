<template>
    <div class="amap" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <div class="amap-page-container" ref="text">
            <el-amap-search-box class="search-box"
            :search-option="searchOption" 
            :on-search-result="onSearchResult"></el-amap-search-box>
            <el-amap vid="amapDemo" 
            :amap-manager="amapManager" 
            :isHotspot='true'
            :zooms="[3,19]"
            :center="center"	
            :bubble='true'
            :content="windows.content"
            :zoom="12"
            ref="map" 
            :plugin="plugin" 
            :events="events"
            class="amap-demo">
                <el-amap-marker vid="component-marker" 
                :position="componentMarker.position" 
                :content-render="componentMarker.contentRender" ></el-amap-marker>
                
                <el-amap-marker v-for="(marker, index) in markers" 
                :position="marker.position" :events="marker.events" :visible="marker.visible" 
                :draggable="marker.draggable" :vid="index" :key="index"></el-amap-marker> 

            </el-amap>
        </div>
        <div class="toolbar" :style="{ height: wrapperHeight-topHeight + 'px' }">
            <div class="toolbar-box" style="border-bottom:1px solid #e6e6e6" v-for="(v,index) in arr" :key="index">
                <span>深圳就是欧迪还是</span>
                <i class="icon-y-j-t icon-font"></i>
            </div>
        </div>
    </div>   
</template>
<script>
import { AMapManager } from 'vue-amap';
export default {
    components:{

    },
    data:()=>({
          amapManager:'',
          zoom: 12,
          center: [121.1, 31.2],
          searchOption: {
            city: '上海',
            citylimit: false
          },
          windows: {
            position:  [121.59996, 31.197646],
            content: 'content'
          },
          arr:[1,2,3,4,5,3,4,5],


          wrapperHeight:0,
          topHeight:0,

          center: [121.5273285, 31.21515044],
          count: 1,
          markers: [   //点击坐标
            {
              position: [121.5273285, 31.21515044],
              events: {
                click: () => {
                    console.log('坐标位置')
                    this.arr=[]
                     console.log(this.arr)
                },
                dragend: (e) => {
                  console.log(e)
                }
              },
              visible: true,
              draggable: false,
              template: '<span>我打扫房间汇顶科技1复活甲十多个</span>',
            }
          ],
           renderMarker: {
            position: [121.5273285, 31.21715058],
            contentRender: (h, instance) => {
              return h(
                'div',
                {
                  style: {background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'},
                  on: {
                    click: () => {
                      const position = this.renderMarker.position;
                      this.renderMarker.position = [position[0] + 0.002, position[1] - 0.002];
                    }
                  }
                },
                ['marker inner text']
              )
            }
          },
          componentMarker: {
            position: [121.5273285, 31.21315058],
            contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: 'father is here'}}, ['xxxxxxx'])
          },
          slotMarker: {
            position: [121.5073285, 31.21715058]
          },

          events: {
            init: (o) => {
              console.log(o+'0')
            //   o.getCity(result => {
            //     console.log(result)
            //   })
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
                console.log(e)    //坐标
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }]
    }),
    watch:{

    },
    created(){
       
    },
    mounted(){
          // 计算高度
        window.onresize = function temp() {
            this.wrapperHeight =`${document.documentElement.clientHeight}` -this.$refs.wrapper.getBoundingClientRect().top;
        };
        this.wrapperHeight =`${document.documentElement.clientHeight}`- this.$refs.wrapper.getBoundingClientRect().top;   
        this.topHeight =this.$refs.text.offsetHeight;   //mtop 高
                
    },
    methods:{
        onSearchResult(pois) {
            console.log(pois)
        }
    },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable" 
    .amap
        width 100%
        height 100%
        box-sizing border-box
        .amap-page-container 
            position: relative
            box-sizing border-box
            width 100%
            .el-vue-search-box-container
                width 75% !important    
            .amap-demo 
                height: 600px
            .search-box 
                position: absolute;
                top: 25px;
                left: 20px;
        .toolbar::-webkit-scrollbar 
            display none
        .toolbar::-moz-scrollbar 
            display none 
        .toolbar::-ms-scrollbar 
            display non        
        .toolbar
            width 100%
            overflow-y scroll
            box-sizing border-box  
            -webkit-overflow-scrolling:touch 
            .toolbar-box
                display flex
                width 100%
                height 120px
                align-items center
                justify-content space-between
                padding-left 30px
                padding-right 30px
                font-size $font-size-28
                box-sizing border-box 
                .icon-font
                    font-size $font-size-50
            


</style>