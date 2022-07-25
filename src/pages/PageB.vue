<template>
    <div class="subPage tc fwb">
        <SubPageA v-if="meta.headerTitle == '1-1 페이지'" />
        <router-view></router-view>
    </div>
</template>

<script>
import { SubPageA } from "@subPages/PageB";

import { computed } from "vue";
import { useUserStore } from "@store/user";
import { useRouteStore } from "@store/router";
export default {
    name: "PageB",
    components: { SubPageA },
    setup() {
        const { meta } = useRouteStore();
        return { meta };
    },
};
</script>

<style lang="scss">
.subPage a {
    display: block;
    margin-top: 170px;
    font-size: 33px;
}
.subTitle {
    text-align: center;
    padding-top: 100px;
}
</style>
