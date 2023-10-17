// password reset page
"use client"; 
import React from "react";
import InputWithIcon from "./InputWithIcon";  //component related to inputfiled
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material"; //component related to matarial ui
import MapIcon from '@mui/icons-material/Map';   //icon related to icon map
import KeyIcon from '@mui/icons-material/Key'; // icon related to icon store
import LocationOnIcon from '@mui/icons-material/LocationOn';


import { useState } from "react";
import DigitCode from "./DigitCode";   //component related to dialog
import Link from "next/link";

const UserForm = () => {

  //Hooks related to form field
      
  const [name, setName] = useState("");
  const [ lname , setLname ] = useState('')
  const [ phone , setPhone ] = useState('')
  const [ pass , setPass ] = useState(null)
  const [repass , setRepass ] = useState(null)
  const [ open , setOpen ] = useState(false);
  const [ digitcode , setDigitcode ] = useState(null)


  // function related to open/close dialog
  const handleClose = () => {  
    setOpen(false)
  }

  
  
  return (
    // design related to register users
      <Box      // design form user
        className="center"
        sx={{
          width: { lg: "400px", md: "100%", xs: "100%" },
          height: { lg: "auto", md: "100%", xs: "100%" },
          boxShadow : "0px  0px 1px 0px #00b7c3" 
        }}
        component={"form"}
        >
          <Box sx={{ display: "relative" ,
              p:'5px'
          }}>

              {/* header related to name's form */}

            <Typography variant="h5" component='h4' align="center"
              sx={
                {
                  display:'flex',
                  justifyContent:'center',
                  alignContent:'center',
                  mt:'10px'
                }
              }
              color="#00b7c3"
            > 
            {/* design logo and title */}
                <Box component={"span"} sx={{mt:'3px'}}> بازنشانی رمز</Box>    
                <KeyIcon  color="blue[900]" fontSize="large"/>
            </Typography>



          

        <InputWithIcon //password

          label={"رمز جدید"}
          required
          value={pass}
          type="password"
          onChenge={(e) => 
              {
                setPass(e.value.target)
              }
           }
          
        ></InputWithIcon>


        <InputWithIcon //repead password
            label={'  تکرار رمز'}
            placeholder="لطفا رمز خود را تکرار کنید"
            required
            value={repass}
            type="password"
            onChange = { (e) => {
              setRepass(e.target.value)
            }}
        ></InputWithIcon>

              
                <Box    //دکمه ثبت اطلاعات 
                  sx={
                    {
                      display:'flex',
                      justifyContent:'center',
                      padding:'50px',
                      m:'50px'
                    }
                  }
                >
                    <Button onClick={()=>setOpen(!open)} color="success" variant="custom" 
                      size="large" 
                      fullWidth
                    >
                        <Link href='/' style={{color:'white'}}>تمام</Link>
                    </Button>
                </Box>
              

              
            
      </Box>
    </Box>
  );
};

export default UserForm;
