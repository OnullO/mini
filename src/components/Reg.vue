<template>
  <div>
     姓名<input type="text" v-model="username">
     密码<input type="text" v-model="password">
     <div @click="reg" style="border:1px solid red;width:40px;">
     注册
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
    reg(){
      axios.post('/api/reg',{
        username:this.username,
        password:this.password
      })
    }
  }
}
</script>
