"use client";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import MyDrawer from "../../../client/utility/MyDrawer";
import LinkBoxWithImg from "../../../client/utility/LinkBoxWithImg";
import { SyntheticEvent, useState } from "react";

import { primary } from "@/client/BaseColor";
import Logo from "@/client/utility/Logo";
import SearchStoreFromMap from "@/client/Stores/Maps/SearchStoreFromMap";
import SearchStoreFromList from "@/client/Stores/SearchStoreFromList";
import MobileAppbar from "@/client/Appbar/MobileAppbar";
const Page = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log(newValue)
    setTabValue(newValue);
  };
  return (
    <Box p={2} m={1} display={"flex"} height={"100%"} flexDirection={"column"}>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="basic tabs example"
        sx={{display: "flex",}}
      >
        <Tab sx={{ flexGrow: 1,maxWidth:'100%'}} label="جستجو روی نقشه" />
        <Tab sx={{ flexGrow: 1,maxWidth:'100%'}} label="جستجوی فروشگاه" />
      </Tabs>

      {tabValue === 0 && <SearchStoreFromMap />}
      {tabValue === 1 && (
        <>
          <SearchStoreFromList />
        </>
      )}
   
      {/*   <Box>
        <Box
          mt={4}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          gap={4}
        >
          <LinkBoxWithImg />
          <LinkBoxWithImg />
          <LinkBoxWithImg />
        </Box>
      </Box> */}

    </Box>
  );
};

export default Page;
