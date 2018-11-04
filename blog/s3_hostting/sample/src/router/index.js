import Vue from 'vue'
import Router from 'vue-router'
import LP1 from '@/components/LP1'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lp1',
      name: 'LP1',
      component: LP1
    }
  ]
})
