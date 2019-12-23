<template>
    <div>
        <p>Tag List</p>

        <router-link v-bind:to="{name: 'tag.detail', params: {tagId: 1}}">
            <button class="btn btn-success">Tag Detail</button>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
