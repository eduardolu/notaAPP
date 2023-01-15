import { registerUserWithEmailPassword, signInWitchGoogle } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "./authSlide"

export const chekingAuthentication =(email,password)=>{
    return async( dispatch )=>{
        dispatch(chekingCredentials())
    }
}

export const chekingGoogleSignIn =()=>{
    return async( dispatch )=>{
        dispatch(chekingCredentials())
        const result = await signInWitchGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const startCreatingWithEmailPassword = ({email, password, displayName})=>{
    return async( dispatch )=>{
        dispatch(chekingCredentials())
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName})
        if ( !ok ) return dispatch( logout({errorMessage}));
        dispatch(login({uid, email, displayName, photoURL}));
    }
}