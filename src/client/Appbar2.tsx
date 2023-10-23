"use client";
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import Link from "next/link";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchBar, { SearchField } from "./SerchBar";
import { pink } from "@mui/material/colors";
// icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from '@mui/material/styles';
import InfoBox from "./InfoBox";
import { primary } from "./BaseColor";

const Appbar = () => {
    const theme = useTheme();
  const xs_md_MQ = useMediaQuery(theme.breakpoints.between('xs',"sm"));
  const tabletMQ = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktopMQ = useMediaQuery(theme.breakpoints.between("md", "xl"));
  const upper_desktopMQ = useMediaQuery(theme.breakpoints.up("xl"));
  const boxCss = {
    width: xs_md_MQ?"100%":"33.33%",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap:1,
        bgcolor: primary[500],
        alignItems: "center",p:2,
    flexDirection: xs_md_MQ?'column': 'row',
    flex:' 0 1 auto',

      }}
    > { !xs_md_MQ&&
        <Box sx={{ ...boxCss, justifyContent: "start"}}>
        <SearchBar />
      </Box>}
      

      {/* <Box sx={{...boxCss}}>{userContext?.currentUser}</Box> */}
      <Box sx={{ ...boxCss ,order:xs_md_MQ&&'-4',justifyContent:xs_md_MQ?'space-between' :"center",}}>
        <Typography color="#fff">مدیریت</Typography>
       { xs_md_MQ&&
        <SearchBar/>}
      </Box>
      {/* Third box */}
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: 'end',
          width: xs_md_MQ?"100%":"33.33%",
        }}
      >
      <InfoBox/>
      </Box>
    </Box>
  );
};

export default Appbar;
