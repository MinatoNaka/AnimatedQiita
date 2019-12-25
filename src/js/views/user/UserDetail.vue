<template>
    <div>
        <p>User Detail</p>
        <p>ID: {{ user.id }}</p>
        <p>Description: {{ user.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            userId: String
        },
        data: function () {
            return {
                user: {}
            }
        },
        mounted() {
            this.getUser();
        },
        methods: {
            getUser() {
                axios.get('https://qiita.com/api/v2/users/' + this.userId, {
                    headers: {
                        "Authorization": "Bearer " + process.env.MIX_QIITA_API_TOKEN
                    }
                }).then((res) => {
                    this.user = res.data;
                });
            }
        }
    }
</script>
