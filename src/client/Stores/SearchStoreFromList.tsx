import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import InputWithIcon from "../InputWithIcon";
import { primary } from "../BaseColor";
//icon
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SearchIcon from "@mui/icons-material/Search";
import StoreBox from "../Boxes/StoreBox";
import Link from "next/link";
import MixLink from "../MixLink";
const SearchStoreFromList = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <Box mt={2} >
      <Box sx={{ color: primary[500] }} display={"flex"} gap={0.5}>
        <ErrorIcon />
        <Typography>
          نام فروشگاه را وارد کنید یا QR کد آن را اسکن نمایید.
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <InputWithIcon
          label={"جستجو بر اساس نام یا کد فروشگاه"}
          placeholder=""
        ></InputWithIcon>
        <Button
          sx={{ p: 2, "& .MuiButton-startIcon": { marginLeft: "5px" } }}
          fullWidth
          variant="custom"
          startIcon={<SearchIcon />}
        >
          جستجو
        </Button>
        <Button
          sx={{ p: 2, "& .MuiButton-startIcon": { marginLeft: "5px" } }}
          fullWidth
          variant="outlined"
          startIcon={<QrCode2Icon />}
        >
          اسکن کد فروشگاه
        </Button>
       
      </Box>
      <Typography fontWeight={800} my={1}>
          ‍{` نتایج جستجو(${data.length}مورد)`}
        </Typography>
      
      <Grid container px={{xs:0,md:30}}  rowSpacing={{ xs: 3, sm:4}} columnSpacing={{ xs: 3, sm: 2, md: 3 }}  >
        {data.map((x, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <StoreBox />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SearchStoreFromList;
