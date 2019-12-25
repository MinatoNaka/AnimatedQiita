<template>
    <div>
        <p>Tag Detail</p>
        <p>ID: {{ tag.id }}</p>
        <p>Item Count: {{ tag.items_count }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            tagId: String
        },
        data: function () {
            return {
                tag: {}
            }
        },
        mounted() {
            this.getTag();
        },
        methods: {
            getTag() {
                axios.get('https://qiita.com/api/v2/tags/' + this.tagId, {
                    headers: {
                        "Authorization": "Bearer " + process.env.MIX_QIITA_API_TOKEN
                    }
                }).then((res) => {
                    this.tag = res.data;
                });
            }
        }
    }
</script>
