# vue-router

## path 별칭 및 scss 전역 설정
vue.config.js <br>
``
lintOnSave - esLint 옵션 비활성화
`` <br>
``
extensions - 생략 가능한 확장자 정의
``
```js
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
    transpileDependencies: true,

    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "src"),
                "@router": path.join(__dirname, "src/router"),
                "@routes": path.join(__dirname, "src/router/routes"),
                "@store": path.join(__dirname, "src/store"),
                "@pages": path.join(__dirname, "src/pages"),
                "@components": path.join(__dirname, "src/components"),
                "@subPages": path.join(__dirname, "src/components/pages"),
                "@headers": path.join(__dirname, "src/components/headers"),
                "@tabs": path.join(__dirname, "src/components/tabs"),
                "@animals": path.join(__dirname, "src/components/animals"),
            },
            extensions: [".js", ".vue", ".json"],
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "~@/assets/scss/header.scss";
                `,
            },
        },
    },
});
```

## 페이지 권한
``
beforeEach - 페이지 이동 전 호출
``
```js
import {useRouter} from "vue-router";

const router = useRouter();

router.beforeEach((to, from, next) => {
    const toName = to.name;     // 이동할 페이지 이름
    const fromName = from.name; // 현재 페이지 이름
    const type = user.type;
    const noPer = to.meta.noPer;// 메타에 저장된 블랙리스트 불러오기
    let path = "/";

    if (fromName != undefined) {
        if (!noPer.includes(user.type)) {   // 현재 로그인된 회원이 블랙리스트에 포함되어 있는지 확인
            path = null;
        }
    } else {
        path = null;
    }
    next(path);
});
```
## 권환별 UI 처리
``
beforeEnter - 이동하려는 페이지에 진입하기 전 호출
``
```js
import {useRouter} from "vue-router";

const router = useRouter();

router.beforeEnter((to, from, next) => {
    const type = user.type;
    if(type == "VIP") to.meta.headerType = "blue";
    else if(type == "비") to.meta.headerType = "red";
    // 페이지 진입하기 전 메타 데이터를 변경하여 진입
    // 페이지에서는 메타 데이터 값의 따라 컴포넌트 변경
});
```
![image](https://user-images.githubusercontent.com/81794712/178860091-82fd47b0-e52e-404a-83b0-f0ba0eabdf1f.png)
