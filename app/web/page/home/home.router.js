import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/component/common/HomePage'
import Download from '@/component/common/Download'
import News from '@/component/common/News'
import CompanyProfile from '@/component/CompanyProfile'

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
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/companyProfile',
      name: 'CompanyProfile',
      component: CompanyProfile
    }
  ]
})