<template>
    <div class="chat-window">
         <div class="messages" ref="msgBox">
            <div v-for="message in format" :key="message.id" class="single"  @click="showDate">
                <span v-if="mute" class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.name}}:</span>
                <span class="message">{{message.message}}</span>
            </div>
         </div>
    </div>
</template>

<script>
import {  computed, onUpdated, ref } from 'vue'
import { db } from "../firebase/config"
import { formatDistanceToNow } from "date-fns";
    export default {
        
       setup(){
        let msgBox = ref(null)
        onUpdated(()=>{
           msgBox.value.scrollTop = msgBox.value.scrollHeight
        })
        let mute = ref(false)
        let showDate = ()=>{
            mute.value = !mute.value
        }
        let messages = ref([])
        let format = computed(()=>{
            return messages.value.map((msg)=>{
               let formatTime = formatDistanceToNow(msg.created_at.toDate())
               return {...msg,created_at:formatTime}
            })
        })
           db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            let results = [];
             snap.docs.forEach((doc)=>{
                let document = {...doc.data(),id:doc.id}
                if(document.created_at){
                    results.push(document)
                }
             })
             messages.value = results
           })

           return {messages,format,mute,showDate,msgBox}
       }

    }
</script>

<style >
.chat-window {
        background: #fafafa;
        padding: 30px 20px;
        height: 500px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
        color: purple;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }

</style>