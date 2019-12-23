<template>
    <div>
        <p>Top</p>

        <router-link v-bind:to="{name: 'item.list'}">
            <button class="btn btn-success">Item List</button>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
