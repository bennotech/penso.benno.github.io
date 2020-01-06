import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import error from '@/components/error-page'

import bennoNavbar from '@/components/benno-navbar'

Vue.component('benno-navbar', bennoNavbar)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '*', name: 'error-page', component: error }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }

})
