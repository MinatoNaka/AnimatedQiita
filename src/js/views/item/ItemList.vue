<template>
    <div>
        <p>Item List</p>
        <ul>
            <li v-for="item in items">
                <router-link v-bind:to="{name: 'item.detail', params: {itemId: item.id}}">
                    <button class="btn btn-success">Item Detail</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
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
        }
    }
</script>
