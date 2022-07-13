<template>
    <div id="wrap">
        <Header />
        <router-view></router-view>
        <Tab v-if="!meta.value.isHideTab" />
        <Footer v-if="!meta.value.isHideFooter" />
    </div>
</template>

<script>
import { Header, Tab, Footer } from "@components";

import { reactive, ref, computed } from "vue";
import { useRouteStore } from "@store/router";
import { useUserStore } from "@store/user";
import { useRouter } from "vue-router";

function chkPer(type, domain) {
    console.log(type, domain);
    if (type == "비") {
        return !(domain == "Second" || domain == "Third");
    }

    if (type == "A" || type == "B") {
        return !(domain == "Third" || domain == "Fourth");
    }

    return !(domain == "Second" || domain == "Fourth");
}

export default {
    name: "App",
    components: { Header, Tab, Footer },
    setup() {
        const meta = computed(() => useRouteStore());
        const user = reactive({
            store: useUserStore(),
            type: computed(() => user.store.getUser),
        });

        const router = useRouter();

        router.beforeEach((to, from, next) => {
            const toName = to.name; // 후 페이지
            const fromName = from.name; // 전 페이지
            const type = user.type;
            let path = "/";

            if (fromName != undefined) {
                if (chkPer(type, toName) && chkPer(type, fromName)) {
                    path = null;
                    console.log("지나가세요");
                } else {
                    console.log("막음");
                }
            } else {
                path = null;
                console.log(toName, fromName);
            }
            next(path);
        });

        return { meta, user };
    },
};
</script>

<style lang="scss">
* {
    margin: 0 auto;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: $b;
}
#wrap {
    position: relative;
    width: 900px;
}
</style>
