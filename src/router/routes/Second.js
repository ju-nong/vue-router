const meta = {
    headerType: "back",
    isHideTab: true,
    isHideFooter: true,
    noPer: ["비", "VIP"],
};

const subPageNames = ["Second", "Third", "Fourth", "Fifth"];
const child = [];
for (let i = 0; i <= subPageNames.length; i++) {
    const num = i + 2;
    child.push({
        path: `${num}`,
        name: `1-${num}`,
        component: () =>
            import(`@subPages/Second/${subPageNames[i]}SubPage.vue`),
        meta: {
            headerTitle: `1-${num} 페이지`,
            ...meta,
        },
    });
}

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
        children: child,
    },
];
