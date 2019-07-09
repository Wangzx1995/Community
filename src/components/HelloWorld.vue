<template>
    <div class="hello">
        <button @click="getList">123123</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        getList() {
            this.$http.get('../../static/data/cart.json')
                .then(function (res) {
                    console.log(res)
                }
                    .catch(err => { console.log(err) })
                )
        }
    }
}
</script>

<style scoped>
</style>
