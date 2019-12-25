<template>
    <div>
        <p>Tag List</p>
        <ul>
            <li v-for="tag in tags">
                <router-link v-bind:to="{name: 'tag.detail', params: {tagId: tag.id}}">
                    <button class="btn btn-success">Tag Detail</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                tags: []
            }
        },
        mounted() {
            this.getTags();
        },
        methods: {
            getTags() {
                axios.get('https://qiita.com/api/v2/tags?page=1&per_page=20', {
                    headers: {
                        "Authorization": "Bearer " + process.env.MIX_QIITA_API_TOKEN
                    }
                }).then((res) => {
                    this.tags = res.data;
                });
            }
        }
    }
</script>
