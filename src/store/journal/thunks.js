import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseBD } from '../../firebase/config'
import { loadNote } from '../../helpers'
import { addNewEmptyNote, setActiveNote, setNote, setSaving, sevingNewNote, updateNote } from './'

export const startNewNote = () => {
    return async(dispatch, getState)=>{
        dispatch(sevingNewNote());
        const {uid} = getState().auth

        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        const newDoc = doc( collection( FirebaseBD, `${uid}/journal/notas`))
        await setDoc ( newDoc, newNote )
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote( newNote ))
        dispatch(setActiveNote( newNote ))
    }

}

export const startLoadingNotes = () =>{
    return async ( dispatch, getState ) =>{
        const {uid} = getState().auth
        if (!uid) throw new Error ('el UID no existe')
        const notes= await loadNote(uid)
        dispatch( setNote(notes))

    }

}
export const startSaveNote = () =>{
    return async(dispatch, getState) =>{
        dispatch(setSaving())
        const {uid} = getState().auth
        const{active:note} = getState().journal
        const noteToFireStore= {...note}
        delete noteToFireStore.id;
        const docRef = doc(FirebaseBD,`${uid}/journal/notas/${ note.id }`)
        await setDoc(docRef,noteToFireStore, {merge:true})
        dispatch(updateNote(note))
    }
}