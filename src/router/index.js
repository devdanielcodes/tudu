import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: () => import('../views/Landing.vue'),
            
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import('../views/CreateAccount.vue'),
            beforeEnter: (to, from, next) => {
                if(localStorage.token){
                  return next({
                    name: 'Admin'
                  })
                }
                next()
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue'),
            beforeEnter: (to, from, next) => {
                if(localStorage.token){
                  return next({
                    name: 'Admin'
                  })
                }
                next()
            }
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('../views/Admin.vue'),
            beforeEnter: (to, from, next) => {
                if(!localStorage.token){
                  return next({
                    name: 'Login'
                  })
                }
                next()
            }
        }
    ],
    history: createWebHistory()
})