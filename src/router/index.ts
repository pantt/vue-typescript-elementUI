import Vue from 'vue'
import Router from 'vue-router'
import SampleList from '@/views/sample/sampleList.vue'
import SampleInfo from '@/views/sample/sampleInfo.vue'
import Login from '@/views/login/login.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'SampleList',
      component: SampleList,
      meta: {
        requireAuth: false
      },
      children: [
        {
          path: 'child',
          name: 'sampleInfo',
          component: SampleInfo
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
