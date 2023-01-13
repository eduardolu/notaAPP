import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>texto para rellenar para comprobar las cosas</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color:'while',
          backgroundColor: 'error.main',
          ':hover':{backgroundColor:'error.main', opacity: 0.8},
          position: 'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize: 35}}/>
      </IconButton>

    </JournalLayout>
  )
}