import home from '../components/home'
import Nprogress from 'nprogress'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      name: 'home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about/:id',
      component: () => import('../components/about'),
      name: '详情'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login'),
      meta: {
        title: '登录'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})
export default router
