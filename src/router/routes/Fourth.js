export default [
    {
        path: "/fourth",
        name: "Fourth",
        component: () => import("@pages/FourthPage.vue"),
        meta: {
            headerType: "back",
            headerTitle: "4번 페이지",
            isHideTab: true,
            isHideFooter: true,
            noPer: ["A", "B", "VIP"],
        },
    },
];
