const meta = {
    headerType: "back",
    isHideTab: true,
    isHideFooter: true,
    noPer: ["비", "VIP"],
};

const subPageNames = ["B", "C", "D", "E"];
const child = [];
for (let i = 0; i <= subPageNames.length; i++) {
    const num = i + 2;
    child.push({
        path: `${num}`,
        name: `1-${num}`,
        component: () => import(`@subPages/PageB/SubPage${subPageNames[i]}`),
        meta: {
            headerTitle: `1-${num} 페이지`,
            ...meta,
        },
    });
}

export default [
    {
        path: "/B",
        alias: ["/B/1"],
        name: "PageB",
        component: () => import("@pages/PageB"),
        meta: {
            headerTitle: "1-1 페이지",
            ...meta,
        },
        children: child,
    },
];
