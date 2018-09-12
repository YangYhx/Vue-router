import home from '../components/home'
import Nprogress from 'nprogress'
import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'

Vue.use(Router)
const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   component: home,
    //   name: 'home',
    //   meta: {
    //     title: '首页'
    //   }
    // },
    // {
    //   path: '/about/:id',
    //   component: () => import('../components/about'),
    //   name: 'about',
    //   meta: {
    //     title: '详情页'
    //   }
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../components/login'),
    //   meta: {
    //     title: '登录'
    //   }
    // },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/layout/index.vue'),
      meta: {
        title: '主界面'
      },
      children: [
        {
          path: 'home',
          component: home,
          name: 'home1',
          meta: {
            title: '首页'
          }
        },
        {
          path: 'about/:id',
          component: () => import('../components/about'),
          name: 'about1',
          meta: {
            title: '详情页'
          }
        },
        {
          path: 'login',
          name: 'login1',
          component: () => import('../components/login'),
          meta: {
            title: '登录'
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('feom', from)
  // 进度条   github上可搜
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
