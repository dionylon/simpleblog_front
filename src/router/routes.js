
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
        { path: '', component: () => import('pages/Index.vue') },
        { path: '/all' , name:'all', component: () => import('pages/Index.vue') },
        { path: '/tags', name:'tags', component: () => import('pages/Tags.vue') },
        { path: '/article', name:'article', component: () => import('pages/Article.vue') }
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
