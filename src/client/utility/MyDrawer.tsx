"use client";
import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { primary } from "../BaseColor";

function MyDrawer({ open,setOpen,children }: any) {

  return (
    <>
        {/* <IconButton
          onClick={(e) => {
            setOpen(!open);
          }}
          sx={{ color: primary[500] }}
        >
          <MenuIcon style={{ fontSize: "30px" }} />
        </IconButton> */}
        <SwipeableDrawer
          open={open}
          anchor="right"
          sx={{'& .MuiDrawer-paper':{
            bgcolor:'#ffffffaa',
            backdropFilter:'blur(3px)'
          }}}
          onOpen={() => console.log("sal")}
          onClose={(e) => {
            setOpen(false);
          }}
        >
        
          <Box  sx={{
          }} width={'60vw'}>{children}</Box>
        </SwipeableDrawer>
    </>
  );
}

export default MyDrawer;
