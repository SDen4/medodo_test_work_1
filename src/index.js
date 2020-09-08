import "./styles/sass/main.sass";

window.Vue = require("vue");

Vue.component("form-component", require("./components/Form.vue").default)
Vue.component("open-component", require("./components/Open.vue").default)
Vue.component("done-component", require("./components/Done.vue").default)

const app = new Vue({
    el: "#app"
});