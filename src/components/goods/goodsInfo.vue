<template>
    <div class="goodsinfo">
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :bannerList="lunbotu"></swiper>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
				</div>
			</div>

		</div>
        <div class="mui-card">
			<div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
				</div>
			</div>
			<div class="mui-card-footer">页脚</div>
		</div>
        
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'

export default {
    
    data(){
        return{
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
        
    },
    components:{
        swiper
    }
}
</script>

<style lang="scss" scoped>

</style>