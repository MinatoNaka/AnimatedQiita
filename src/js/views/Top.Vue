<template>
    <div class="container-fluid bg-primary-light pb-5">
        <div id="eye-catch" class="container">
            <div class="row">
                <div class="offset-sm-2 col-sm-8">
                    <img class="mask" src="/dist/img/park.jpg" alt="">
                    <svg class="h-0 w-auto">
                        <clipPath id="svgPath">
                            <text class="animated fadeInRight delay-1s slower" x="10" y="150" font-family="Impact"
                                  font-size="8em">
                                Animated
                            </text>
                            <text class="animated fadeInLeft delay-3s slower" x="400" y="300" font-family="Impact"
                                  font-size="8em">
                                Qiita
                            </text>
                        </clipPath>
                    </svg>
                    <!--todo レスポンシブ対応-->
                </div>
            </div>
        </div>
        <div id="category">
            <div class="row">
                <router-link v-bind:to="{name: 'item.list'}"
                             class="mx-auto text-decoration-none animated zoomInUp delay-4s slower">
                    <div class="card rounded-circle pt-5 bg-primary-dark hvr-grow-rotate"
                         style="width: 12rem; height: 12rem;">
                        <div class="card-body">
                            <h5 class="card-title text-primary-light">Articles</h5>
                            <p class="card-text text-light">Popular Articles List</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="row">
                <div class="offset-sm-3 col-sm-3 animated zoomInLeft delay-4s slower">
                    <router-link v-bind:to="{name: 'user.list'}" class="text-decoration-none">
                        <div class="card rounded-circle pt-5 bg-primary-dark hvr-grow-rotate d-block mx-auto"
                             style="width: 12rem; height: 12rem;">
                            <div class="card-body">
                                <h5 class="card-title text-primary-light">Users</h5>
                                <p class="card-text text-light">Popular Users List</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-3 animated zoomInRight delay-4s slower">
                    <router-link v-bind:to="{name: 'tag.list'}" class="text-decoration-none">
                        <div class="card rounded-circle pt-5 bg-primary-dark hvr-grow-rotate d-block mx-auto"
                             style="width: 12rem; height: 12rem;">
                            <div class="card-body">
                                <h5 class="card-title text-primary-light">Tags</h5>
                                <p class="card-text text-light">Popular Tags List</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        beforeDestroy() {
            this.$SmoothScroll(document.querySelector('#nav'), 2000);
        }
    }
</script>
