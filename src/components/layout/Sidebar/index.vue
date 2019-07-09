<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <logo></logo>
        <el-menu
            mode="vertical"
            :show-timeout="200"
            :default-active="$route.path"
            :collapse="isCollapse"
            background-color="rgb(48, 65, 86)"
            text-color="rgb(191, 203, 217)"
            active-text-color="#409EFF"
            :unique-opened="true"
        >
            <sidebar-item></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import logo from './logo'
export default {
    components: {
        logo,
        SidebarItem
    },
    data() {
        return {
            isCollapse: false
        }
    },
    computed: {
        // ...mapGetters([
        //     'sidebar',
        //     'permission_routers'
        // ]),
        // isCollapse() {
        //     return !this.sidebar.opened
        // }
    }
}
</script>
