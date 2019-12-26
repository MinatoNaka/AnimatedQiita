<template>
    <div>
        <div class="container-fluid bg-primary-light">
            <div class="container p-5">
                <h1 class="text-primary-dark mb-5">Popular Articles In Qiita</h1>
                <p>example example example example example example </p>
                <p>example example example example example example </p>
                <p>example example example example example example </p>
            </div>
        </div>
        <div class="container-fluid">
            <div class="container mt-5">
                <div class="clearfix" v-for="(item, index) in items" v-bind:key="item.id">
                    <ItemCardComponent v-bind:index="index" v-bind:item="item"/>
                    <!--todo ローディング-->
                </div>
            </div>
        </div>
        <ToTopButton/>
    </div>
</template>

<script>
    import ItemCardComponent from "../../components/item/ItemCardComponent";
    import ToTopButton from "../../components/ToTopButton";

    export default {
        components: {
            ItemCardComponent,
            ToTopButton
        },
        data: function () {
            return {
                items: []
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
                    this.items = res.data;
                });
            }
        },
        beforeDestroy() {
            this.$SmoothScroll(document.querySelector('#nav'), 2000);
        }
    }
</script>
