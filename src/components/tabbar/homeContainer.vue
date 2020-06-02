<template>
    <div>
        <swiper :bannerList="bannerList" :isfull="true"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../img/menu1.png" alt="">
                    <div class="mui-media-body">新闻咨询</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../img/menu4.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../img/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu2.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
        <h3>aaaaa</h3>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'

export default{
    data(){
        return{
            bannerList:[{
                img_url:'http://file06.16sucai.com/2016/0222/17714c3b51079911760e5ef7fdb553f6.jpg',
            },{
                img_url:'http://file07.16sucai.com/dysucai/content/20200415/fisdfbjaf2w.jpg',
            },{
                img_url:'http://file06.16sucai.com/2016/0315/1df566087c24a94cd9534bc9bc1871ff.jpg',
            },{
                img_url:'http://file07.16sucai.com/dysucai/content/20200415/a54fdizh0xy.jpg'
            }]
        }
    },
    created(){
        this.getBanner()
    },
    methods:{
        getBanner(){
            this.$http.get("api/getlunbo").then(res => {
                if(res.body.status === 0){
                    this.bannerList = res.body.message
                    console.log(res.body.message)
                }else{
                    Toast("轮播图加载失败")
                }
            })
        }
    },
    components:{
        swiper
    }
}

</script>

<style scoped>

    .mui-grid-view.mui-grid-9{
        background-color: #fff;

    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    .mui-grid-9 img{
        height: 60px;
        width: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }

</style>