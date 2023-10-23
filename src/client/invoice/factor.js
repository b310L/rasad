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
import Sproduct from "@/client/invoice/Sproduct";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; //icon selected
import Link from "next/link";
function BarbarInvoice() {
  // states related to inputs field
  const [saler, setSaler] = useState("");
  const [bayer, setBuyer] = useState("");
  const [driver, setDriver] = useState("");
  const [loadW, setLoadW] = useState({ unit: "kg", val: null }); //state related to load weight 
  const [grossW, setGrossW] = useState({ unit: "kg", val: null }); //state related to gross weight

  
//   function calculate net Weight
  const netW = () => {
    let loadVal;                            //variable related to load weight
    if (loadW.unit === "kg") {              
      loadVal = loadW.val;
    } else {
      loadVal = loadW.val * 1000;
    }
    let grossVal;

    if (grossW.unit === "kg") {
      grossVal = grossW.val;
    } else {
      grossVal = grossW.val * 1000;
    }

    return loadVal - grossVal;
  };


  const [num, setNum] = useState(0);
  const [open1, setOpen1] = useState(false); //dialog related to load weight
  const [open2, setOpen2] = useState(false); //dialog relate to gross weight


  //function related to reped specific factor
  const list = [...Array(num)].map((num) => (
    <li key={num}>
      <Sproduct />
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
            <Box component={"span"}>فاکتور  باربر</Box>
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





          {/* plate truck */}
          <InputWithIcon
            label={"بلاک راننده"}
            required
            value={driver}
            onChenge={(e) => {
              setDriver(e.target.value);
            }}
          ></InputWithIcon>




          {/* weight load */}
          <InputWithIcon
            label={"وزن بار "}
            absoluteChildrenPosition={false}
            required
            value={loadW.val}
            onChenge={(e) => {
              setLoadW((p) => {
                return { ...p, val: e.target.value };
              });
            }}
          >
            {/* button related to select unit weight */}
            <Button
              onClick={(e) => {
                setOpen1(!open1);
              }}
              variant="contained"
              
            >
              <ArrowDropDownIcon  sx={{color : 'white'}}/>
                <Typography sx={{color:'white'}}>{loadW.unit}</Typography>
            </Button>
          </InputWithIcon>

          <Dialog open={open1} onClose={() => setOpen1(!open1)}>
            <DialogTitle>انتخاب معیار واحد</DialogTitle>
            <DialogActions>
              <Button
                onClick={() => {
                  setLoadW((p) => {
                    return { ...p, unit: "kg" };
                  });
                  setOpen1(!open1);
                }}
              >
                        <Typography fontSize='large'>KG</Typography>
              </Button>
              <Button
                onClick={() => {
                  setLoadW((p) => {
                    return { ...p, unit: "ton" };
                  });
                  setOpen1(!open1);
                }}
              >
                        <Typography  fontSize='large'>TON</Typography>
              </Button>
            </DialogActions>
          </Dialog>

          {/* gross weight */}
          <InputWithIcon
            label={" وزن ناخالص "}
            absoluteChildrenPosition={false}
            required
            value={grossW.val}
            onChenge={(e) =>
              setGrossW((p) => {
                return { ...p, val: e.target.value };
              })
            }
          >
            <Button onClick={() => setOpen2(!open2)} variant="contained">
              <ArrowDropDownIcon sx={{color : 'white'}}></ArrowDropDownIcon>
                    <Typography sx={{color : 'white'}}>{grossW.unit}</Typography>
            </Button>
          </InputWithIcon>

          {/* button related to select unit weight */}
          <Dialog open={open2} onClose={() => setOpen2(!open2)}>
            <DialogTitle>انتخاب معیار واحد</DialogTitle>
            <DialogActions>
              <Button
                onClick={() => {
                  setGrossW((p) => {
                    return { ...p, unit: "kg" };
                  });
                  setOpen2(!open2);
                }}
              >
                      <Typography  fontSize='large'>KG</Typography>
              </Button>
              <Button
                onClick={() => {
                  setGrossW((p) => {
                    return { ...p, unit: "ton" };
                  });

                  setOpen2(!open2);
                }}
              >
                        <Typography  fontSize='large'>TON</Typography>
              </Button>
            </DialogActions>
          </Dialog>

          {/* ********************************************************** */}

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
                                >وزن خالص</Typography>
                    <Typography 
                                    sx={{
                                        color : '#00b7c3',
                                        ml: '30px',
                                        mb: '8px'
                                    }}
                                >{netW()}</Typography>
                            
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
    </>
  );
}

export default BarbarInvoice;
