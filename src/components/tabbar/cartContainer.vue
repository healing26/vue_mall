<template>
    <div class="carshop">
        <div class="car-list">
            <div class="mui-card" v-for="(item, i) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch v-model="$store.getters.getGoodsSeletc[item.id]" @change="changeSelected(item.id)"></mt-switch>
                        <img src="https://img14.360buyimg.com/n0/jfs/t1/87471/28/14430/172200/5e662061Ea03a4d51/bf964109683a907b.jpg" alt="">
                        <div class="info">
                            <h1>小米Note 16G</h1>
                            <p>
                                <span class="price">￥699</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>

        <div class="mui-card">
			<div class="mui-card-content ">
				<div class="mui-card-content-inner total">
					<div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品  <span class="red">{{ $store.getters.getCountAndAmount.count}}</span> 件，总价<span class="red">￥{{ $store.getters.getCountAndAmount.amount}}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
        
    </div>
</template>
<script>
import numbox from '../subcomponents/carlist_numbox.vue'
export default {
    data(){
        return{
            goodsList:[],
        }
    },
    created(){
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.goodsList = this.$store.state.car
        },
        remove(id,i){
            this.goodsList.splice(i,1)
            this.$store.commit('removeFromCar', id)
        },
        changeSelected(id,val){
            this.$store.commit('updateSelect',{id,val})
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>
.carshop{
    overflow: hidden;
    .car-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        .info{
            h1{
                font-size: 13px;
            }
            .price{
                font-size: 13px;
                font-weight: bold;
                color: red;
            }
        }
    }
    .total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            .red{
                font-size: 16px;
                font-weight: bold;
                color: red;
            }
        }
    }
}
    
</style>