import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { useDispatch, useSelector } from 'react-redux'
import { NothingSelectedView } from "../views/NothingSelectedView"
import { startNewNote } from "../../store/journal"


export const JournalPage = () => {

  const {isSaving, active} = useSelector ( state => state.journal)
  const dispatch = useDispatch()
  const onClickNewNote = () =>{
    dispatch(startNewNote());
  }


  return (
    <JournalLayout>
      {/* <Typography>texto para rellenar para comprobar las cosas</Typography> */}
      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}

      <IconButton
        disabled = {isSaving}
        onClick={onClickNewNote}
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