<template>
    <div class="content">
        <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
            <img :src="item.img_url" :alt="item.zhaiyao">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>已售{{item.stick_quantity}}件</span>
                </p>
            </div>
        </router-link> -->
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" :alt="item.zhaiyao">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>已售{{item.stick_quantity}}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageindex:1,
            goodsList:[
                {
                    id:87,
                    title:"小爱触屏音箱 白色",
                    add_time:Date.now(),
                    zhaiyao:"小爱触屏音箱 白色",
                    click:0,
                    img_url:"https://img12.360buyimg.com/n7/jfs/t1/113396/8/6216/69786/5eb9580cE2a2b31c2/1e9630eec678a0af.jpg",
                    sell_price:2195,
                    market_price:2499,
                    stick_quantity:60
                },
                {
                    id:88,
                    title:"小爱触屏音箱 白色 爱奇艺视频|QQ音乐曲库|语音电话|600+实用技能",
                    add_time:Date.now(),
                    zhaiyao:"小爱触屏音箱 白色 爱奇艺视频|QQ音乐曲库|语音电话|600+实用技能",
                    click:0,
                    img_url:"https://img10.360buyimg.com/n7/jfs/t1/65335/35/9428/79084/5d732185E6e3f17a6/3fa209826bbd2e30.jpg",
                    sell_price:3195,
                    market_price:4499,
                    stick_quantity:60
                },
                {
                    id:89,
                    title:"小爱触屏音箱 白色",
                    add_time:Date.now(),
                    zhaiyao:"小爱触屏音箱 白色",
                    click:0,
                    img_url:"https://img11.360buyimg.com/n7/jfs/t1/92535/31/16149/430668/5e78a968E85dd1136/9f57c93b0a17b758.jpg",
                    sell_price:5195,
                    market_price:6499,
                    stick_quantity:60
                },
                {
                    id:90,
                    title:"小米 Air2 SE真无线蓝牙耳机 通话降噪 蓝牙耳机 迷你入耳式手机耳机",
                    add_time:Date.now(),
                    zhaiyao:"小爱触屏音箱 白色",
                    click:0,
                    img_url:"https://img12.360buyimg.com/n7/jfs/t1/116157/25/8911/214546/5ed3d3b7E7936e3fe/6abc0386770fc7c2.jpg",
                    sell_price:5195,
                    market_price:6499,
                    stick_quantity:60
                },
                {
                    id:891,
                    title:"小米手表 典雅黑 智能手表 高清彩屏内置小爱同学语音操控",
                    add_time:Date.now(),
                    zhaiyao:"小爱触屏音箱 白色",
                    click:0,
                    img_url:"https://img11.360buyimg.com/n7/jfs/t1/113798/7/9022/126154/5ed60c3eEba2aed46/7174dd8bd11c711e.jpg",
                    sell_price:5195,
                    market_price:6499,
                    stick_quantity:60
                },
            ]
        }
    },
    created(){

    },
    methods: {
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(res => {
                 if(res.body.status === 0){
                    this.goodsList = this.goodsList.concat(res.body.message)
                }
            })
        },
        getMore(){
            this.pageindex++
            this.getGoodsList(

            )
        },
        goDetail(id){
            this.$router.push('/home/goodsinfo/'+id)
        }
    },
}
</script>

<style lang="scss" scoped>
    .content{
        display: flex;
        flex-wrap: wrap;
        padding: 0 7px ;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%;

            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .new{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }

</style>