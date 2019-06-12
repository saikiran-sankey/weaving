import Vue from 'vue'
import VueRouter from 'vue-router'

import MainMaster from './components/MainMaster.vue'
import AccountMaster from './components/AccountMaster.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'main_master',
    path: '/main_master',
    component: MainMaster
  },
  {
    name: 'account_master',
    path: '/account_master',
    component: AccountMaster,
  }
]


const Router = new VueRouter({
  routes: routes,
})


export default Router
