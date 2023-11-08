import { AppBar, Box, Button, Link as LinkMui } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoWithTitle from "../LogoWithTitle";
import Link from "next/link";
import { primary } from "../BaseColor";
import MixLink from "../MixLink";

const MainAppbar = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "row",
        padding:2,
        position:'static',
        // margin:2,
        alignItems: "center",
        boxShadow:'none',
        backdropFilter:'blur(20px)',
        zIndex: 10000
      }}
    >
      <LogoWithTitle />
      <Box
        alignSelf={"center"}
        mr={"auto"}
        ml={"auto"}
        display={"flex"}
        gap={5}
      >
      
        <MixLink sx={{textDecoration:'none',color:'#555'}}  href={"/stores"} >جستجوی فروشگاه</MixLink>

      <MixLink  href={"/stores"} >ثبت شکایت</MixLink>

      <MixLink  href={"/stores"} >اعلام نظر</MixLink>

      </Box>

      {/* use context for switch between this btn */}
      <Button
        sx={{
          mr: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          gap: 0.5,
        }}
        variant="custom"
      >
        <AccountCircleIcon />
        ورود | عضویت
      </Button>
    </AppBar>
  );
};

export default MainAppbar;
