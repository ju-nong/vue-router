<template>
    <div id="wrap">
        <Header />
        <p id="pageTitle">{{ meta.headerTitle }}</p>
        <router-view> </router-view>
        <Tab v-if="!meta.isHideTab" />
        <Footer v-if="!meta.isHideFooter" />
    </div>
</template>

<script>
import { Header, Tab, Footer } from "@components";

import { reactive, ref, computed } from "vue";
import { useRouteStore } from "@store/router";
import { useUserStore } from "@store/user";
import { useRouter } from "vue-router";

export default {
    name: "App",
    components: { Header, Tab, Footer },
    setup() {
        const { meta } = useRouteStore();

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
    color: $b;
}
button {
    cursor: pointer;
    background-color: $tr;
}
#wrap {
    position: relative;
    width: 900px;
}
#pageTitle {
    text-align: right;
    font-weight: bold;
    font-size: 26px;
}
</style>
