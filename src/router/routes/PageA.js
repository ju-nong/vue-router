const PageA = {
    name: "PageA",
    component: () => import("@pages/PageA"),
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
        alias: ["/A"],
        ...PageA,
    },
];
