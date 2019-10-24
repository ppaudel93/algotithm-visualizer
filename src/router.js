import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutMe from './views/AboutMe.vue'
import Algorithms from './views/algorithms'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe,
    },
    {
      path: '/algorithms',
      name: 'algorithms',
      component: Algorithms,
    }
  ]
})
