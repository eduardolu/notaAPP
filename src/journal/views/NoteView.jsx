import { useMemo, useEffect, useRef } from "react"
import { useSelector, useDispatch} from 'react-redux'
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import {useFrom} from '../../hooks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { setActiveNote, startDeletingNote, startSaveNote, startUpLoadFiles } from "../../store/journal"


export const NoteView = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const {active:note, savedMessage, isSaving} = useSelector(state=> state.journal)

    const {body, title, date, onInputChange, FromState} = useFrom (note)

    const dateString =useMemo(()=>{
        const newdate = new Date (date)
        return newdate.toUTCString();
    },[date]);

    useEffect(() => {
      dispatch( setActiveNote(FromState));
    
    }, [FromState])
    
    useEffect(() => {
        if(!savedMessage) return;
        Swal.fire('nota actualizada',savedMessage, 'success')
    }, [savedMessage])
    
    
    const onSaveNote = () =>{ 
        dispatch(startSaveNote())
    }

    const onFileInputChange=({target})=>{
        //console.log(target.files);
        if (target.files===0) return;
        dispatch(startUpLoadFiles( target.files))
    }

    const onDelete = () => {
        dispatch( startDeletingNote())
    }

  return (
    <Grid className='animate__animated animate__fadeIn' container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={24} fontWeight='light'> {dateString} </Typography>
        </Grid>
        <Grid item>
            <input
                type="file"
                multiple
                ref={ fileInputRef }
                onChange={onFileInputChange}
                style={{display:'none'}}
            />
            <IconButton
                color="primary"
                disabled={isSaving}
                onClick={()=>fileInputRef.current.click()}
            >
                <UploadOutlined />
            </IconButton>

            <Button 
                onClick={onSaveNote}
                disabled={isSaving}
                color="primary" 
                sx={{padding:2}}
            >
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="ingrese un titulo"
                label="titulo"
                sx={{borde: 'none', mb: 1}}
                name='title'
                value={title}
                onChange={onInputChange}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Que quieres añadir a la lista"
                minRows={5}
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>
        
        <Grid container justifyContent='end'>
            <Button 
                onClick={ onDelete }
                sx={{mt:2}}
                color= 'error'
            >
                <DeleteOutline />Borrar
            </Button>
        </Grid>

        <ImageGallery images={note.imageUrls} />

    </Grid>
  )
}
