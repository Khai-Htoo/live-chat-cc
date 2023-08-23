<template>
    <div>
      <h2>SignUp</h2>
      <form @submit.prevent="signUp" >
        <input type="text" placeholder="Enter Name.." v-model="name">
        <input type="email" placeholder="Enter Email.." v-model="email">
        <input type="password" placeholder="Enter Password.." v-model="password">
        <p class="error">{{error}}</p>
        <button>SignUp</button>
      </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import signUpForm from '../composables/signUp'
    export default {
        setup(props,context){
            let name = ref('')
            let email = ref('')
            let password = ref('')

            let {error,createAcc} = signUpForm()

            let signUp=async()=>{
                
              let res = await createAcc(email.value,password.value,name.value)
              if(res){
                context.emit('enterChatRoom')
              }
            }
            return {name,email,password,signUp,error}
        }
    }
</script>

<style >

</style>