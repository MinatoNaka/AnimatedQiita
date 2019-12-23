import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import Top from "./views/Top";

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'top',
            component: Top
        },
    ]
});

const app = new Vue({
    router,
    components: {
        'example-component': ExampleComponent
    }
}).$mount('#app');
