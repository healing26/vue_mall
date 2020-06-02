<template>
    <div>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a  :class="['mui-control-item',item.id==0?'mui-active':'']"  v-for="item in category" :key="item.id" @click="getPhotoList(item.id)">
						{{ item.title }}
					</a>
					
				</div>
			</div>
		</div>
        <div>
            <ul class="photolist">
              <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="title">{{ item.title}}</h1>
                    <div class="zhaiyao">{{item.zhaiyao}}</div>
                </div>
              </router-link>
            </ul>
        </div>
    </div>
</template>


<script>
import mui from '../../lib/mui/js/mui.js'

export default {
    data(){
        return{
            category:[
                { title:"全部",id:0 },
                { title:"推荐",id:1 },
                { title:"热点",id:2 },
                { title:"北京",id:3 },
                { title:"社会",id:4 },
                { title:"娱乐",id:5 },
                { title:"科技",id:6 },
                { title:"家居生活",id:7 },
                { title:"摄影摄像",id:8 },
                { title:"汽车",id:9 }
            ],
            list:[
                {
                    id:50,
                    title:"有气质的可爱女孩图片",
                    img_url:"https://file06.16sucai.com/2018/0129/2af1709ecb5555940ca57f39378b7623.jpg",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:51,
                    title:"有气质的可爱女孩图片",
                    img_url:"https://file06.16sucai.com/2017/1103/aadf67472beee742f43f4f33fb657abb.jpg",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:52,
                    title:"张开血盆大口的狮子侧面特写高清",
                    img_url:"https://file03.16sucai.com/2017/1100/16sucai_P59202D177.JPG",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:53,
                    title:"草原上吃草的奶牛高清图片",
                    img_url:"https://file03.16sucai.com/2017/1100/16sucai_P59202D005.JPG",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:54,
                    title:"绿色牧场中的牛群高清图片",
                    img_url:"https://file03.16sucai.com/2017/1100/16sucai_P59202D003.JPG",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:55,
                    title:"有气质的可爱女孩图片",
                    img_url:"https://file06.16sucai.com/2018/0129/b0576706b301ff425ef1e50b17022037.jpg",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:56,
                    title:"有气质的可爱女孩图片",
                    img_url:"https://file06.16sucai.com/2018/0129/14658e8a1e9a6123fa6524219cf41e2f.jpg",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"

                },
                {
                    id:57,
                    title:"有气质的可爱女孩图片",
                    img_url:"https://file06.16sucai.com/2018/0129/1bff0b3657d5399908918e7afbc22bde.jpg",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"
                },
                {
                    id:58,
                    title:"有气质的可爱女孩图片",
                    img_url:"https://file06.16sucai.com/2018/0129/6b21f05fce48a5391287789f33a065ef.jpg",
                    zhaiyao:"元前1000年发源于北极陆地，有多种颜色的毛皮，耳朵竖起，长长的尾巴卷曲在背上。浓密的皮毛能够抵御低于冰点的温度。机械化出现之前是生活在极地居民的最重要交通运输工具。"
                },
            ]
        }
    },
    created(){
        this.getAllCategory()
        this.getPhotoList(0)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
        	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getAllCategory(){
            this.$http.get('api/getimgcategory').then(res =>{
                if(res.body.status === 0){
                    res.body.message.unshift({ title:"全部",id:0})
                    this.category = res.body.message
                }
            })
        },
        getPhotoList(id){
            this.$http.get('api/getimages/'+ id).then(res =>{
                if(res.body.status === 0){
                    this.list = res.body.message
                }
            })
        }
    }


}
</script>

<style lang="scss" scoped>
    *{
        touch-action: pan-y;
    }

    .photolist{
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li{
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
                box-shadow: 0 0 9px #999;
            }
            image[lazy=loading] {
              width: 40px; 
              height: 300px;
              margin: auto;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                max-height: 84px;
                .title{
                    font-size: 14px;
                }
                .zhaiyao{
                    font-size: 13px;
                }
            }
        }
    }
</style>