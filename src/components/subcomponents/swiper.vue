<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in bannerList" :key="i"> <img :src="item.img_url" :class={full:isfull}></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
    data(){
        return{

        }
    },
    props:['bannerList','isfull']
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
        img{
            height: 100%;
        }
    }
    .full{
        width: 100%;
    }
</style>