import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid 
      className='animate__animated animate__fadeIn'
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
        <Grid item xs={12}>
             <StarOutline sx={{fontSize:100, color: 'red'}} />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h5" color='white'>Crea una nueva nota</Typography>
        </Grid>
        {/* <Grid item
        className='box-shadow'
        xs={3}
        sx={{width:{sm:450}, backgroundColor: 'white',padding: 3, borderRadius:2 }}
        >

        </Grid> */}
    </Grid>
  )
}
