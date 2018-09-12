<template>
    <div>
        <h1>我是登录界面</h1>
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button @click="handleSubmit"> 点击登录</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    // created(){
    //     console.log(this.$router)
    //     console.log(this.$route.params)

    // },
    methods:{
        handleSubmit(){
            axios.post('http://localhost:3000/login',{
                username:this.username,
                password:this.password}).then(res => {
                if(res.data.code == 200){
                    alert('登录成功')
                    this.$router.push({name:'about'})
                }else{
                    alert('登录失败')
                }
            })
        }
    }
}
</script>

<style>

</style>
