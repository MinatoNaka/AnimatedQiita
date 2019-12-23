<template>
    <div>
        <p>Item List</p>

        <router-link v-bind:to="{name: 'item.detail', params: {itemId: 1}}">
            <button class="btn btn-success">Item Detail</button>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
