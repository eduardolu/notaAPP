import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider ();

const firebaseErrorMessages = {
    'auth/email-already-in-use': 'Ya existe una cuenta con ese correo.',
    'auth/invalid-email': 'El correo no tiene un formato valido.',
    'auth/weak-password': 'La contrasena debe tener al menos 6 caracteres.',
    'auth/missing-password': 'Debes ingresar una contrasena.',
    'auth/invalid-credential': 'Correo o contrasena incorrectos.',
    'auth/user-not-found': 'No existe una cuenta con ese correo.',
    'auth/wrong-password': 'La contrasena es incorrecta.',
    'auth/popup-closed-by-user': 'Se cerro la ventana de Google antes de terminar.',
    'auth/cancelled-popup-request': 'La solicitud de Google fue cancelada.',
    'auth/network-request-failed': 'No se pudo conectar con Firebase. Revisa tu conexion.',
    'auth/too-many-requests': 'Demasiados intentos. Intenta de nuevo mas tarde.',
}

const getFirebaseErrorMessage = (error) => {
    return firebaseErrorMessages[error.code] || 'No se pudo completar la autenticacion. Intenta de nuevo.';
}

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
        return{
            ok:false,
            errorMessage: getFirebaseErrorMessage(error),
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName})=>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email, password)
        const {uid, photoURL} = resp.user

        // TODO: actualizar el displayName en firebase
        await updateProfile(FirebaseAuth.currentUser,{displayName});
        
        return{
            ok:true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return {
            ok:false,
            errorMessage: getFirebaseErrorMessage(error),
        }
    }
}

export const loginWithEmailPassword = async({email, password}) =>{
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth,email, password);
        const {uid, photoURL, displayName} = resp.user

        return{
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return {
            ok: false, 
            errorMessage: getFirebaseErrorMessage(error),
        }
    }
}

export const logoutFirebase = async() =>{
    return FirebaseAuth.signOut();
}
