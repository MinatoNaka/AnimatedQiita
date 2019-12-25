<template>
    <div>
        <p>User List</p>
        <ul>
            <li v-for="user in users">
                <router-link v-bind:to="{name: 'user.detail', params: {userId: user.id}}">
                    <button class="btn btn-success">User Detail</button>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                users: []
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers() {
                axios.get('https://qiita.com/api/v2/users?page=1&per_page=20', {
                    headers: {
                        "Authorization": "Bearer " + process.env.MIX_QIITA_API_TOKEN
                    }
                }).then((res) => {
                    this.users = res.data;
                });
            }
        }
    }
</script>
