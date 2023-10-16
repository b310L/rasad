'use clinent'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'
//icon
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import shopSearchIcon from "../../public/imgs/shop-search.svg";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useRouter,usePathname } from 'next/navigation';
const NavigationB = ({valueTab,setValueTab,params}:any) => {
  const router=useRouter()
 
  return (
    <>
      <BottomNavigation
        // sx={{padding:1}}
        sx={{ position: "fixed", bottom: 0, width: "100%" }}
        showLabels
        value={valueTab}
        onChange={(event, newValue) => {
          setValueTab(newValue);
        }}
      >
        <BottomNavigationAction  label="خانه" icon={<HomeIcon />} onClick={()=>router.push('/')} />

        <BottomNavigationAction
        onClick={()=>router.push('/stores')}
          label="جستجوی فروشگاه"
          
          // icon={<Image  alt="s" width={25} height={25} src={shopSearchIcon} />}
          icon={<ManageSearchIcon/>}
        />
        {/* <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
        /> */}
        <BottomNavigationAction
        onClick={()=>router.push('/profile')}
          label="پروفایل"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </>

  )
}

export default NavigationB