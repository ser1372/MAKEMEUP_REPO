import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/Auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = authStore.isAuthenticated

  // Если требуется авторизация и пользователь не авторизован
  if (requiresAuth && !isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    })

    return
  }

  // Если пользователь авторизован и пытается перейти на страницу входа
  if (to.path === '/login' && isAuthenticated) {
    next('/dashboard')

    return
  }

  // Если нет соответствия маршруту и пользователь авторизован
  if (to.matched.length === 0 && isAuthenticated) {
    next('/dashboard')

    return
  }

  // Если нет соответствия маршруту и пользователь не авторизован
  if (to.matched.length === 0 && !isAuthenticated) {
    next('/404')

    return
  }

  next()
})



export default router
