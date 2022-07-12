<template>
    <A v-if="user.getUser == '비'" />
    <B v-else-if="meta.value.headerType == 'back'" />
    <C v-else />
    <p>메타 {{ meta }}</p>
</template>

<script>
import { A, B, C } from "@headers";

import { reactive, computed } from "vue";
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

<style lang="scss"></style>
