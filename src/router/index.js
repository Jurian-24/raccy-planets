import { createWebHistory, createRouter } from "vue-router";
import PlanetPage from '../pages/PlanetPage.vue'

const routes = [
    {
        path: "/planet/:planetName",
        name: "PlanetPage",
        component: PlanetPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;