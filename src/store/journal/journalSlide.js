import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes:[],
        active:null,
        // active:{
        //     id:'1234',
        //     title: '',
        //     body: '',
        //     date: 1234,
        //     imageUrls: [],
        // },
    },
    reducers: {
        sevingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state,action) =>{
            state.notes.push ( action.payload )
            state.isSaving = false;
        },
        setActiveNote: ( state, action) =>{
            state.active = action.payload;
            state.savedMessage = '';
        },
        setNote: ( state, action) =>{
            state.notes = action.payload;
        },
        setSaving: ( state ) =>{
            state.isSaving = true;
            state.savedMessage = '';
        },
        updateNote:( state, action) =>{ //payload es la nota
            state.isSaving = false;
            state.notes= state.notes.map(note=>{

                if (note.id === action.payload.id) {
                    return action.payload
                }

                return note;
            })
            //todo mensaje de modificacion
            state.savedMessage=`${action.payload.title}, actualizada correctamente`;



        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false;
        },
        clearNotesLogout: ( state ) => {
            state.isSaving=false;
            state.savedMessage = '';
            state.notes =[];
            state.active=null;
        },
        deleteNoteById: ( state, action) =>{
            state.active = null;
            state.notes = state.notes.filter((nota)=> nota.id !== action.payload)
        },
    }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNote,
    setSaving, updateNote, deleteNoteById, sevingNewNote,
    setPhotosToActiveNote, clearNotesLogout
} = journalSlice.actions;