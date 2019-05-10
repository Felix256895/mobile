<template>
    <div class="my-list">
        <div class="list-header">
            <span>0112211222</span>
            <span>取消订单</span>
        </div>
        <div class="list-content">
            <div class="list-content-img">
                <img src="" alt="">
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="list-price">
            
        </div>
        <div class="list-footer">

        </div>
        {{active}}
    </div>
</template>
<script>
export default {
    props:{
        active: {
            type:Number,
            default:0,
        }, 
    },
    data:()=>({
        // list:[]
    }),
    mounted(){
        console.log(this.active);
    },
    methods:{
        
    }
}
</script>
<style lang="stylus" scoped>
    @import "~@/common/stylus/variable"
    .my-list
        height 300px
        background #fff
        margin-top 15px
</style>

