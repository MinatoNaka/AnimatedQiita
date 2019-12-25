import VueRouter from 'vue-router';
import Top from "./views/Top";
import ItemList from "./views/item/ItemList";
import ItemDetail from "./views/item/ItemDetail";
import UserList from "./views/user/UserList";
import UserDetail from "./views/user/UserDetail";
import TagList from "./views/tag/TagList";
import TagDetail from "./views/tag/TagDetail";
import NavbarComponent from "./components/NavbarComponent";

window.Vue = require('vue');
window.axios = require('axios');

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
            path: '/tags',
            name: 'tag.list',
            component: TagList
        },
        {
            path: '/tags/:tagId',
            name: 'tag.detail',
            component: TagDetail
        },
        {
            path: '/users',
            name: 'user.list',
            component: UserList
        },
        {
            path: '/users/:userId',
            name: 'user.detail',
            component: UserDetail
        },
    ]
});

const app = new Vue({
    router,
    components: {
        'navbar-component': NavbarComponent
    }
}).$mount('#app');
