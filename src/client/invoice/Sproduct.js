// specific product
"use client"

import { Box, Button, Dialog, DialogActions, DialogTitle, FormControl, InputLabel, NativeSelect, Typography } from "@mui/material";
import InputWithIcon from "../InputWithIcon";
import  { useState } from 'react';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

function Sproduct() {
    const [ productName , setProductName ] = useState('')
    const [ weightProduct  , setWeightProduct ] = useState({val:null,unit:'kg'});
    const [ open , setOpen ] = useState(false)

    return (
        <>
            <InputWithIcon
                label={"نام کالا"}
                value={productName}
                onChenge={(e) => {
                    setProductName(e.target.value)
                }}
            ></InputWithIcon>

            <InputWithIcon
                label={"وزن"}
                value={weightProduct.val}
                absoluteChildrenPosition={false}
                onChenge={(e) => {
                    setWeightProduct((p)=>{return{ ...p,val:parseFloat(e.target.value)}})
                }}
               
            >
                <Button
                    onClick={(e) => {
                    setOpen(!open);
                }}
                    variant="contained"
              
            >
                    <ArrowDropDownIcon  sx={{color : 'white'}}/>
                    <Typography sx={{color:'white'}}>{weightProduct.unit}</Typography>
                </Button>
            </InputWithIcon>

            <Dialog open={open} onClose={() => setOpen(!open)}>
            <DialogTitle>انتخاب معیار واحد</DialogTitle>
            <DialogActions>
              <Button
                onClick={() => {
                    setWeightProduct((p) => {
                    return { ...p, unit: "kg" };
                  });
                  setOpen(!open);
                }}
              >
                        <Typography fontSize='large'>KG</Typography>
              </Button>
              <Button
                onClick={() => {
                    setWeightProduct((p) => {
                    return { ...p, unit: "ton" };
                  });
                  setOpen(!open);
                }}
              >
                        <Typography  fontSize='large'>TON</Typography>
              </Button>
            </DialogActions>
          </Dialog>


            
            

        



        </>
      );
}

export default Sproduct;