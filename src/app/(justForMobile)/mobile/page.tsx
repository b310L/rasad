'use client'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useContext, useState } from 'react'
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Profile from '@/client/Profile';
import { TabValueContext } from '@/provider/TabValueProvider';

const page = () => {
  const [valueTab, setValueTab] = useContext(TabValueContext);
  const renderSwitch=(param:number)=> {
    switch(param) {
      case 1:
        return '1';
      case 2:
        return '2';
      case 3:
        return  <Profile/>;
 
    
    }
  }
  return (
  <>
 
 {renderSwitch(valueTab)}
  </>
  )
}

export default page