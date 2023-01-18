import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseBD } from "../firebase/config";

export const loadNote =async( uid='')=>{
    if (!uid) throw new Error ( 'El UID de usuario no existe');

    const collectionRef = collection(FirebaseBD,`${uid}/journal/notas`);
    const docs = await getDocs(collectionRef);
    const notes = [];
    docs.forEach((doc)=>{
        notes.push({ id: doc.id, ...doc.data()})
    })
    return notes;
}