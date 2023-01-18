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
        //     imageURLs: [],
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
        },
        setNote: ( state, action) =>{
            state.notes = action.payload;
        },
        setSaving: ( state ) =>{
            state.isSaving = true;
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
        },
        deleteNoteById: ( state, action) =>{

        },
    }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNote,
    setSaving, updateNote, deleteNoteById, sevingNewNote
} = journalSlice.actions;