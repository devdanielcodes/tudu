import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: () => import('../views/Landing.vue')
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () => import('../views/CreateAccount.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('../views/Admin.vue')
        }
    ],
    history: createWebHistory()
})