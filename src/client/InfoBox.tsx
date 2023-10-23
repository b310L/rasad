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
import SearchBar from "./SerchBar";
import { pink } from "@mui/material/colors";
// icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTheme } from '@mui/material/styles';
import { currentUserContext } from "@/provider/CurrentUserProvider";
const InfoBox = () => {
    const theme = useTheme();
    const xs_md_MQ = useMediaQuery(theme.breakpoints.between('xs',"sm"));
    const tabletMQ = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const desktopMQ = useMediaQuery(theme.breakpoints.between("md", "xl"));
    const upper_desktopMQ = useMediaQuery(theme.breakpoints.up("xl"));
    const boxCss = {
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        alignItems: "center",
        
      };
    const [currentUser,setCurrentUser] = useContext(currentUserContext);
  return (
    <>
         {/* Third box */}
         <Box
          sx={{
            ...boxCss,
            boxSizing: "border-box",
            justifyContent: "space-between",
            bgcolor: "#fff",
            color:'#555',
            borderRadius: "50px",
            width:'fit-content',
          
          }}
        >
          {currentUser !==null ? (
            // user information
            <Box
              sx={{
                /* left: 20, position: "absolute" , */
                ...boxCss,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
              >
                <IconButton
                  sx={{
                  
                    display: "flex",
                  }}
                  aria-label="cart"
                  size="small"
                >
                  <Avatar
                    sx={{ bgcolor: pink[500], width: "auto", height: "auto" }}
                    sizes="small"
                  >
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
                <Typography
                  sx={{
                    overflow: "clip",
                    textOverflow: "ellipsis",
                    color: "#555",
                    ml: 1,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1
                  }}
                >
                  {currentUser}
                </Typography>
              </Box>
            </Box>
          ) : (
            //login/signup btn
            <Box sx={{ mr: 1.5 }}>
              <ButtonGroup
                
                variant="outlined"
                aria-label="outlined button group"
                sx={{ direction: "ltr", display: "flex" ,p:.2}}
              >
                <Button variant="custom">ثبت</Button>
               
                <Button variant="custom">
                  ورود
                  {/* <Link style={{height:'3px'}} href={"/login"}>ورود</Link> */}
                </Button>
              </ButtonGroup>
            </Box>
          )}

          <Box sx={{ display: "flex", justifyContent: "center", mr: 1.2 }}>
            <IconButton aria-label="cart" size="small">
              <Badge badgeContent={4} color="black">
                <ShoppingBasketIcon color="primary" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
    </>
  )
}

export default InfoBox