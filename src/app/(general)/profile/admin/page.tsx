import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      alignContent={"center"}
      justifyContent={"center"}
      p={2}
    >
      <Box textAlign={"center"}>صفحه ادمین</Box>
      <Box display={"flex"} justifyContent={"center"} gap={1} flexWrap={"wrap"}>
        <Link href={'/dashboard/admin'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
            داشبورد
          </Button>
        </Link>
        <Link href={'/profile/admin/add-invoice'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
            افزودن کالا
          </Button>
        </Link>
   
      
      
       
      </Box>
      <Box display={"flex"} justifyContent={"center"} gap={1} flexWrap={"wrap"}>
             <Link href={'/profile/admin/show-invoice'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
            نمایش کالا
          </Button>
        </Link>
        <Link href={'/profile/'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
          خروج
          </Button> 
            </Link>
        </Box>
    </Box>
  );
};

export default page;
