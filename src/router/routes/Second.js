const meta = {
    headerType: "back",
    isHideTab: true,
    isHideFooter: true,
    noPer: ["비", "VIP"],
};

export default [
    {
        path: "/second",
        alias: ["/second/1"],
        name: "Second",
        component: () => import("@pages/SecondPage.vue"),
        meta: {
            headerTitle: "1-1 페이지",
            ...meta,
        },
        children: [
            {
                path: "2",
                name: "1-2",
                component: () => import("@subPages/Second/SecondSubPage.vue"),
                meta: {
                    headerTitle: "1-2 페이지",
                    ...meta,
                },
            },
            {
                path: "3",
                name: "1-3",
                component: () => import("@subPages/Second/ThirdSubPage.vue"),
                meta: {
                    headerTitle: "1-3 페이지",
                    ...meta,
                },
            },
            {
                path: "4",
                name: "1-4",
                component: () => import("@subPages/Second/FourthSubPage.vue"),
                meta: {
                    headerTitle: "1-4 페이지",
                    ...meta,
                },
            },
            {
                path: "5",
                name: "1-5",
                component: () => import("@subPages/Second/FifthSubPage.vue"),
                meta: {
                    headerTitle: "1-5 페이지",
                    ...meta,
                },
            },
        ],
    },
];
