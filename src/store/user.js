import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    // 비(비회원), A(A회원), B(B회원), VIP(VIP회원)
    state: () => ({
        user: "비",
    }),
    actions: {
        setUser(name) {
            this.user = name;
        },
    },
    getters: {
        getUser: (state) => state.user,
    },
});
