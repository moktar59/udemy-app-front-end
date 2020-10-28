import Vue from 'vue'
import VueRouter from 'vue-router'
import Example2 from '../components/Example2'
import Bookables from '../bookables/Bookables'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Bookables
  },
  {
    path: '/second',
    name: 'second',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Example2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
