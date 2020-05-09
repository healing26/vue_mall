<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'><span>发布时间：{{item.add_time|datawork}}</span><span>点击{{item.click}}次</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            newsList:[
                {id:1,
                title:"31省区市新增1例境外输入病例",
                add_time:"2019-04-16T03:05:28",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:1,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:2,
                title:"美国副总统彭斯助手确诊新冠肺炎",
                add_time:"2019-04-17T07:15:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:4,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:3,
                title:"黑龙江受虐女童抚养权变更为生母",
                add_time:"2019-04-16T03:26:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:1414,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:4,
                title:"石家庄化工厂突发爆炸",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:2525,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:5,
                title:"白岩松对话姚明",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:324,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:6,
                title:"波兰女儿村时隔10年喜诞男婴",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:666,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:7,
                title:"安哥拉当地大老爹去世",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:14341,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:8,
                title:"白岩松对话姚明",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:324,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:9,
                title:"波兰女儿村时隔10年喜诞男婴",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:666,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:11,
                title:"安哥拉当地大老爹去世",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:14341,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:10,
                title:"白岩松对话姚明",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:324,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:12,
                title:"波兰女儿村时隔10年喜诞男婴",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:666,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"},
                {id:13,
                title:"安哥拉当地大老爹去世",
                add_time:"2019-04-16T09:56:33",
                zhaiyao:"31省区市新增1例境外输入病例;无新增死亡病例",
                click:14341,
                img_url:"https://himg.bdimg.com/sys/portraitn/item/789dc4e3cac7d5e6d0c4cba7f231"}
                ]
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get("api/getnewslist").then(res => {
                if(res.body.status === 0){
                    this.newsList = res.body.message
                    console.log(res.body.message)
                }else{
                    Toast("新闻列表加载失败")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: rgb(29, 152, 253);
            display: flex;
            justify-content: space-between;
        }

    }
}


</style>