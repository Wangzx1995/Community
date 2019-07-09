<template>
    <div>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <!-- <tags-view></tags-view> -->
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import AppMain from './AppMain'

export default {
    name: 'layout',
    components: {
        Sidebar, Navbar, AppMain
    },
}
</script>

<style>
</style>
