import { auth } from "@/firebase/config"
import { ref } from "vue"

let error = ref(null)
let logoutForm=()=>{

    let logoutAcc=async()=>{
        try{
            await auth.signOut()
        console.log("logged out");
        }
        catch(err){
          error.value = err.message
        }
    }

    return {error,logoutAcc}
}
export default logoutForm