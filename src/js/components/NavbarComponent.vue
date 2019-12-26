<template>
    <div class="container-fluid bg-primary-dark">
        <div class="container">
            <nav id="nav" class="navbar navbar-expand-sm navbar-dark">
                <router-link v-bind:to="{name: 'top'}" class="navbar-brand hvr-bounce-in">
                    Animated Qiita
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <router-link tag="li" v-bind:to="{name: 'item.list'}" class="nav-item hvr-underline-from-left"
                                     exact-active-class="active">
                            <a class="nav-link">Articles</a>
                        </router-link>
                        <router-link tag="li" v-bind:to="{name: 'user.list'}" class="nav-item hvr-underline-from-left"
                                     exact-active-class="active">
                            <a class="nav-link">Users</a>
                        </router-link>
                        <router-link tag="li" v-bind:to="{name: 'tag.list'}" class="nav-item hvr-underline-from-left"
                                     exact-active-class="active">
                            <a class="nav-link">Tags</a>
                        </router-link>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {}
</script>