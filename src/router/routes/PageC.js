export default [
    {
        path: "/C",
        name: "PageC",
        component: () => import("@pages/PageC"),
        meta: {
            headerTitle: "3번 페이지",
            headerType: "back",
            isHideTab: false,
            isHideFooter: true,
            noPer: ["비", "A", "B"],
        },
    },
];
