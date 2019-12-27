<template>
    <span id="to-top" class="hvr-grow">
        <button class="btn btn-primary shadow animated fadeInUp delay-3s" v-on:click="scrollToTop"><i class="fas fa-angle-double-up"/></button>
    </span>
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