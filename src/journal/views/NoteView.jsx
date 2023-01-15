import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"


export const NoteView = () => {
  return (
    <Grid className='animate__animated animate__fadeIn' container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={24} fontWeight='light'> 12 de agosto de 2023 </Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}}>
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
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="Que quieres añadir a la lista"
                minRows={5}
            />
        </Grid>
        {/* imagen */}
        <ImageGallery />
    </Grid>
  )
}
