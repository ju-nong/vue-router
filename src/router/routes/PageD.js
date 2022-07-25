export default [
    {
        path: "/D",
        name: "PageD",
        component: () => import("@pages/PageD"),
        meta: {
            headerType: "back",
            headerTitle: "4번 페이지",
            isHideTab: true,
            isHideFooter: true,
            noPer: ["A", "B", "VIP"],
        },
    },
];
