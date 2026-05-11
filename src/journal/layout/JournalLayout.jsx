import { useState } from 'react';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { SideBar, NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{display:'flex'}} 
    className='animate__animated animate__fadeIn' >
        <NavBar drawerWidth={ drawerWidth } onMenuClick={handleDrawerToggle}/>

        <SideBar 
            drawerWidth={ drawerWidth } 
            mobileOpen={mobileOpen}
            onClose={handleDrawerToggle}
        />

        <Box component='main' sx={{flexGrow:1, p:3}}>
            <Toolbar />
                {children}

        </Box>

    </Box>
  )
}
