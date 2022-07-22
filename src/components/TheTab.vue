<template>
    <div id="view">
        <div id="area">
            <component :is="currentTabComponent"></component>
        </div>
        <div id="btnBox">
            <button
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ active: currentTab == tab.component }"
                @click="currentTab = tab.component"
            >
                {{ tab.name }}
            </button>
        </div>
    </div>
</template>

<script>
import { First, Second, Third } from "@tabs/Third";

import { ref, computed } from "vue";

export default {
    name: "Tab",
    components: { First, Second, Third },
    setup() {
        const tabs = [
            { name: "2-1 탭", component: "First" },
            { name: "2-2 탭", component: "Second" },
            { name: "2-3 탭", component: "Third" },
        ];

        const currentTab = ref("First");

        const currentTabComponent = computed(() => {
            return currentTab.value;
        });

        return { tabs, currentTab, currentTabComponent };
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
