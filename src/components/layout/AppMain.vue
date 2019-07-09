<template>
    <section class="app-main">
        <div class="app-container">

            <transition
                name="fade"
                mode="out-in"
            >
                <!-- <keep-alive :include="cachedViews"> -->
                <router-view :key="key"></router-view>
                <!-- </keep-alive> -->
            </transition>

        </div>
    </section>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        cachedViews() {
            // return this.$store.state.tagsView.cachedViews
        },
        key() {
            return this.$route.fullPath
        }
    }
}
</script>
