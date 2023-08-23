<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login" >
        <input type="email" placeholder="Enter Email.." v-model="email">
        <input type="password" placeholder="Enter Password.." v-model="password">
        <p  class="error">{{error}}</p>
        <button>login</button>
      </form>
    </div>
</template>

<script>
import loginForm from '../composables/login'
import { ref } from 'vue'
    export default {
        setup(props,context){
            let email = ref('')
            let password = ref('')

            let {error,loginAcc} = loginForm()

            let login=async()=>{
               let res = await loginAcc(email.value,password.value)
               if(res){
                  context.emit('enterChatRoom')
               }
            }
            return {email,password,login,error}
        }
    }
</script>

<style lang="scss" scoped>

</style>