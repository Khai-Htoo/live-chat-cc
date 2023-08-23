import { ref } from 'vue'
import { auth } from '../firebase/config'

let loginForm=()=>{
    let error = ref(null)
    let loginAcc=async(email,password)=>{
        try{
            let res = await auth.signInWithEmailAndPassword(email,password)
             if(!res){
               throw new Error("Something Wrong")
             }
            return res;
        }
        catch(err){
          error.value = err.message
        }
    }
    
    return {error,loginAcc}
}
export default loginForm