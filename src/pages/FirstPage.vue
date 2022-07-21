<template>
    <select name="" @change="choiseUser" v-model="selected">
        <option value="비">비회원</option>
        <option value="A">A 회원</option>
        <option value="B">B 회원</option>
        <option value="VIP">VIP 회원</option>
    </select>
    <div id="animals">
        <Dog v-if="user.type == '비' || user.type == 'A'" />
        <Cat v-if="user.type == '비' || user.type == 'B'" />
        <Lion v-if="user.type == 'A' || user.type == 'VIP'" />
        <Rabbit v-if="user.type == 'B' || user.type == 'VIP'" />
    </div>
</template>

<script>
import { Dog, Cat, Lion, Rabbit } from "@animals";

import { reactive, computed, ref, onUpdated, onMounted } from "vue";
import { useUserStore } from "@store/user";
export default {
    name: "FirstPage",
    components: { Dog, Cat, Lion, Rabbit },
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

<style lang="scss">
select {
    border: 2px solid $b;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
}
#animals {
    display: flex;
    padding-top: 100px;
    .animal {
        width: 150px;
        line-height: 150px;
        text-align: center;
        border-radius: 10px;
        background-size: cover;
        background-position: center center;
        color: $w;
        font-size: 22px;
        font-weight: bold;
    }
}
</style>
