<template>
    <p>2번 페이지</p>
    <First v-if="meta.value.headerTitle == '1-1 페이지'" />
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
        //const user = useUserStore();
        const meta = computed(() => useRouteStore());
        return { meta };
    },
};
</script>

<style></style>
