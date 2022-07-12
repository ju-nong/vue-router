<template>
    <header>
        C
        <span>{{ state.user.getUser }} 회원</span>
    </header>
</template>

<script>
import { reactive } from "vue";
import { useUserStore } from "@store/user";
export default {
    name: "Header-C",
    setup() {
        const state = reactive({
            user: useUserStore(),
        });

        return { state };
    },
};
</script>

<style scoped>
header {
    background-color: #00ff00;
}
</style>
