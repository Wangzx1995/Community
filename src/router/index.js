import Vue from "vue";
import Router from "vue-router";
import layout from "@/components/layout/index";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: layout,
            redirect: "/workBench"
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/login/index")
        },
        {
            path: "/404",
            component: () => import("@/views/errorPage/404")
        },
        {
            path: "/workBench",
            component: layout,
            redirect: "/workBench/index",
            meta: {
                title: "workBench",
                icon: "workBench"
            },
            children: [
                {
                    path: "index",
                    name: "index",
                    component: () => import("@/views/workBench/index"),
                    meta: {
                        title: "工作台",
                        icon: "dashboard"
                    }
                }
            ]
        },
        {
            path: "/houseManage",
            component: layout,
            redirect: "/houseManage/BaseForm",
            name: "houseManage",
            meta: {
                title: "房产管理",
                icon: "form"
            },
            children: [
                {
                    path: "pianqu",
                    name: "pianqu",
                    component: () => import("@/views/houseManage/pianqu"),
                    meta: {
                        title: "片区管理"
                    }
                },
                {
                    path: "loudong",
                    name: "loudong",
                    component: () => import("@/views/houseManage/loudong"),
                    meta: {
                        title: "楼栋管理"
                    }
                },
                {
                    path: "danyuan",
                    name: "danyuan",
                    component: () => import("@/views/houseManage/danyuan"),
                    meta: {
                        title: "单元管理"
                    }
                },
                {
                    path: "zhufang",
                    name: "zhufang",
                    component: () => import("@/views/houseManage/zhufang"),
                    meta: {
                        title: "住房管理"
                    }
                }
            ]
        },
        {
            path: "/ccc",
            component: layout,
            redirect: "/ccc/c1",
            name: "ccc",
            meta: {
                title: "ccc",
                icon: "table"
            },
            children: [
                {
                    path: "c1",
                    name: "c1",
                    component: () => import("@/views/ccc/c1"),
                    meta: {
                        title: "c1"
                    }
                },
                {
                    path: "c2",
                    name: "c2",
                    component: () => import("@/views/ccc/c2"),
                    meta: {
                        title: "c2"
                    }
                },
                {
                    path: "c3",
                    name: "c3",
                    component: () => import("@/views/ccc/c3"),
                    meta: {
                        title: "c3"
                    }
                }
            ]
        }
    ]
});
