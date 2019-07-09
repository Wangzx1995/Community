<template>
    <div>
        首页
        <p>{{msg}}</p>
    </div>
</template>

<script>
import api from '@/api/request'
import { getList } from '@/api/login'

export default {
    name: 'Mock',
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata() {
            this.$http.get("/data/list").then(res => {
                // console.log(res);
                this.msg = res.data.data
            });
        }
    }
}

</script>

<style>
</style>
