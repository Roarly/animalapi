import {createRouter, createWebHistory} from "vue-router";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Hello from "./pages/hello.vue";
import Order from "./pages/order.vue";
import NotFound from "./pages/404.vue";

const routes = [
    {
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/about",
    name: "About",
    component: About,
},
{
    path: "/hello",
    name: "Hello",
    component: Hello,
},
{
    path: "/order",
    name: "Order",
    component: Order,
},
{
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;