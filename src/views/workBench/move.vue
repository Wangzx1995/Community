<template>
    <div class="container">
        <div class="grid1">
            1幢1单元
        </div>
        <div class="grid2">
            <ul>
                <li
                    v-for="i in 7"
                    :key="i"
                >
                    <p>
                        单元编号
                    </p>
                    <p>
                        {{i}}
                    </p>
                </li>
            </ul>
        </div>
        <div class="grid3">
            <el-row>
                <el-col :span="18">
                    <div>
                        <el-input placeholder="请输入房屋号快速定位">
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                            ></el-button>
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div>
                        <el-button
                            type="primary"
                            plain
                        >编辑</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row
                v-for="i in 7"
                :key="i"
            >
                <el-col :span="20">
                    <div class="home">
                        <el-row>
                            <el-col :span="6">
                                <div class="homeNum">{{'0'+i+'0'+(i+1)}}</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="homeNum">{{'0'+i+'0'+(i+2)}}</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="homeNum">{{'0'+i+'0'+(i+3)}}</div>
                            </el-col>
                            <el-col :span="6">
                                <div class="homeNum">{{'0'+i+'0'+(i+4)}}</div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="cengNum">
                        {{i}}层
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="grid4">
            11
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.container {
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 80px 1fr;
    height: 900px;
    > div {
        min-height: 100px;
        border: 1px solid rgb(131, 129, 129);
        background: #ffffff;
    }
    .grid1 {
        font-size: 40px;
        font-weight: bold;
        line-height: 80px;
        border-top: none;
        border-left: none;
    }
    .grid2 {
        border-top: none;
        border-right: none;
        padding-left: 20px;
        ul {
            overflow: hidden;
            li {
                float: left;
                width: 100px;
                padding-top: 10px;
                p {
                    line-height: 35px;
                }
            }
        }
    }
    .grid3 {
        padding: 10px;
        border-bottom: none;
        border-left: none;
        > .el-row:not(:first-child) {
            padding-bottom: 15px;
            border-bottom: 1px solid #ccc;
        }
        > .el-row:last-child {
            padding-bottom: 0;
            border-bottom: none;
        }
        .homeNum {
            border: 1px solid #ccc;
            margin-right: 10px;
            line-height: 50px;
            text-align: center;
        }
        .cengNum {
            line-height: 50px;
            text-align: center;
        }
    }
    .grid4 {
        border-bottom: none;
        border-right: none;
    }
}
</style>
