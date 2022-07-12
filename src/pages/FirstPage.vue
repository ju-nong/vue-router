<template>
    <p>1번 페이지</p>
    <select name="" @change="choiseUser" v-model="userType">
        <option value="비">비회원</option>
        <option value="A">A 회원</option>
        <option value="B">B 회원</option>
        <option value="VIP">VIP 회원</option>
    </select>

    <Dog v-if="userType == '비' || userType == 'A'" />
    <Cat v-if="userType == '비' || userType == 'B'" />
    <Lion v-if="userType == 'A' || userType == 'VIP'" />
    <Labbit v-if="userType == 'B' || userType == 'VIP'" />
</template>

<script>
import { Dog, Cat, Lion, Labbit } from "@animals";

import { computed, ref } from "vue";
import { useUserStore } from "@store/user";
export default {
    name: "FirstPage",
    components: { Dog, Cat, Lion, Labbit },
    setup() {
        const user = useUserStore();
        const userType = computed(() => user.getUser);

        const choiseUser = (event) => {
            const val = event.target.value;
            user.setUser(val);
        };
        return { choiseUser, userType, user };
    },
};
</script>

<style></style>
