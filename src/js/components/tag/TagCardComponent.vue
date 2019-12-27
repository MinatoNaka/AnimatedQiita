<template>
    <div
            v-bind:data-aos="(isEven) ? 'zoom-in-right' : 'zoom-in-left'"
            data-aos-offset="200"
            data-aos-duration="1500"
            class="card shadow-lg mb-3"
            v-bind:class="(isEven) ? 'float-left' : 'float-right'"
            style="width: 20rem"
    >
        <router-link v-bind:to="{name: 'item.list', query: {tag: tag.id}}"
                     class="text-decoration-none hvr-grow">
            <div class="card-header">
                <div class="row">
                    <div class="col-5">
                        <img v-bind:src="tag.icon_url" class="" width="80%" alt="">
                    </div>
                    <div class="col-7 pt-5">
                        <p class="h1">
                            <span class="badge badge-primary">
                                <i class="fas fa-file-invoice"> {{ tag.items_count }}</i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-body bg-primary-dark">
                <h5 class="card-title text-light">{{ tag.id }}</h5>
                <h6 class="card-subtitle my-2 text-primary-light">Followers {{ tag.followers_count }}</h6>
                <p class="card-text mt-2">
                    <button class="btn btn-block btn-primary">See This Tag's Popular Articles</button>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            tag: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        computed: {
            isEven: function () {
                return (this.index % 2 === 0);
            }
        }
    }
</script>
