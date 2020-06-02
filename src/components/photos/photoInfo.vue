<template>
    <div class="infoBox">
        <h3 class="title">{{photoInfo.title}}</h3>
        <p class="subtitle">
            <span>发布时间：{{photoInfo.add_time|datawork}}</span>
            <span>点击{{photoInfo.click}}次</span>
        </p>
        <hr>
        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>
        <div class="content" v-text="photoInfo.content">

        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>


<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id,
            photoInfo:{
                id:this.id,
                title:"石家庄化工厂突发爆炸 未发生有毒可燃气体泄漏",
                click:6,
                add_time:Date.now(),
                content:"5月8日，河北石家庄。23时许，循环化工园区晋煤金石石家庄循环化工园区分公司合成车间甲醇回收装置蒸汽汽包发生爆裂，经初查，无人员伤亡，未发生有毒可燃气体泄漏。更多报道：晋煤金石石家庄循环化工园区分公司甲醇回收装置蒸汽汽包发生爆裂来源：河北石家庄循环化工园区2020年5月8日23时35分，河北石家庄循环化工园区晋煤金石石家庄循环化工园区分公司合成车间甲醇回收装置蒸汽汽包发生爆裂，园区主要领导和分管领导，以及应急、环保、消防、公安、交管等部门第一时间赶赴现场，经现场初步核查，无人员伤亡，未发生有毒可燃气体泄漏，周边企业未受到影响，现场情况稳定，正在进行后续处理，无次生灾害。"
            },
            list:[{
                    src:"https://file06.16sucai.com/2018/0129/2af1709ecb5555940ca57f39378b7623.jpg",
                    msrc:"https://file06.16sucai.com/2018/0129/2af1709ecb5555940ca57f39378b7623.jpg",
                    w: 600,
                    h: 400
                    },
                    {
                    src:"https://file06.16sucai.com/2017/1103/aadf67472beee742f43f4f33fb657abb.jpg",
                    msrc:"https://file06.16sucai.com/2017/1103/aadf67472beee742f43f4f33fb657abb.jpg",
                    w: 600,
                    h: 400
                    },
                    {
                    src:"https://file03.16sucai.com/2017/1100/16sucai_P59202D177.JPG",
                    msrc:"https://file03.16sucai.com/2017/1100/16sucai_P59202D177.JPG",
                    w: 600,
                    h: 400
                    },
                    {
                    src:"https://file03.16sucai.com/2017/1100/16sucai_P59202D005.JPG",
                    msrc:"https://file03.16sucai.com/2017/1100/16sucai_P59202D005.JPG",
                    w: 600,
                    h: 400
                    }]
        }
    },
    created(){

    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(res =>{
                if(res.body.status === 0){
                    this.photoInfo = res.body.message
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/'+this.id).then(res =>{
                if(res.body.status === 0){
                    res.body.message.forEach(item =>{
                        item.w = 600
                        item.h = 400
                    })
                    this.list = res.body.message
                }
            })
        },
        handleClose () {
        console.log('close event')
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>


<style lang="scss" >
.infoBox{
    padding: 0 4px;
    .title{
        color: #226aff;
        text-align: center;
        font-size: 16px;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color: #ccc;
        display: flex;
        justify-content: space-between;
        
    }
    .thumbs{
        .my-gallery{
            figure{
                display: inline-block;
                margin: 8px;
                a{
                    img{
                        width: 80px;
                        height: 60px;
                    }
                }
            }
        }
    }
    .content{
    }
}

</style>