import { useMemo, useEffect } from "react"
import { useSelector, useDispatch} from 'react-redux'
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import {useFrom} from '../../hooks'
import { setActiveNote, startSaveNote } from "../../store/journal"


export const NoteView = () => {
    const dispatch = useDispatch();
    const {active:note} = useSelector(state=> state.journal)

    const {body, title, date, onInputChange, FromState} = useFrom (note)

    const dateString =useMemo(()=>{
        const newdate = new Date (date)
        return newdate.toUTCString();
    },[date]);

    useEffect(() => {
      dispatch( setActiveNote(FromState));
    
    }, [FromState])
    
    const onSaveNote = () =>{
        dispatch(startSaveNote())
    }

  return (
    <Grid className='animate__animated animate__fadeIn' container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={24} fontWeight='light'> {dateString} </Typography>
        </Grid>
        <Grid item>
            <Button 
                onClick={onSaveNote}
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
        {/* imagen */}
        <ImageGallery />
    </Grid>
  )
}
