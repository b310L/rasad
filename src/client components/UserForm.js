"use client";
import React from "react";
import InputWithIcon from "./InputWithIcon";
import { Box, Button } from "@mui/material";

import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [license, setLicense] = useState("");
  const [postcode, setPost] = useState("");
  return (
    <Box sx={{ display: "relative" }}>
      <Box
        className="center"
        sx={{
          width: { lg: "500px", md: "100%", xs: "100%" },
          border: 2,
          height: { lg: "500px", md: "100%", xs: "100%" },
        }}
        component={"form"}
      >
        <InputWithIcon
          label={"نام"}
          required
          value={name}
          onChenge={(e) => {
            setName(e.target.value);
          }}
        ></InputWithIcon>
        <InputWithIcon
          label={"ادرس"}
          maxRows={3}
          required
          value={address}
          onChenge={(e) => {
            setAddress(e.target.value)
          }}
        >   <Button>نقشه</Button>
    

        </InputWithIcon>
        <InputWithIcon
          label={"بروانه کسب"}
          required
          value={license}
          onChenge={(e) => {
            setLicense(e.target.value)
          }}
        ></InputWithIcon>
        <InputWithIcon
          label={"کد بسنی"}
          required
          value={postcode}
          onChenge={(e) => {
            setPost(e.target.value)
          }}
        ></InputWithIcon>
      </Box>
    </Box>
  );
};

export default UserForm;
