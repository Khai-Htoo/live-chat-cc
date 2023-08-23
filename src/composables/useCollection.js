import { ref } from "vue"
import { db } from "../firebase/config";

let addCollection=(collection)=>{
    let error = ref(null)
     let addDoc=async(doc)=>{
      try{
        await db.collection(collection).add(doc)
      }
      catch(err){
          console.log(err.message);
          error.value = "Could not sent message!Check your Network"
      }
     }

     return {error,addDoc}
}
export default addCollection