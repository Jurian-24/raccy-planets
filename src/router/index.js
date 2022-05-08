import { createWebHistory, createRouter } from "vue-router";
import MercuryPage from '../pages/Mercury.vue'

const routes = [
    {
        path: "/mercury",
        name: "mercuryPage",
        component: MercuryPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;