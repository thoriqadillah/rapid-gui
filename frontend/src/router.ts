import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./module/home/Home.vue";

const router = createRouter({
    history: createWebHashHistory('/'),
    routes: [
        { path: '/', component: Home }
    ]
})

export default router