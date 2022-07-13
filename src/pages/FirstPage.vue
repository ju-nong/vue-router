<template>
    <p>1번 페이지</p>
    <select name="" @change="choiseUser" v-model="selected">
        <option value="비">비회원</option>
        <option value="A">A 회원</option>
        <option value="B">B 회원</option>
        <option value="VIP">VIP 회원</option>
    </select>

    <Dog v-if="user.type == '비' || user.type == 'A'" />
    <Cat v-if="user.type == '비' || user.type == 'B'" />
    <Lion v-if="user.type == 'A' || user.type == 'VIP'" />
    <Labbit v-if="user.type == 'B' || user.type == 'VIP'" />
</template>

<script>
import { Dog, Cat, Lion, Labbit } from "@animals";

import { reactive, computed, ref, onUpdated, onMounted } from "vue";
import { useUserStore } from "@store/user";
export default {
    name: "FirstPage",
    components: { Dog, Cat, Lion, Labbit },
    setup() {
        const user = reactive({
            store: useUserStore(),
            type: computed(() => user.store.getUser),
        });

        const selected = ref(user.type);

        //const getType = computed(() => user.store.getUser);

        const choiseUser = (event) => {
            const val = event.target.value;
            user.store.setUser(val);
        };

        return { choiseUser, user, selected };
    },
};
</script>

<style></style>
