<template>
    <select name="" @change="choiseUser" v-model="selected" class="fwb">
        <option value="비">비회원</option>
        <option value="A">A 회원</option>
        <option value="B">B 회원</option>
        <option value="VIP">VIP 회원</option>
    </select>
    <div id="animals">
        <component
            v-for="(animal, index) in animals[selected]"
            :is="animal"
            class="fwb tc"
        ></component>
    </div>
</template>

<script>
import { TheDog, TheCat, TheLion, TheRabbit } from "@animals";

import { reactive, computed, ref, onUpdated, onMounted } from "vue";
import { useUserStore } from "@store/user";
export default {
    name: "PageA",
    components: { TheDog, TheCat, TheLion, TheRabbit },
    setup() {
        const user = useUserStore();

        const animals = {
            비: ["TheDog", "TheCat"],
            A: ["TheDog", "TheLion"],
            B: ["TheCat", "TheRabbit"],
            VIP: ["TheLion", "TheRabbit"],
        };

        const selected = ref(user.getUser);

        const choiseUser = (event) => {
            const val = event.target.value;
            user.setUser(val);
        };

        return { user, animals, selected, choiseUser };
    },
};
</script>

<style lang="scss">
select {
    border: 2px solid $b;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
}
#animals {
    display: flex;
    padding-top: 100px;
    .animal {
        width: 150px;
        line-height: 150px;
        border-radius: 10px;
        background-size: cover;
        background-position: center center;
        color: $w;
        font-size: 22px;
    }
}
</style>
