import { defineStore } from "pinia";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const useRouterStore = defineStore("router", {
    state: () => ({
        router: useRouter(),
        route: useRoute(),
    }),
    actions: {
        reset() {
            this.router = useRouter();
            this.route = useRoute();
        },
    },
    getters: {
        getAll: (state) => state,
        getRoute: (state) => state.route,
        getRouter: (state) => state.router,
    },
});

function useRouteStore() {
    const store = useRouterStore();
    const route = store.getRoute;
    return { meta: computed(() => route.meta) };
}

export default useRouterStore;
export { useRouteStore };
