<template>
   <nav v-if="user">
    <div >
        <p>Hi.. {{user.displayName}}</p>
        <p class="email"><span>{{user.email}}</span></p>
    </div>
    <p>{{error}}</p>
    <button @click="logout">Logout</button>
   </nav>
</template>

<script>

import  logoutForm  from "../composables/logout";
import getUser from "../composables/getUserData";

    export default {
        setup(){
      
          let {user} = getUser()

          let {error,logoutAcc} = logoutForm()

            let logout=async()=>{
                await logoutAcc()
             
            }

            return {error,logout,user}
        }
    }
</script>

<style>
     nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
      .clear{
        margin-right: 10px;
        background-color: crimson;
      }
</style>