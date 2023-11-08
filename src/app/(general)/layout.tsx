"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Fragment, SetStateAction, createContext, useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { TabValueContext } from "@/provider/TabValueProvider";
import NavigationB from "@/client/NavigationB";
import MainAppbar from "@/client/Appbar/MainAppbar";
import MobileAppbar from "@/client/Appbar/MobileAppbar";
import MyDrawer from "@/client/utility/MyDrawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [index, setIndex] = useContext(TabValueContext);
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
       {<Box  display={{xs:'none',md:'block'}} >
        <MainAppbar />
       </Box>
       }
       {<Box   display={{xs:'block',md:'none'}} >
       <MobileAppbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

       </Box>
       }

        <Box p={ 0} flexGrow={1}>
          {children}
        </Box>
    
        
        <MyDrawer open={openDrawer} setOpen={setOpenDrawer}>
        <Box p={2}>سلام</Box>
      </MyDrawer>
      <Box display={{md:'none'}} flexShrink={0} zIndex={3333333} >
            <NavigationB  valueTab={index} setValueTab={setIndex} />
          
        </Box>
      </Box>
    </>
  );
}


// const [index, setIndex] = useContext(TabValueContext);

{/* <Box display={{md:'none'}} flexShrink={0} zIndex={3333333} >
            <NavigationB  valueTab={index} setValueTab={setIndex} />
          
        </Box> */}