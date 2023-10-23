import { AppBar, Box, Button, Link as LinkMui } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoWithTitle from "./LogoWithTitle";
import Link from "next/link";
import { primary } from "./BaseColor";
import MixLink from "./MixLink";

const MainAppbar = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "#ff344422",
        p: 2,
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow:'none',
        backgroundColor: 'rgb(255 255 255 / 0.3)',
        backdropFilter:'blur(20px)'
      }}
    >
      <LogoWithTitle />
      <Box
        alignSelf={"center"}
        mr={"auto"}
        ml={"auto"}
        display={"flex"}
        gap={2}
      >
      
        <MixLink sx={{textDecoration:'none',color:'#555'}} title="جستجوی فروشگاه" href={"/stores"} />
        <MixLink title="ثبت شکایت" href={"/stores"} />

        <MixLink title="اعلام نظر" href={"/stores"} />
      </Box>
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
