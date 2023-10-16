"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useMediaQuery,
} from "@mui/material";
import { SetStateAction, createContext, useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { TabValueContext } from "@/provider/TabValueProvider";
import NavigationB from "@/client/NavigationB";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = useContext(TabValueContext);
  const theme = useTheme();
  const screenTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
        <Box p={screenTablet ? 0 : 0} flexGrow={1}>
          {children}
        </Box>
        <Box>
        {screenTablet && (
            <Box  ><br/><br/></Box>
          )}
        </Box>
        <Box flexShrink={0}>
          {screenTablet && (
            <NavigationB valueTab={index} setValueTab={setIndex} />
          )}
        </Box>
      </Box>
    </>
  );
}
