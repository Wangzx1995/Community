// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";

import '@/styles/index.scss' // global css
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/icons' // icon
import './mock' // simulation data
import {
    getToken
} from '@/utils/auth'
import { isEmpty, isNotEmpty } from '@/utils'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI);

NProgress.configure({
    easing: 'ease', // 动画方式    
    speed: 500, // 递增进度条的速度    
    showSpinner: true, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
    // console.log(to.path)
    NProgress.start();

    if (whiteList.indexOf(to.path) != -1) {
        next()
    } else {
        const userInfo = getToken()
        if (userInfo) {
            next();
        } else {
            // const token = utils.getQueryString('Admin-Token');
            // if (utils.isNotEmpty(token)) {
            //     next();
            // } else {
            router.push({ path: '/login' })
            next();
            // }
        }
    }
});

router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done()
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})