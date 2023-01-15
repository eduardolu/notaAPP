import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider ();

export const signInWitchGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth,googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log({credentials});
        const {email, displayName, uid, photoURL} = result.user

        return {
            ok:true,
            displayName, email, photoURL, uid 
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        return{
            ok:false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName})=>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email, password)
        const {uid, photoURL} = resp.user
        console.log(resp);

        // TODO: actualizar el displayName en firebase
         
        return{
            ok:true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return {
            ok:false, errorMessage:error.message
        }
    }
}