"use client";
import { currentUserContext } from "@/provider/CurrentUserProvider";
import { Box, Button, Typography,useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import UserDetail from "@/client/UserDetail";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const page = () => {
  const theme = useTheme();
  const screenTablet = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [currentUser, setCurrentUser] = useContext(currentUserContext);
  return (
    <Box p={2} display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={1}>
      {currentUser ? (
        <>
          <Typography textAlign={'center'} sx={{ width:'100%', color: "#333" }}>
            {currentUser} خوش آمدید.
          </Typography>
          <UserDetail/>
        </>
      ) : (
        <>
          <Typography textAlign={'center'} sx={{ color: "#333" }}>شما هنوز وارد نشدید.</Typography>
          <Box display={'flex'} justifyContent={'center'} gap={1} > 

          <Button
            variant="custom"
            sx={{ flexBasis: '50%' }}
            onClick={() => {
              router.push("/login");
            }}
            >
            ورود
          </Button>
          <Button sx={{ flexBasis: '50%' }}
            variant="custom"
            onClick={() => {
              router.push("/register");
            }}
            >
            ثبت نام
          </Button>
            </Box>
        </>
      )}
         <Box display={'flex'} justifyContent={'center'} gap={1} >
         <Link href={'/profile/user'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
            مشتری
          </Button>
        </Link>
        <Link href={'/profile/barbar'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
            باربر
          </Button>
        </Link>
         </Box>
         <Box display={'flex'} justifyContent={'center'} gap={1} >
         <Link href={'/profile/wholesaler'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
            عمده فروش(غرفه دار)
          </Button>
        </Link>
        <Link href={'/profile/admin'} style={{ flexBasis: '50%' }}>
          <Button fullWidth variant="custom" >
             ادمین
          </Button>
        </Link>
         </Box>

       
      {/* <Button variant="custom" onClick={() => setCurrentUser("علی")}>set to ali</Button> */}
    </Box>
  );
};

export default page;
