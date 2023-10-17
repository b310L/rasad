// Invoice page design

"use client";
 import Field from '@/client components/field'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2"; //icon related to invoice
import InputWithIcon from "../../src/client components/InputWithIcon";
import { useState } from "react";
import ScaleIcon from "@mui/icons-material/Scale"; //icon net weight
import AddIcon from "@mui/icons-material/Add"; //icon add
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; //icon selected
import Link from "next/link";
function Shop() {
  // states related to inputs field
  const [saler, setSaler] = useState("");
  const [bayer, setBuyer] = useState("");
  const [driver, setDriver] = useState("");

  


  const [num, setNum] = useState(0);
 
    


  //function related to reped specific factor
  const list = [...Array(num)].map((num) => (
    <li key={num}>
        <Field />
    </li>
  ));



  return (
    <>
      <Box
        className="center"
        sx={
          //responsive code
          {
            width: { lg: "400px", md: "100%", xs: "100%" },
            height: { lg: "auto", md: "100%", xs: "100%" },
            boxShadow: "0px  0px 1px 0px #00b7c3",
          }
        }
        component="form"
      >
        <Box //main
          sx={{
            display: "relative",
            p: "5px",
          }}
        >
          {/* header and icon */}

          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              mt: "20px",
            }}
            color="#00b7c3"
          >
            <Box component={"span"}>فاکتور غرفه دار</Box>
            <StickyNote2Icon color="#00b7c3" fontSize="large"></StickyNote2Icon>
          </Typography>

          {/* field related to invoice */}

          {/* code related to saler */}
          <InputWithIcon
            label={"کد فروشنده"}
            required
            value={saler}
            onChenge={(e) => {
              setSaler(e.target.value);
            }}
          ></InputWithIcon>




          {/* code related to buyer */}
          <InputWithIcon
            label={"کد خریدار"}
            required
            value={bayer}
            onChenge={(e) => {
              setBuyer(e.target.value);
            }}
          ></InputWithIcon>

          {/* ********************************************************** */}


       
                

          

          <br />
          <Divider variant="middle">مشخصات کالا</Divider>

          {list}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "5px",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                setNum(num + 1);
              }}
            >
              <AddIcon sx={{color : 'white'}}></AddIcon>
            </Button>

           
                <Button variant="contained"
                    sx={{mr:'10px'}}
                >
                    <Link href='#'
                        style={{color:'white'}}
                    >ثبت</Link>
                </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Shop;
