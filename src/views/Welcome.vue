<template>
    <div class="welcome container">
        <div v-if="showLogin">
            <Login @enterChatRoom="enterChatRoom"></Login>
            <p>Not a Member ? <span @click="formToggle">create account!</span></p>
        </div>
       <div v-else>
          <SignUp @enterChatRoom="enterChatRoom"></SignUp>
          <p>Already Member? <span @click="formToggle">Login Here!</span></p>
       </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import { useRouter } from "vue-router";
import SignUp from '../components/SignUp'
export default {
  components: {
    Login, SignUp },
        
     setup(){
        let router = useRouter()
        let showLogin = ref(true)
        let formToggle = () => {
            showLogin.value = !showLogin.value
        }

        let enterChatRoom=()=>{
            router.push({name:'ChatRoom'})
        }
        return {showLogin,formToggle,enterChatRoom}
     }

    }
</script>

<style >
.welcome{
    padding: 20px 0;
    text-align: center;
}
 /* form styles */
  .welcome form {
    width: 280px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 200px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>