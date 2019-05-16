import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/component/common/HomePage'
import Download from '@/component/common/Download'
import News from '@/component/common/News'
import EmailContent from '@/component/common/EmailContent'
import CompanyProfile from '@/component/CompanyProfile'
import Curriculum from '@/component/common/Curriculum'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
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
    },
    {
      path: '/ceo_letter',
      name: 'EmailContent',
      component: EmailContent
    },
    {
      path: '/curriculum',
      name: 'Curriculum',
      component: Curriculum
    }
  ]
})