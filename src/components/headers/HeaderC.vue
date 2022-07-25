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
    name: "HeaderC",
    setup() {
        const state = reactive({
            user: useUserStore(),
        });

        return { state };
    },
};
</script>

<style lang="scss" scoped>
header {
    background-color: $g;

    span {
        position: absolute;
        font-size: 32px;
        right: 10px;
        top: 10px;
    }
}
</style>
