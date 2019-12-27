<template>
    <div
            v-bind:data-aos="(isEven) ? 'flip-left' : 'flip-right'"
            data-aos-offset="200"
            data-aos-duration="1500"
            class="card shadow-lg mb-3"
            v-bind:class="(isEven) ? 'float-left' : 'float-right'"
            style="width: 20rem"
    >
        <router-link v-bind:to="{name: 'item.list', query: {user: user.id}}"
                     class="text-decoration-none hvr-grow">
            <div class="card-header">
                <div class="row">
                    <div class="col-6">
                        <img v-bind:src="user.profile_image_url" class="" width="80%" alt="">
                    </div>
                    <div class="col-6 pt-5">
                        <p class="h1">
                            <span class="badge badge-primary">
                                <i class="fas fa-file-invoice"> {{ user.items_count }}</i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-body bg-primary-dark">
                <h5 class="card-title text-light">{{ user.id}}</h5>
                <h6 class="card-subtitle my-2 text-primary-light">{{ user.description }}</h6>
                <p class="card-text mt-2">
                    <button class="btn btn-block btn-primary">See This User's New Articles</button>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            user: {
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
