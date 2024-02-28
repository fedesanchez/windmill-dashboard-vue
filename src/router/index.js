import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Default',
      path: '/',
      redirect: { name: 'Login' },
      children: [
        {
          path: '/login',
          name: 'Login',
          meta: { layout: 'NoLayout' }, //This is important to ignore base layout (App.vue)
          component: () => import('@/pages/Login.vue')
        },
        {
          path: '/create-account',
          name: 'Create Account',
          meta: { layout: 'NoLayout' },
          component: () => import('@/pages/CreateAccount.vue')
        },
        {
          path: '/forgot-password',
          name: 'Forgot Password',
          meta: { layout: 'NoLayout' },
          component: () => import('@/pages/ForgotPassword.vue')
        }
      ]
    },
    {
      name: 'App',
      path: '/app',
      redirect: { name: 'Dashboard' }
    },
    {
      path: '/app/dashboard',
      name: 'Dashboard',
      component: () => import('@/pages/Dashboard.vue')
    },
    {
      path: '/app/forms',
      name: 'Forms',
      component: () => import('@/pages/Forms.vue')
    },
    {
      path: '/app/cards',
      name: 'Cards',
      component: () => import('@/pages/Cards.vue')
    },
    {
      path: '/app/modals',
      name: 'Modals',
      component: () => import('@/pages/Modals.vue')
    },
    {
      path: '/app/buttons',
      name: 'Buttons',
      component: () => import('@/pages/Buttons.vue')
    },
    {
      path: '/app/charts',
      name: 'Charts',
      component: () => import('@/pages/Charts.vue')
    },
    {
      path: '/app/tables',
      name: 'Tables',
      component: () => import('@/pages/Tables.vue')
    },
    {
      path: '/app/404',
      name: '404',
      component: () => import('@/pages/404.vue')
    },
    {
      path: '/app/blank',
      name: 'Blank',
      component: () => import('@/pages/Blank.vue')
    }
  ]
})

export default router
