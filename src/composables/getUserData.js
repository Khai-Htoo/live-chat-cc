import { auth } from "@/firebase/config"
import { ref } from "vue"


let getUser=()=>{

    let user = ref(auth.currentUser)

        auth.onAuthStateChanged((data)=>{
            user.value = data
           })
     

    return {user}
}
export default  getUser