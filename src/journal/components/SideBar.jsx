import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from 'react-redux'
import { SideBarItem } from "./"


export const SideBar = ({ drawerWidth = 240, mobileOpen, onClose }) => {
    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

    const drawer = (
        <Box>
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    notes.map(note => (
                        <SideBarItem key={note.id} {...note} />
                    ))
                }
            </List>
        </Box>
    );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onClose}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>

    )
}
