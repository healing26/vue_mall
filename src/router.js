import VueRouter from 'vue-router'

import homeContainer from './components/tabbar/homeContainer.vue'
import cartContainer from './components/tabbar/cartContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'

import newsList from './components/news/newsList.vue'
import newInfo from './components/news/newsInfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',component:homeContainer},
    {path:'/home',component:homeContainer},
    {path:'/cart',component:cartContainer},
    {path:'/member',component:memberContainer},
    {path:'/search',component:searchContainer},
    {path:'/home/newslist',component:newsList},
    {path:'/home/newsinfo/:id',component:newInfo},

  ],
  linkActiveClass:'mui-active'//修改默认样式
})

// 把路由对象暴露出去
export default router