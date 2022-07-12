import { createWebHistory, createRouter } from "vue-router";

import { First, Second, Third, Fourth } from "@routes";

const router = createRouter({
    history: createWebHistory(),
    routes: [...First, ...Second, ...Third, ...Fourth],
});

export default router;
