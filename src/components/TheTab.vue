<template>
    <div id="view">
        <First v-show="show == 1" />
        <Second v-show="show == 2" />
        <Third v-show="show == 3" />
    </div>
    <div id="btnBox">
        <button @click="view(1)">2-1 탭</button>
        <button @click="view(2)">2-2 탭</button>
        <button @click="view(3)">2-3 탭</button>
    </div>
</template>

<script>
import { First, Second, Third } from "@tabs/Third";

import { ref } from "vue";

export default {
    name: "Tab",
    components: { First, Second, Third },
    setup() {
        const show = ref(1);

        const view = (tabNum) => {
            show.value = tabNum;
        };

        return { show, view };
    },
};
</script>

<style lang="scss">
#view {
    width: 400px;
    height: 200px;
    margin-top: 30px;
    border: 1px solid #eee;
    text-align: center;
    > p {
        font-size: 22px;
        font-weight: bold;
        line-height: 200px;
    }
}
#btnBox {
    width: 400px;
    border: 1px solid #eee;
    text-align: center;
    display: flex;
    button {
        font-size: 20px;
        width: 33.333%;
        border: 1px solid #eee;
    }
}
</style>
