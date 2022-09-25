import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/top-deals',
    name: 'top-deals',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopdealsView.vue')
  },
  {
    path: '/women',
    name: 'women',
    component: () => import(/* webpackChunkName: "about" */ '../views/WomenView.vue'),
    children:[
      {
        path: 'bags',
        name: 'bags',
        component: () => import(/* webpackChunkName: "about" */ '../views/WomenItems/BagsView.vue'),
        props:true,
      },
    ],
  },
  {
    path: '/men',
    name: 'men',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenView.vue')
  },
  {
    path: '/brands',
    name: 'brands',
    component: () => import(/* webpackChunkName: "about" */ '../views/BrandViews.vue')
  },
  {
    path: '/kids',
    name: 'kids',
    component: () => import(/* webpackChunkName: "about" */ '../views/KidsView.vue')
  },
  {
    path: '/accessories',
    name: 'accessories',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccView.vue')
  },

  {
    path: '/walets',
    name: 'walets',
    component: () => import(/* webpackChunkName: "about" */ '../views/WaletsView.vue')
  },
  {
    path: '/lingeries',
    name: 'lingeries',
    component: () => import(/* webpackChunkName: "about" */ '../views/LingViews.vue')
  },
  {
    path: '/belts',
    name: 'belts',
    component: () => import(/* webpackChunkName: "about" */ '../views/BeltsView.vue')
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoesView.vue')
  },
  {
    path: '/others',
    name: 'others',
    component: () => import(/* webpackChunkName: "about" */ '../views/OthersView.vue')
  },
  {
    path: '/watches',
    name: 'watches',
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routes,
  linkActiveClass:'active',
})

export default router
