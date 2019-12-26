<template>
    <button id="to-top" class="btn btn-primary hvr-grow" v-on:click="scrollToTop">Top</button>
</template>

<script>
    export default {
        methods: {
            scrollToTop() {
                this.$SmoothScroll(document.querySelector('#nav'), 2000);
            }
        }
    }
</script>

<style>
    #to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
</style>