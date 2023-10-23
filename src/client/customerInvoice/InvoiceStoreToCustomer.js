// Invoice page design

"use client";

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
import InputWithIcon from "../InputWithIcon";
import { useState } from "react";
import ScaleIcon from "@mui/icons-material/Scale"; //icon net weight
import AddIcon from "@mui/icons-material/Add"; //icon add
import Invoice from '@/client/customerInvoice/invoiceCustomerItem';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; //icon selected
import Link from "next/link";
function InvoiceStoreToCustomer() {
  // states related to inputs field
  const [saler, setSaler] = useState("");
  const [bayer, setBuyer] = useState("");
  const [driver, setDriver] = useState("");
  const [loadW, setLoadW] = useState({ unit: "kg", val: null }); //state related to load weight 
  const [grossW, setGrossW] = useState({ unit: "kg", val: null }); //state related to gross weight

  
//   function calculate net Weight
  

  const [num, setNum] = useState(0);
  const [open1, setOpen1] = useState(false); //dialog related to load weight
  const [open2, setOpen2] = useState(false); //dialog relate to gross weight


  //function related to reped specific factor
  const list = [...Array(num)].map((num) => (
    <li key={num}>
      <Invoice />
    </li>
  ));



  return (
    <Box sx={{width:'100vw',height:'100vh' ,display:'flex' , justifyContent:'center' ,my:5,overflow:'hidden'}} >
      <Box
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
            <Box component={"span"}>فاکتور میوه فروش به مشتری </Box>
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
            label={"کد مشتری"}
            required
            value={bayer}
            onChenge={(e) => {
              setBuyer(e.target.value);
            }}
          ></InputWithIcon>








  

          {/* design related to card calclute net weight */}

                
                    <Card display={'flex'}
                     sx={
                        {
                            display : 'flex' ,
                            justifyContent : 'center' ,
                            mt: '20px',
                        }
                    }
                    > 
                       
                    <Typography 
                                    sx={{
                                        color : '#00b7c3',
                                        ml: '30px',display:'block',
                                        mb: '8px'
                                    }}
                                >پرداختی کل</Typography>
                    <Typography 
                                    sx={{
                                        color : '#00b7c3',
                                        ml: '30px',
                                        mb: '8px'
                                    }}
                                ></Typography>
                            
                    </Card>
                

          

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
    </Box>
  );
}

export default InvoiceStoreToCustomer;
