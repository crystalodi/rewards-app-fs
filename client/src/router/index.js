import {createWebHistory, createRouter} from "vue-router";
import PrizeList from "../pages/PrizeList.vue";
import PrizeDetail from "../pages/PrizeDetail.vue";

const routes = [
    {
        path: "/",
        name: "PrizeList",
        component: PrizeList
    },
    {
        path: "/prize/:id",
        name: "PrizeDetail",
        component: PrizeDetail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;