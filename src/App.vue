<template>
    <div id="wrap">
        <Header />
        <router-view></router-view>
        <Tab v-if="!meta.value.isHideTab" />
        <Footer v-if="!meta.value.isHideFooter" />
    </div>
</template>

<script>
import { Header, Tab, Footer } from "@components";

import { reactive, computed } from "vue";
import { useRouteStore } from "@store/router";
import router from "@router/index";

export default {
    name: "App",
    components: { Header, Tab, Footer },
    setup() {
        const meta = computed(() => useRouteStore());

        router.beforeEach((to, from, next) => {
            // console.log("To : ", to);
            // console.log("from : ", from);
            next();
        });

        return { meta };
    },
};
</script>

<style lang="scss">
* {
    margin: 0 auto;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: #000;
}
#wrap {
    position: relative;
}
header {
    text-align: center;
    color: #fff;
}
</style>
