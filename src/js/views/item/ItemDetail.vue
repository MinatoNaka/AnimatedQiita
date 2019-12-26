<template>
    <div class="container">
        <div class="jumbotron shadow-lg mt-5 pb-5">
            <h1 class="display-4 text-primary-dark mb-5"><u>{{ item.title }}</u></h1>
            <p class="lead" v-html="bodySummary"/>
            <hr class="my-4">
            <p>
                <span v-for="tag in item.tags" class="badge badge-primary-dark mx-1 py-1">
                    <i class="fas fa-tag"> {{ tag.name }}</i>
                </span>
            </p>
            <p>Posted at {{ item.created_at | date }}</p>
            <div class="text-right">
                <span class="hvr-grow">
                    <a target="_blank" class="btn btn-primary btn-lg shadow-lg animated pulse infinite duration-2s"
                       v-bind:href="item.url" role="button">Read in Qiita</a>
                </span>
            </div>
        </div>
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
        },
        filters: {
            date: function (value) {
                return value.slice(0, 10);
            }
        },
        computed: {
            bodySummary() {
                return this.item.body.slice(0, 100).replace(/\n/g, '<br>') + ' ...';
            }
        }
    }
</script>
