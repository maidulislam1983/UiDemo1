export default [
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/authentication/Login.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/register',
    name: 'auth-register',
    component: () => import('@/views/authentication/Register.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/authentication/ForgotPassword.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/coming-soon',
    name: 'misc-coming-soon',
    component: () => import('@/views/miscellaneous/ComingSoon.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/under-maintenance',
    name: 'misc-under-maintenance',
    component: () => import('@/views/miscellaneous/UnderMaintenance.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/error',
    name: 'misc-error',
    component: () => import('@/views/miscellaneous/Error.vue'),
    meta: {
      layout: 'full',
    },
  },
]
