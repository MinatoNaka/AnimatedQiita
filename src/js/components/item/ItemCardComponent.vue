<template>
    <div
            v-bind:data-aos="(isEven) ? 'zoom-in-right' : 'zoom-in-left'"
            data-aos-offset="200"
            data-aos-duration="1500"
            class="card shadow-lg mb-3"
            v-bind:class="(isEven) ? 'float-left' : 'float-right'"
            style="width: 20rem"
    >
        <router-link v-bind:to="{name: 'item.detail', params: {itemId: item.id}}"
                     class="text-decoration-none hvr-grow">
            <div class="card-header">
                <div class="row">
                    <div class="col-6">
                        <img v-bind:src="item.user.profile_image_url" class="" width="80%" alt="">
                    </div>
                    <div class="col-6 pt-5">
                        <p class="h1">
                            <span class="badge badge-primary">
                                <i class="fas fa-thumbs-up"> {{ item.likes_count }}</i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-body bg-primary-dark">
                <h5 class="card-title text-light">{{ item.title }}</h5>
                <h6 class="card-subtitle my-2 text-primary-light">Posted at {{ item.created_at | date }}</h6>
                <p class="card-text mt-2 small">
                    <span v-for="tag in item.tags" class="badge badge-primary mx-1">
                        <i class="fas fa-tag"> {{ tag.name }}</i>
                    </span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
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
        },
        filters: {
            date: function (value) {
                return value.slice(0, 10);
            }
        }
    }
</script>