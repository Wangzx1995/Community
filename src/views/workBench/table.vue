<template>
    <div class="main">
        <div
            class="box"
            v-for="i in 12"
            :key="i"
        >
            <el-row>
                <el-col :span="6">
                    <div
                        class="top"
                        @click="dialogVisible.xiangqing=true"
                    >详情</div>
                </el-col>
                <el-col :span="6">
                    <div
                        class="top"
                        @click="dialogVisible.bianji=true"
                    >编辑</div>
                </el-col>
                <el-col :span="6">
                    <div
                        class="top"
                        @click="del"
                    >删除</div>
                </el-col>
                <el-col :span="6">
                    <div
                        class="top"
                        @click="dialogVisible.pianqu=true"
                    >设置片区</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="middle">
                        <p>房间</p>
                        <p>80层</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="middle">
                        <p>楼层</p>
                        <p>28层</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="middle">
                        <p>总人数</p>
                        <p>123人</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="middle">
                        <p>租客数</p>
                        <p>345人</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="bottom">1单元</div>
                </el-col>
                <el-col :span="6">
                    <div class="bottom">2单元</div>
                </el-col>
                <el-col :span="6">
                    <div class="bottom">3单元</div>
                </el-col>
                <el-col :span="6">
                    <div class="bottom">4单元</div>
                </el-col>
            </el-row>
        </div>
        <div
            class="box addBox"
            @click="dialogVisible.bianji=true"
        >
            <i class="el-icon-plus"></i>
        </div>
        <div name="详情">
            <el-dialog
                title="楼栋详情"
                :visible.sync="dialogVisible.xiangqing"
                width="20%"
                center
            >
                <div class="dialog-xq">
                    <el-row>
                        <el-col :span="11">
                            <div
                                class="grid-xq"
                                v-for="i in 5"
                                :key="i"
                            >
                                <span>楼栋编号</span>
                                <span>0101</span>
                            </div>
                        </el-col>
                        <el-col :span="2">
                            <div class="grid-xq"></div>
                        </el-col>
                        <el-col :span="11">
                            <div class="grid-xq">
                                <div
                                    class="grid-xq"
                                    v-for="i in 5"
                                    :key="i"
                                >
                                    <span>楼栋编号</span>
                                    <span>0101</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-dialog>
        </div>
        <div name="编辑">
            <el-dialog
                title="新增楼栋"
                :visible.sync="dialogVisible.bianji"
                width="700px"
                center
            >
                <el-form
                    :model="form.bj"
                    :inline="true"
                    label-width="120px"
                    class="dialog-bj"
                >
                    <el-form-item label="楼栋编号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="有无电梯">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="有"></el-radio>
                            <el-radio label="无"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="楼栋名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="建筑年代">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="楼层数">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="所属片区">
                        <el-select
                            v-model="form.region"
                            placeholder="请选择所属片区"
                        >
                            <el-option
                                label="区域一"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="区域二"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="产权性质">
                        <el-select
                            v-model="form.region"
                            placeholder="请选择产权性质"
                        >
                            <el-option
                                label="区域一"
                                value="shanghai"
                            ></el-option>
                            <el-option
                                label="区域二"
                                value="beijing"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <hr />
                    <el-form-item label="单元">
                        <el-button
                            type="primary"
                            plain
                            @click="num++"
                        >新增</el-button>
                    </el-form-item>
                    <br />
                    <div
                        v-for="i in num"
                        :key="i"
                    >
                        <el-form-item
                            label="单元编号"
                            label-width="auto"
                        >
                            <el-input
                                v-model="form.name"
                                style="width:120px;"
                            ></el-input>
                        </el-form-item>
                        <el-form-item
                            label="单元名称"
                            label-width="auto"
                        >
                            <el-input
                                v-model="form.name"
                                style="width:120px;"
                            ></el-input>
                        </el-form-item>
                        <el-form-item
                            label="房屋数"
                            label-width="auto"
                        >
                            <el-input
                                v-model="form.name"
                                style="width:60px;"
                            ></el-input>
                        </el-form-item>
                        <el-button
                            type="primary"
                            icon="el-icon-delete"
                        ></el-button>
                    </div>
                </el-form>
                <div
                    slot="footer"
                    class="dialog-footer"
                >
                    <el-button
                        type="primary"
                        @click="dialogFormVisible = false"
                    >保 存</el-button>
                    <el-button @click="dialogVisible.bianji = false">取 消</el-button>

                </div>
            </el-dialog>
        </div>
        <div name="片区">
            <el-dialog
                title=""
                :visible.sync="dialogVisible.pianqu"
                width="60%"
                center
            >
                <div class="dialog-pq">
                    <el-form
                        ref="form"
                        :model="form.pq"
                        label-width="80px"
                        :inline="true"
                    >
                        <el-form-item label="片区名称">
                            <el-select
                                v-model="form.name"
                                placeholder="片区名称"
                            >
                                <el-option
                                    label="区域一"
                                    value="shanghai"
                                ></el-option>
                                <el-option
                                    label="区域二"
                                    value="beijing"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-button type="primary">新增</el-button>
                    </el-form>
                    <div>
                        <ul>
                            <li
                                v-for="(i,index) in pianquLi"
                                :key="i.value"
                            >{{i.num}}
                                <i
                                    :class="i.selected?'liActive':''"
                                    @click="choosePianqu(index)"
                                ></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    slot="footer"
                    class="dialog-footer"
                >
                    <el-button
                        type="primary"
                        @click="dialogVisible.pianqu = false"
                    >保 存</el-button>
                    <el-button @click="dialogVisible.pianqu = false">取 消</el-button>
                </div>
            </el-dialog>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: {
                xiangqing: false,
                bianji: false,
                pianqu: false,
            },
            form: {
                bj: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                pq: {
                    name: ''
                }

            },
            formLabelWidth: '120px',
            num: 1,
            pianquLi: [
                { num: 0, selected: false },
                { num: 1, selected: false },
                { num: 2, selected: false },
                { num: 3, selected: false },
                { num: 4, selected: false },
                { num: 5, selected: false },
                { num: 6, selected: false },
                { num: 7, selected: false },
                { num: 8, selected: false },
                { num: 9, selected: false },
            ]
        }
    },
    methods: {
        del() {
            this.$confirm('确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        choosePianqu(index) {
            this.pianquLi[index].selected = !this.pianquLi[index].selected;
        }
    }
}
</script>
<style lang="less" scoped>
.main {
    border: 1px solid rgb(131, 129, 129);
    background: rgb(236, 233, 233);
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    .addBox {
        line-height: 148px;
        text-align: center;
        font-size: 50px;
        cursor: pointer;
    }
    .box {
        width: 300px;
        margin: 0 10px 10px 0;
        border: 1px solid rgb(131, 129, 129);
        background: #ffffff;
        .el-row:not(:last-child) {
            margin-bottom: 10px;
        }

        .top {
            border: 1px solid #ccc;
            border-radius: 0%;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
        }
        .middle {
            p {
                line-height: 30px;
                padding-left: 10px;
            }
        }
        .bottom {
            border: 1px solid #ccc;
            border-radius: 0%;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
        }
    }
}
.dialog-xq {
    .grid-xq {
        min-height: 36px;
        line-height: 36px;
        span:nth-child(1) {
            display: inline-block;
            width: 100px;
        }
    }
}
.dialog-bj {
    .el-select {
        width: 185px;
    }
}
.dialog-pq {
    ul {
        overflow: hidden;
        li {
            width: 120px;
            line-height: 80px;
            text-align: center;
            background: rgb(236, 233, 233);
            margin: 0 20px 10px 0;
            float: left;
            position: relative;
            i {
                cursor: pointer;
                display: inline-block;
                width: 20px;
                height: 20px;
                position: absolute;
                background: #ffffff;
                right: 0px;
                top: 0px;
                border: 1px solid rgb(131, 129, 129);
            }
            .liActive {
                background: #409eff !important;
            }
        }
    }
}
</style>
