<template>
    <First v-if="meta.headerTitle == '1-1 페이지'" />
    <router-view></router-view>
</template>

<script>
import { First } from "@subPages/Second";

import { computed } from "vue";
import { useUserStore } from "@store/user";
import { useRouteStore } from "@store/router";
export default {
    name: "SecondPage",
    components: { First },
    setup() {
        const { meta } = useRouteStore();
        return { meta };
    },
};
</script>

<style lang="scss" scoped>
a {
    display: block;
    margin-top: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 33px;
}
</style>
