import { ref } from "vue"
import { auth } from '../firebase/config'

let error = ref('')

let signUpForm=()=>{

    let createAcc=async(email,password,name)=>{
        try{
            let res = await auth.createUserWithEmailAndPassword(email,password)
            if(!res){
                throw new Error("Could not create new user")
            }
            res.user.updateProfile({displayName:name})
            return res;
        }
        catch(err){
            error.value = err.message
        }
    }

    return {error,createAcc}
}
export default signUpForm