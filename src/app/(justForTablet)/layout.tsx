"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

//icon
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from '@mui/icons-material/Home';
import shopSearchIcon from '../../../public/imgs/Frame.svg'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const xs_md_MQ = useMediaQuery(theme.breakpoints.between("sm", "md"));
  if (xs_md_MQ) {
    return (
      <>
        {children}
        <Box >
          <BottomNavigation
            
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            
            <BottomNavigationAction label="shopSearch"  icon={<img src={'../../../public/imgs/Frame.svg'}/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </>
    );
  }
}
