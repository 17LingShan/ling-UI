import { createApp } from "vue";
import App from "./App.vue";
import LUI from "../packages";

const app = createApp(App);
app.use(LUI);
app.mount("#app");
