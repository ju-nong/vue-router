<template>
    <div id="view">
        <div class="area tc">
            <component :is="currentTabComponent" class="fwb"></component>
        </div>
        <div id="btnBox" class="tc">
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
import { TabA, TabB, TabC } from "@tabs/PageC";

import { ref, computed } from "vue";

export default {
    name: "TheTab",
    components: { TabA, TabB, TabC },
    setup() {
        const tabs = [
            { name: "2-1 탭", component: "TabA" },
            { name: "2-2 탭", component: "TabB" },
            { name: "2-3 탭", component: "TabC" },
        ];

        const currentTab = ref("TabA");

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
    .area {
        > p {
            line-height: 300px;
            font-size: 32px;
        }
    }
    #btnBox {
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
