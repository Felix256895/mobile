<template>
    <div class="list" @click="handlePath" >
        <div class="list-img" >
            <img :src="require('../../assets/'+img+'.png')" alt="">
        </div>
        <div class="list-title" :style="{borderBottom:solid ? '1PX solid #ddd':''}">
            <span>{{title}}</span>
            <span class="icon-y-j-t font-icon"></span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        img:{
            type:String,
            default:'gold',
        },
        solid:{
            type:Boolean,
            default:true,
        },
        title:{
            type:String,
            default:'我的邦邦币',
        },

    },
    data:()=>({

    }),
    methods:{
        handlePath(){
            this.$emit('incre'); 
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~@/common/stylus/variable"
    .list
        display flex
        align-items center 
        height 90px
        background #fff
        box-sizing border-box
        .list-img
            width 50px
            height 50px
            padding 0 20px
            img 
                max-width 100%
                max-height 100%
        .list-title
            height 90px
            line-height 90px
            flex 1
            display flex
            justify-content space-between
            align-items center
            .font-icon
                display inline-block
                font-size 30px
                padding-right 20px
                color #7e8c8d
</style>