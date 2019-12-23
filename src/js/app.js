import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import Top from "./views/Top";
import ItemList from "./views/item/ItemList";
import ItemDetail from "./views/item/ItemDetail";
import UserList from "./views/user/UserList";
import UserDetail from "./views/user/UserDetail";

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
        {
            path: '/items',
            name: 'item.list',
            component: ItemList
        },
        {
            path: '/items/:itemId',
            name: 'item.detail',
            component: ItemDetail
        },
        {
            path: '/users',
            name: 'user.list',
            component: UserList
        },
        {
            path: '/user/:userId',
            name: 'user.detail',
            component: UserDetail
        },
    ]
});

const app = new Vue({
    router,
    components: {
        'example-component': ExampleComponent
    }
}).$mount('#app');
