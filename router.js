import Vue from 'vue'
//import Router from 'vue-router'


import RUS from '@/components/RUS'
import MENY from '@/components/MENY'
import news from '@/components/news'
import complex from '@/components/complex'
import freeaudit from '@/components/freeaudit'
import navigation from "@/components/navigation";
import sleepmenu from "@/components/sleepmenu";
import Router from "vue-router";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/RUS',
            name: 'RUS',
            component: RUS
        },
        {
            path: '/MENY',
            name: 'MENY',
            component: MENY
        },
        {
            path: '/navigation',
            name: 'navigation',
            component: navigation
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/complex',
            name: 'complex',
            component: complex
        },
        {
            path: '/freeaudit',
            name: 'freeaudit',
            component: freeaudit
        },
        {
            path: '/',
            name: 'sleepmenu',
            component: sleepmenu
        }

]})
