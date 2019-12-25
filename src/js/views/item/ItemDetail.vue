<template>
    <div class="container" v-html="item.rendered_body">
    </div>
</template>

<script>
    export default {
        props: {
            itemId: String
        },
        data: function () {
            return {
                item: {}
            }
        },
        mounted() {
            this.getItem();
        },
        methods: {
            getItem() {
                axios.get('https://qiita.com/api/v2/items/' + this.itemId, {
                    headers: {
                        "Authorization": "Bearer " + process.env.MIX_QIITA_API_TOKEN
                    }
                }).then((res) => {
                    this.item = res.data;
                });
            }
        }
    }
</script>
