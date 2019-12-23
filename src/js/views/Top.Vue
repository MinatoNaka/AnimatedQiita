<template>
    <div>
        <p>Top</p>

        <router-link v-bind:to="{name: 'item.list'}">
            <button class="btn btn-success">Item List</button>
        </router-link>
        <router-link v-bind:to="{name: 'user.list'}">
            <button class="btn btn-success">User List</button>
        </router-link>
        <router-link v-bind:to="{name: 'tag.list'}">
            <button class="btn btn-success">Tag List</button>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
