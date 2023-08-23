<template>
   <form class="flex">
       <textarea @keydown.enter="submit" placeholder="text message and hit enter to sent" v-model="message"></textarea>
       <span @click="submit" class="sent"><i class="fa-solid fa-paper-plane"></i></span>
   </form>
</template>

<script>
import getUser from "../composables/getUserData";
import { ref } from 'vue'
import { timestamp } from '@/firebase/config';
import addCollection from "../composables/useCollection";
    export default {
        setup(){
            let {user} = getUser()
            let message = ref('')
            let {error,addDoc} = addCollection("messages")
            let submit=async()=>{
               
               let chat = {
                message : message.value,
                name : user.value.displayName,
                created_at : timestamp()
               }
               
               await addDoc(chat);

               message.value=""
            }
            return {message,submit,error}
        }
    }
</script>

<style >
form {
        margin: 10px;
      }
      textarea {
        width: 90%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
      .flex{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .sent{
        font-size: 30px;
        margin-bottom: 5px;
        color: #5ae4ca;
      }
</style>