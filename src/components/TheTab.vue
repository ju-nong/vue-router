<template>
    <div id="view">
        <div id="area">
            <First v-show="show == 1" />
            <Second v-show="show == 2" />
            <Third v-show="show == 3" />
        </div>
        <div id="btnBox">
            <button :class="show == 1 ? `active` : ``" @click="view(1)">
                2-1 탭
            </button>
            <button :class="show == 2 ? `active` : ``" @click="view(2)">
                2-2 탭
            </button>
            <button :class="show == 3 ? `active` : ``" @click="view(3)">
                2-3 탭
            </button>
        </div>
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
    width: 600px;
    border: 1px solid $b;
    #area {
        text-align: center;
        > p {
            line-height: 300px;
            font-size: 32px;
            font-weight: bold;
        }
    }
    #btnBox {
        text-align: center;
        display: flex;
        button {
            font-size: 20px;
            width: 33.333%;
            border: 1px solid $b;
            padding: 10px 0px;
            transition: all 0.3s;
        }
        button:hover {
            background-color: $b;
            color: $w;
        }
        .active {
            font-weight: bold;
            color: $bl;
        }
        .active:hover {
            color: $bl;
        }
    }
}
</style>
