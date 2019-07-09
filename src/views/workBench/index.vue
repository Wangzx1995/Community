<template>
    <div style="position:relative">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content">
                    <div class="name">小区信息</div>
                    <div class="message-left flex">
                        <div>
                            <p>楼栋量</p>
                            <b>600</b>
                        </div>
                        <div>
                            <p>楼栋量</p>
                            <b>600</b>
                        </div>
                        <div>
                            <p>楼栋量</p>
                            <b>600</b>
                        </div>
                        <div>
                            <p>楼栋量</p>
                            <b>600</b>
                        </div>
                        <div>
                            <p>楼栋量</p>
                            <b>600</b>
                        </div>
                        <div>
                            <p>楼栋量</p>
                            <b>600</b>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content">
                    <div class="name">待办事项</div>
                    <div class="message-right flex">
                        <div>
                            <p>物业报修</p>
                            <div class="flex">
                                <div>
                                    <p>待派工</p>
                                    <b>10</b>
                                </div>
                                <div>
                                    <p>未解决</p>
                                    <b>22</b>
                                </div>
                            </div>
                        </div>
                        <span></span>
                        <div>
                            <p>投诉建议</p>
                            <div class="flex">
                                <div>
                                    <p>待派工</p>
                                    <b>10</b>
                                </div>
                                <div>
                                    <p>未解决</p>
                                    <b>22</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="select">
            <el-input placeholder="请输入楼栋号快速定位">
                <el-button
                    slot="append"
                    icon="el-icon-search"
                ></el-button>
            </el-input>
        </div>
        <div class="table">
            <mainTable @my-move="changeShow" />
        </div>
        <transition name="slide-fade">
            <div
                class="move"
                v-if="show"
            >
                <div class="btn">
                    <el-button
                        type="primary"
                        @click="show = !show"
                    ><i class="el-icon-arrow-right"></i></el-button>
                </div>
                <move />
            </div>
        </transition>
    </div>
</template>

<script>
import mainTable from "./table.vue";
import move from "./move.vue";

export default {
    data() {
        return {
            show: true
        }
    },
    components: {
        mainTable, move
    },
    methods: {
        changeShow() {
            this.show = !this.show
        }
    }
}
</script>

<style lang="less" scoped>
.grid-content {
    border: 1px solid rgb(131, 129, 129);
    background: rgb(236, 233, 233);
    padding: 0 10px;
    height: 140px;
    .message-left {
        b {
            line-height: 70px;
            font-size: 20px;
            font-weight: bold;
        }
    }
    .message-right {
        p {
            line-height: 25px;
        }
        b {
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
        }
        span {
            display: inline-block;
            width: 1px;
            background: #ccc;
            margin-right: 20px;
            height: 60px;
            vertical-align: middle;
        }
    }
    .name {
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
    }
}
.flex {
    display: flex;
    align-items: center;
    > div {
        flex: 1;
    }
}
.select {
    overflow: hidden;
    margin-bottom: 20px;
    .el-input {
        width: 400px;
        float: right;
    }
}
.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(3000px);
}
.move {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100;
    background: #ffffff;
    min-height: 500px;
    overflow: hidden;
    padding-left: 30px;
    .btn {
        position: absolute;
        left: 0px;
        top: 50%;
        margin-top: -108px;
        .el-button {
            padding: 100px 5px;
            margin: auto 0;
            vertical-align: middle;
        }
    }
}
</style>
