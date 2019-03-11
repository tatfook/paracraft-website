import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/component/common/HomePage'
import Download from '@/component/common/Download'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})