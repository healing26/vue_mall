<template>
    <div class="infoBox">
        <h3 class="title">{{newInfo.title}}</h3>
        <p class="subtitle">
            <span>发布时间：{{newInfo.add_time|datawork}}</span>
            <span>点击{{newInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-text="newInfo.content">

        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>


<script>
import {Toast} from 'mint-ui'

import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id,
            newInfo:{
                id:this.id,
                click:6,
                add_time:"2019-04-17T07:15:33",
                title:"石家庄化工厂突发爆炸 未发生有毒可燃气体泄漏",
                content:"5月8日，河北石家庄。23时许，循环化工园区晋煤金石石家庄循环化工园区分公司合成车间甲醇回收装置蒸汽汽包发生爆裂，经初查，无人员伤亡，未发生有毒可燃气体泄漏。更多报道：晋煤金石石家庄循环化工园区分公司甲醇回收装置蒸汽汽包发生爆裂来源：河北石家庄循环化工园区2020年5月8日23时35分，河北石家庄循环化工园区晋煤金石石家庄循环化工园区分公司合成车间甲醇回收装置蒸汽汽包发生爆裂，园区主要领导和分管领导，以及应急、环保、消防、公安、交管等部门第一时间赶赴现场，经现场初步核查，无人员伤亡，未发生有毒可燃气体泄漏，周边企业未受到影响，现场情况稳定，正在进行后续处理，无次生灾害。"
            }
        }
    },
    created(){
        this.getnewsInfo()
    },
    methods:{
        getnewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(res =>{
                 if(res.body.status === 0){
                    this.newInfo = res.body.message
                    console.log(res.body.message)
                    Toast("新闻列表加载失败")
                    console.log('111')

                }else{
                    Toast("新闻列表加载失败")
                }
            })
        }
    },
    components:{
        "comment-box":comment
    }
}
</script>

<style lang="scss" scoped>
.infoBox{
    padding: 0 4px;
    .title{
        color: red;
        text-align: center;
        font-size: 16px;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
        
    }
    .content{
    }
}

</style>