<template>
    <div>
        <el-form
            ref="form"
            :model="form"
            label-width="80px"
            :inline="true"
        >
            <el-form-item label="活动区域">
                <el-select
                    v-model="form.name"
                    placeholder="活动区域"
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: ''
            }
        }
    }
}
</script>

<style>
</style>
