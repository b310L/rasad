"use client";
import { currentUserContext } from "@/provider/CurrentUserProvider";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import UserDetail from "@/client/UserDetail";

const page = () => {
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
            sx={{ flexGrow: 1 }}
            onClick={() => {
              router.push("/login");
            }}
            >
            ورود
          </Button>
          <Button sx={{ flexGrow: 1 }}
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

      <Button variant="custom" onClick={() => setCurrentUser("علی")}>set to ali</Button>
    </Box>
  );
};

export default page;
