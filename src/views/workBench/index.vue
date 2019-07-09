<template>
    <div>
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
            <mainTable />
        </div>
    </div>
</template>

<script>
import mainTable from "./table.vue";

export default {
    data() {
        return {

        }
    },
    components: {
        mainTable
    },
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
</style>
