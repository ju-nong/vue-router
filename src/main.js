import { createApp } from "vue";
import App from "./App.vue";
import router from "@router/index";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

// router.beforeEach((to, from) => {
//     console.log(1);
// });

app.use(router).use(pinia).mount("#app");
