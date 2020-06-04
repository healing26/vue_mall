import Vue from 'vue'
import app from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{
        car:car,
    },
    mutations:{
        addToCar(state,goodsinfo){
            var flag = false
            state.car.some(item => {
                if(item.id === goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsCar(state,goodsinfo){
            state.car.some(item=>{
                if(item.id === goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            state.car.some((item,i) => {
                if(item.id === id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateSelect(state,{id,val}){
            state.car.some(item=>{
                if(item.id === id){
                    item.selected = val
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },

    },
    getters:{
        getAllCount(state){
            var c =0
            state.car.forEach(item =>{
                c += item.count
            })
            return c
        },
        getGoodsCount(state){
            var o ={}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSeletc(state){
            var i ={}
            state.car.forEach(item => {
                i[item.id] = item.selected
            })
            return i
        },
        getCountAndAmount(state){
            var j ={
                count:0,
                amount:0
            }
            state.car.forEach(item => {
                j.count += item.count
                j.amount += item.count*item.price
            })
            return j
        }
    }
})


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateJSON=true


// import {Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import moment from 'moment'

Vue.filter('datawork', function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

import router from './router.js'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router,
    store
})
