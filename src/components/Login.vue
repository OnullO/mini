<template>
  <div>
     姓名<input type="text" v-model="username">
     密码<input type="text" v-model="password">
     <div @click="login" style="border:1px solid red;width:40px;">
      登录
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
        username:'',
        password:''
    }
  },
  methods:{
    login(){
      axios.post('/api/login',{
        username:this.username,
        password:this.password
      })
    }
  }
}
</script>
