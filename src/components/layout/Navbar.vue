<template>
    <el-menu
        class="navbar"
        mode="horizontal"
    >
        <!-- <nx-hamburger
            class="hamburger-container"
            :toggleClick="toggleSideBar"
            :isActive="sidebar.opened"
        ></nx-hamburger> -->

        <nx-breadcrumb class="breadcrumb-container"></nx-breadcrumb>

        <div class="right-menu">

            <!-- <nx-github
                style="margin-top:2px"
                class="nx-help right-menu-item"
            ></nx-github> -->
            <!-- <error-log class="errLog-container right-menu-item"></error-log> -->
            <!-- <nx-help class="nx-help right-menu-item" /> -->

            <!-- <lang-select class="international right-menu-item"></lang-select> -->
            <!-- <nx-lang-select class="international right-menu-item"></nx-lang-select> -->
            <span class="adminName">{{name.name}}</span>
            <el-dropdown
                class="avatar-container right-menu-item"
                trigger="click"
            >
                <div class="avatar-wrapper">
                    <img
                        class="user-avatar"
                        src="./../../../1.gif"
                    >
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>
                            home
                        </el-dropdown-item>
                    </router-link>

                    <el-dropdown-item divided>
                        <span
                            @click="logout"
                            style="display:block;"
                        >退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script>
// import { mapGetters } from 'vuex'
import { getToken } from '@/utils/auth'
import nxBreadcrumb from '@/components/navbar/nx-breadcrumb'
import nxHamburger from '@/components/navbar/nx-hamburger'
// import nxHelp from '@/components/navbar/nx-help/index'

// import nxLangSelect from '@/components/navbar/nx-lang-select/index'

// import nxGithub from '@/components/navbar/nx-github/index'
export default {
    name: 'navBar',
    data() {
        return {
            name: JSON.parse(getToken())
        }
    },
    components: {
        nxBreadcrumb,
        nxHamburger,
        // nxHelp,
        // nxLangSelect,
        // nxGithub
    },
    computed: {
        // ...mapGetters(['sidebar', 'name', 'avatar'])
    },
    methods: {
        toggleSideBar() {
            // this.$store.dispatch('ToggleSideBar')
        },
        logout() {
            this.$store.dispatch('LogOut').then(() => {
                location.reload() // In order to re-instantiate the vue-router object to avoid bugs
            })
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }
    .breadcrumb-container {
        float: left;
    }
    .nx-help {
        display: inline-block;
        vertical-align: top;
    }
    .right-menu {
        float: right;
        height: 100%;
        &:focus {
            outline: none;
        }
        .right-menu-item {
            display: inline-block;
            margin: 0 8px;
        }
        .screenfull {
            height: 20px;
        }
        .international {
            vertical-align: top;
        }
        .theme-switch {
            vertical-align: 15px;
        }
        .adminName {
            float: left;
            line-height: 50px;
            display: inline-block;
        }
        .avatar-container {
            height: 50px;
            margin-right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
