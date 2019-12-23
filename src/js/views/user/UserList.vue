<template>
    <div>
        <p>User List</p>

        <router-link v-bind:to="{name: 'user.detail', params: {userId: 1}}">
            <button class="btn btn-success">User Detail</button>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
