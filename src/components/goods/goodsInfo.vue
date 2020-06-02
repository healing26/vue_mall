<template>
    <div class="goodsinfo">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :bannerList="lunbotu" :isfull="false"></swiper>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">小米Note 16G</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥3699</del>&nbsp;&nbsp;&nbsp;销售价：<span>￥2199</span>
                    </p>
                    <p>购买数量:<numbox></numbox></p>
                    <span>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </span>
				</div>
			</div>

		</div>
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：</p>

				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" @click="goComment(id)">商品评论</mt-button>
            </div>
		</div>
        
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
    
    data(){
        return{
            id:this.$route.params.id,
            lunbotu:[{
                img_url:"https://img14.360buyimg.com/n0/jfs/t1/87471/28/14430/172200/5e662061Ea03a4d51/bf964109683a907b.jpg"
            },
            {
                img_url:"https://img14.360buyimg.com/n0/jfs/t1/92972/40/14113/117019/5e622d85E330b75f9/e793f3f3e2310646.jpg"
            },
            {
                img_url:"https://img14.360buyimg.com/n0/jfs/t1/98447/31/14147/189150/5e622d85E5c0a06ec/a9ba9d2c874974e0.jpg"
            },
            {
                img_url:"https://img14.360buyimg.com/n0/jfs/t1/102649/14/14206/142144/5e622d89E073520fb/5df216a1c008604d.jpg"
            }]
        }
    },
    created(){

    },
    methods: {
        goDesc(id){
            this.$router.push({path:'/home/goodsDesc/'+id})
        },
        goComment(id){
            this.$router.push({name:'goodscomment',params:{id}})
        }
        
    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo{
    .price{
        color: #000;
        span{
            color: red;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
}

</style>