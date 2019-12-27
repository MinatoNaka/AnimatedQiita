import VueRouter from 'vue-router';
import VueSmoothScroll from 'vue-smoothscroll';
import Top from "./views/Top";
import ItemList from "./views/item/ItemList";
import ItemDetail from "./views/item/ItemDetail";
import UserList from "./views/user/UserList";
import TagList from "./views/tag/TagList";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

window.Vue = require('vue');
window.axios = require('axios');

Vue.use(VueRouter);
Vue.use(VueSmoothScroll);

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
            component: ItemDetail,
            props: true
        },
        {
            path: '/tags',
            name: 'tag.list',
            component: TagList
        },
        {
            path: '/users',
            name: 'user.list',
            component: UserList
        }
    ]
});

const app = new Vue({
    router,
    components: {
        'navbar-component': NavbarComponent,
        'footer-component': FooterComponent
    }
}).$mount('#app');
