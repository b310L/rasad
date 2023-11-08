import { Box, IconButton } from '@mui/material';
import React from 'react'
//icons
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { primary } from '../BaseColor';
import Logo from '../utility/Logo';
const MobileAppbar = ({openDrawer, setOpenDrawer}:any) => {
  return (
     //{/* Mobile AppBar  */}
     <Box   display={"flex"} justifyContent={"space-between"} p={.5}>
     <IconButton
       onClick={(e) => {
         setOpenDrawer(!openDrawer);
       }}
       sx={{ color: primary[500] }}
     >
       <MenuIcon style={{ fontSize: "30px" }} />
     </IconButton>
     <Logo />
     <IconButton
       onClick={(e) => {
       }}
       sx={{ color: primary[500] }}
     >
       <AccountBoxIcon style={{ fontSize: "30px" }} />
     </IconButton>
   </Box>
  )
}

export default MobileAppbar