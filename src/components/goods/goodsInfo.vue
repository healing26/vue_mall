<template>
    <div class="goodsinfo">
        <transition
            @before-enter="beforenter"
            @enter="enter"
            @after-enter="afterenter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
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
                    <p>购买数量:<numbox @getCount="getSelectCount" :max="maxNum"></numbox></p>
                    <span>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="goCart">加入购物车</mt-button>
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
            }],
            ballFlag:false,
            selectCount:'',
            maxNum:10
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
        },
        goCart(){
            this.ballFlag = !this.ballFlag
        },
        beforenter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth
            const ballposition = this.$refs.ball.getBoundingClientRect()
            const badgeposition = document.getElementById("badge").getBoundingClientRect()
            const xDist = badgeposition.left - ballposition.left
            const yDist = badgeposition.top - ballposition.top
            el.style.transform= `translate(${xDist}px,${yDist}px)`
            el.style.transition= "all 1s ease"
            done()
        },
        afterenter(el){
            this.ballFlag = !this.ballFlag
        },
        getSelectCount(count){
            this.selectCount = count
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
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 100%;
        position: absolute;
        z-index: 99;
        background-color: red;
        top: 390px;
        left: 137px;
    }
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