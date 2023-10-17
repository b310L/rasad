import React, { Fragment, useEffect, useState } from "react";
import ShopBox from "./ShopBox";
import { GetApi } from "@/server/GetApi";
import shop1 from "../../public/imgs/shop1.jpeg";
import shop2 from "../../public/imgs/shop2.jpeg";
import { Box, Divider, Typography } from "@mui/material";
import ErrorDataFetchingBox from "./ErrorDataFetchingBox";
const AllShop = ({ dataProps }: Array<object>) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={1}>
      {/* <ErrorDataFetchingBox /> */}
      {dataProps?.map((d: object) => {

        return (<Fragment key={d.s_name}>

            <ShopBox data={d}  />
            <Divider/>
        </Fragment>
        );
      })}
    </Box>
  );
};

export default AllShop;
