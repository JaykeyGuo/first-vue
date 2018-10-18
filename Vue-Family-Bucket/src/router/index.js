import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JaykeyInfo from '@/components/JaykeyInfo'
import JavirsInfo from '@/components/JavirsInfo'
import MJGInfo from '@/components/MJGInfo'
import Nobody from '@/components/Nobody'
import MBUI from '@/components/MBUI'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nobody',
      name: 'nobody',
      component: Nobody
    },
    {
      path: '/jaykey-info',
      name: 'jaykey-info',
      component: JaykeyInfo
    },
    {
      path: '/javirs-info',
      name: 'javirs-info',
      component: JavirsInfo
    },
    {
      path: '/mjg-info',
      name: 'mjg-info',
      component: MJGInfo
    },
    {
      path: '/mb-ui',
      name: 'mb-ui',
      component: MBUI
    }
  ]
})
