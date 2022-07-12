const first = {
    name: "First",
    component: () => import("@pages/FirstPage.vue"),
    meta: {
        headerType: "all",
        headerTitle: "1번 페이지",
        isHideTab: true,
        isHideFooter: false,
        noPer: [],
    },
};

export default [
    {
        path: "/",
        alias: ["/first"],
        ...first,
    },
];
