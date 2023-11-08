"use client";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import MyDrawer from "../../../client/utility/MyDrawer";
import LinkBoxWithImg from "../../../client/utility/LinkBoxWithImg";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { primary } from "@/client/BaseColor";
import Logo from "@/client/utility/Logo";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { building, yazd } from "@/ImageDefinition/ImageDefiinition";
//icon
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MobileAppbar from "@/client/Appbar/MobileAppbar";
const Page = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleTabChange = () => {};
  return (
    <Box 
      height={"100vh"}
      sx={{
        background: ` url(${building.src})  no-repeat  bottom`,
        backgroundSize: "contain",
      }}
    >
      {/* Mobile AppBar  */}
        <Box position={"fixed"} width={'100%'} bgcolor={'#fff'} zIndex={222}>
          <MobileAppbar />
        </Box>
        <Box position={'relative'} height={57} ></Box>

      <Box  display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          mt={4}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-evenly" }}
          gap={4}
          border={{md:'.1px solid '+primary[500]+'33'}}
          p={{ md: 10 }}
          py={{ md: 14 }}
          borderRadius={5}
          bgcolor={"#ffffff83"}
          position={'relative'}
        >
          <LinkBoxWithImg />
          <LinkBoxWithImg />
          <LinkBoxWithImg />
          <Box display={'flex'} justifyContent={'center'} position={{md:'absolute'}} sx={{bottom:{md:20},right:{md:20}}}>
            <PhoneEnabledIcon sx={{color:primary[700]}}/>&nbsp;
            <Typography display={'inline'}> پشتیبانی: </Typography> &nbsp;
            <Typography display={'inline'}> 021-987654 </Typography>
          </Box>
    
        </Box>
      </Box>
      <MyDrawer open={openDrawer} setOpen={setOpenDrawer}>
        <Box p={2}>سلام</Box>
      </MyDrawer>
    </Box>
  );
};

export default Page;
