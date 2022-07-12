export default [
    {
        path: "/third",
        name: "Third",
        component: () => import("@pages/ThirdPage.vue"),
        meta: {
            headerTitle: "3번 페이지",
            headerType: "back",
            isHideTab: false,
            isHideFooter: true,
            noPer: ["비", "A", "B"],
        },
    },
];
