<template>
    <div>
        <div class="container-fluid bg-primary-light">
            <div class="container pt-5 pb-3">
                <h1 class="text-primary-dark mb-5">Popular Articles In Qiita</h1>
                <p>example example example example example example </p>
                <p>example example example example example example </p>
                <p>example example example example example example </p>
            </div>
            <div class="container pb-2">
                <p class="h5 text-center text-primary-dark animated pulse infinite duration-2s">
                    <i class="fas fa-angle-double-down"/> Scroll <i class="fas fa-angle-double-down"/>
                </p>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container mt-5">
                <transition leave-active-class="animated fadeOut">
                    <Loading v-if="loading"/>
                </transition>
                <div class="clearfix" v-for="(item, index) in items" v-bind:key="item.id">
                    <ItemCardComponent v-bind:index="index" v-bind:item="item"/>
                </div>
            </div>
        </div>
        <ToTopButton/>
    </div>
</template>

<script>
    import ItemCardComponent from "../../components/item/ItemCardComponent";
    import ToTopButton from "../../components/ToTopButton";
    import Loading from "../../components/Loading";

    export default {
        components: {
            ItemCardComponent,
            ToTopButton,
            Loading
        },
        data: function () {
            return {
                items: [],
                loading: true
            }
        },
        mounted() {
            this.getItems();
        },
        methods: {
            getItems() {
                axios.get('https://qiita.com/api/v2/items?page=1&per_page=20', {
                    headers: {
                        "Authorization": "Bearer " + process.env.MIX_QIITA_API_TOKEN
                    }
                }).then((res) => {
                    this.loading = false;
                    this.items = res.data;
                });
            }
        },
        beforeDestroy() {
            this.$SmoothScroll(document.querySelector('#nav'), 2000);
        }
    }
</script>
