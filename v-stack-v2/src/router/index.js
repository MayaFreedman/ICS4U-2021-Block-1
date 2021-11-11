import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/create',
        name: 'create',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Create Post" */ '@/views/CreatePosts.vue')
    },
    {
        path: '/posts',
        name: 'posts',
        component: () =>
            import ( /* webpackChunkName: "Create Post" */ '@/views/Posts.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router