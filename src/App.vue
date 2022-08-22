<template>
    <div class="wrap">
        <TheHeader />
        <p class="pageTitle fwb">{{ meta.headerTitle }}</p>
        <router-view></router-view>
        <TheTab v-if="!meta.isHideTab" />
        <TheFooter v-if="!meta.isHideFooter" />
    </div>
</template>

<script>
import { TheHeader, TheTab, TheFooter } from "@components";

import { reactive, ref, computed } from "vue";
import { useRouteStore } from "@store/router";
import { useUserStore } from "@store/user";
import { useRouter } from "vue-router";

export default {
    name: "App",
    components: { TheHeader, TheTab, TheFooter },
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
.wrap {
    position: relative;
    width: 900px;
}
.pageTitle {
    text-align: right;
    font-size: 26px;
}
.fwb {
    font-weight: bold;
}
.tc {
    text-align: center;
}
</style>
