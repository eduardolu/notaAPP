import {useDispatch} from 'react-redux'
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { setActiveNote } from '../../store/journal'

const EMPTY_IMAGES = [];

export const SideBarItem = ({title = '', body, id, date, imageUrls = EMPTY_IMAGES}) => {
    const dispatch = useDispatch();
    

    const newTitle = useMemo( ()=>{
        return title.length >17
        ? title.substring(0,17)+'...'
        : title
    },[title])

    const onViewNote= () =>{
        dispatch(setActiveNote({title, body, id, date, imageUrls }))
    }

  return (
    <ListItem  disablePadding>
        <ListItemButton onClick={onViewNote}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle} />
                <ListItemText secondary={body} />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
