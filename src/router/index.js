import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Drivers from '../views/Drivers.vue'
import Partners from '../views/Partners.vue'
import Gallery from '../views/Gallery.vue'

import Login from '../views/admin/Login.vue'
import Admin from '../views/admin/Admin.vue'
import DriversAdmin from '../views/admin/DriversAdmin.vue'
import SeriesAdmin from '../views/admin/SeriesAdmin.vue'
import GalleryAdmin from '../views/admin/GalleryAdmin.vue'
import PartnersAdmin from '../views/admin/PartnersAdmin.vue'
import { fb } from '@/firebase.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: Drivers
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },




  //ADMIN SECTION
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
        component: DriversAdmin,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'series',
        name: 'series-admin',
        component: SeriesAdmin,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'gallery',
        name: 'gallery-admin',
        component: GalleryAdmin,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'partners',
        name: 'partners-admin',
        component: PartnersAdmin,
        meta: {
          requiresAuth: true,
        }
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


router.beforeEach((to, from, next) => {

  const currentUser = fb.auth().currentUser
  //If requires auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!currentUser) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
