import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/admin/Login.vue'
import Admin from '../views/admin/Admin.vue'
import DriversAdmin from '../views/admin/DriversAdmin.vue'
import SeriesAdmin from '../views/admin/SeriesAdmin.vue'
import GalleryAdmin from '../views/admin/GalleryAdmin.vue'
import PartnersAdmin from '../views/admin/PartnersAdmin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'drivers',
        name: 'drivers-admin',
        component: DriversAdmin
      },
      {
        path: 'series',
        name: 'series-admin',
        component: SeriesAdmin
      },
      {
        path: 'gallery',
        name: 'gallery-admin',
        component: GalleryAdmin
      },
      {
        path: 'partners',
        name: 'partners-admin',
        component: PartnersAdmin
      }
    ]
  }
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
