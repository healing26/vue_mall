<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入评论内容" maxlength="120"></textarea>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="i">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|datawork}}
                </div>
                <div class="cmt-body"> {{item.comment}}</div>
            </div>
        </div>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageindex:1,
            comments:[
                {
                    user_name:"匿名用户",
                    add_time:"2019-04-17T07:15:33",
                    comment:"hahahhahhah"
                },
                {
                    user_name:"匿名用户",
                    add_time:"2019-04-17T07:15:33",
                    comment:"hahahhahhah"
                },
                {
                    user_name:"匿名用户",
                    add_time:"2019-04-17T07:15:33",
                    comment:"hahahhahhah"
                },
                {
                    user_name:"匿名用户",
                    add_time:"2019-04-17T07:15:33",
                    comment:"hahahhahhah"
                },

            ]
        }
    },
    created(){

    },
    methods:{
        getcomment(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(res => {
                if(res.body.status === 0){
                    this.comments = res.body.message
                    console.log(res.body.message)
                }else{
                    Toast("新闻列表加载失败")
                }
            })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 30px;
                text-indent: 2em;
            }
        }
    }
}

</style>