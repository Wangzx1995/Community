<template>
    <div class="logo">
        <transition name="fade">
            <span class="logo_title is-bold ">
                <template>
                    欢迎汪某！
                </template>
            </span>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'logo',
    data() {
        return {
            isCollapse: false
        }
    },
    computed: {
        // type: function (val) {
        //     return this.website.logo.indexOf('static') !== -1
        // }
    },
    methods: {}
}
</script>

<style scoped="scoped" lang="scss">
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-active {
    transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 230px;
    height: 64px;
    line-height: 64px;
    background: #2d3a4b;
    color: #fdfdfd;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    box-sizing: border-box;
}
.logo_title {
    padding: 0 5px 0 0;
    color: #409eff;
    font-size: 20px;
    &.is-bold {
        font-weight: 700;
    }
}
.is-text {
    position: absolute;
    top: 0;
    // left: 20px;
}
.is-img {
    position: absolute;
    top: 10px;
    left: 10px;
}
.logo_subtitle {
    font-size: 16px;
    padding-top: 5px;
}
</style>