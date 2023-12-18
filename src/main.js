import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.css";
import { mask } from "vue-the-mask";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import "./assets/style/adaptive.scss";

import ClickOutside from "./directives/click-outside";

const app = createApp(App);

app.directive("mask", mask);
app.use(router).mount("#app");
app.use(VCalendar, {});
app.directive("click-outside", ClickOutside);
