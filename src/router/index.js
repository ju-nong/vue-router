import { createWebHistory, createRouter } from "vue-router";
import { useUserStore } from "@store/user";

import { PageA, PageB, PageC, PageD } from "@routes";

const router = createRouter({
    history: createWebHistory(),
    routes: [...PageA, ...PageB, ...PageC, ...PageD],
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
            alert("접근 권한이 없습니다.");
        }
    } else {
        path = null;
    }
    next(path);
});

export default router;
