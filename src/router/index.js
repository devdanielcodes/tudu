import { createRouter, createWebHistory } from "vue-router"

export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: () => import('../views/Landing.vue')
        }
    ],
    history: createWebHistory()
})