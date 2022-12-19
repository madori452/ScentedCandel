import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Admin/Login')
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    children: [{
      path: 'prodcuts',
      component: () => import('../views/Admin/Product')
    },
    {
      path: 'coupon',
      component: () => import('../views/Admin/Coupon')
    },
    {
      path: 'order',
      component: () => import('../views/Admin/Order')
    },
    {
      path: 'article',
      component: () => import('../views/Admin/Article')
    }
    ]
  },
  {
    path: '/user',
    name: 'User',
    // 用戶端導覽列
    component: () => import('../views/Front/UserDashboard'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Front/Index')
      },
      {
        path: 'index',
        component: () => import('../views/Front/Index')
      },
      {
        path: 'products',
        component: () => import('../views/Front/Products')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Front/Product')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/Cart')
      },

      {
        path: 'articles',
        component: () => import('../views/Front/Articles')
      },
      {
        path: 'article/:articleId',
        component: () => import('../views/Front/Article')
      },
      // 用端隱私
      {
        path: 'privacy',
        component: () => import('../views/Front/Privacy')
      },
      {
        path: 'question',
        component: () => import('../views/Front/QA')
      }

    ]
  },
  // 結帳
  {
    path: '/',
    component: () => import('../views/Front/UserDashboard'),

    children: [{
      path: 'checkout/:orderId',
      component: () => import('../views/Front/Checkout')
    }]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 路由點擊active
  linkActiveClass: 'active',
  scrollBehavior (to) {
    if (to.fullPath.match('/')) {
      return {
        top: 0
      }
    }
  }
})

export default router
