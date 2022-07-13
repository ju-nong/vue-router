<template>
    <p>메타 {{ meta }}</p>
    <B v-if="meta.value.headerType == 'back'" />
    <A v-else-if="user.getUser == '비'" />
    <C v-else />
</template>

<script>
import { A, B, C } from "@headers";

import { reactive, ref, computed } from "vue";
import { useUserStore } from "@store/user";
import { useRouteStore } from "@store/router";

export default {
    name: "Header",
    components: { A, B, C },
    setup() {
        const user = useUserStore();
        const meta = computed(() => useRouteStore());

        return { user, meta };
    },
};
</script>

<style lang="scss" scoped>
p {
    position: absolute;
    color: $b;
    z-index: 10;
    top: 0;
}
header {
    position: relative;
    width: 100%;
    text-align: center;
    color: $w;
    font-size: 100px;
    font-weight: bold;
}
</style>
