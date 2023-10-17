import { Box, ButtonBase, Divider } from "@mui/material";
import React, { Fragment, useState } from "react";
import { primary } from "./BaseColor";
import ShopBox from "./ShopBox";
import CloseIcon from "@mui/icons-material/Close";
const ResultSearch = ({ data, close, setClose }: any) => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { md: "70%" },
        maxHeight: "500px",
        borderRadius: 2,
        p: 1,
        display: close ? "none" : "flex",
        flexGrow: 1,
        bgcolor: "#fff",
        boxShadow: "rgba(0, 157, 165, 0.15) 0px 8px 24px",
        flexDirection: "column",
      }}
    >
      <Box > 
        <ButtonBase
          sx={{ zIndex: 5, display: "fixed", alignSelf: "start" }}
          onClick={() => setClose(true)}
        >
          <CloseIcon />
        </ButtonBase>
      </Box>
      <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column" }}>
        {data.map(({ name, adress, src }: any, index: number) => {
          return (
            <Box
              key={index}
              width={"100%"}
              sx={{ display:'flex'}}
            >
              <ShopBox name={name} adress={adress} src={src} />
              
              {data.length - 1 >= index + 1 && <Divider />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ResultSearch;
