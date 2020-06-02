<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerList" :key="item"> <img :src="item.img_url" ></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['bannerList']
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%;
    }
</style>