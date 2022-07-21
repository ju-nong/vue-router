import { createWebHistory, createRouter } from "vue-router";
import { useUserStore } from "@store/user";

import { First, Second, Third, Fourth } from "@routes";

const router = createRouter({
    history: createWebHistory(),
    routes: [...First, ...Second, ...Third, ...Fourth],
});

router.beforeEach((to, from, next) => {
    const user = useUserStore();

    const fromName = from.name; // 전 페이지
    const noPer = to.meta.noPer;
    let path = "/";

    if (fromName != undefined) {
        if (!noPer.includes(user.getUser)) {
            path = null;
        } else {
            alert("접근 권환이 없습니다.");
        }
    } else {
        path = null;
    }
    next(path);
});

export default router;
