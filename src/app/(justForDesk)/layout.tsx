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
  const [valueTab, setValueTab] = useContext(TabValueContext);


  const theme = useTheme();
  const screenDesktop = useMediaQuery(theme.breakpoints.up("md"));
  if (screenDesktop) {
    return (
       <>
       {children}
       </>
    );
  }
}
