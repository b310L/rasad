
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
      <Box textAlign={"center"}>صفحه کاربر</Box>
      <Box display={"flex"} justifyContent={"center"} gap={1} flexWrap={"wrap"}>
        <Link href={'/profile/wholesaler/invoice-register'} style={{ flexGrow: 1 }}>
          <Button fullWidth variant="custom" >
             ثبت فاکتور
          </Button>
        </Link>
        <Link href={'/dashboard/admin'} style={{ flexGrow: 1 }}>
          <Button fullWidth variant="custom" >
          خروج
          </Button>
        </Link>
       
      </Box>
    </Box>
  );
};

export default page;
