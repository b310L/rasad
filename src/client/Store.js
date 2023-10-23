"use client";
import React from "react";
import InputWithIcon from "./InputWithIcon";  //component related to inputfiled
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material"; //component related to matarial ui
import MapIcon from '@mui/icons-material/Map';   //icon related to icon map
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'; // icon related to icon store
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState } from "react";
import DigitCode from "./DigitCode";   //component related to dialog

const UserForm = () => {

  //Hooks related to form field
      
  const [name, setName] = useState("");
  const [ lname , setLname ] = useState('')
  const [ phone , setPhone ] = useState('')
  const [ pass , setPass ] = useState(null)
  const [repass , setRepass ] = useState(null)
  const [address, setAddress] = useState("");
  const [license, setLicense] = useState("");
  const [postcode, setPost] = useState("");
  const [ open , setOpen ] = useState(false);
  const [ digitcode , setDigitcode ] = useState(null)


  // function related to open/close dialog
  const handleClose = () => {  
    setOpen(false)
  }

  
  
  return (
    // طراحی صحفه میوه فروش
      <Box      //طراحی فرم
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
                <Box component={"span"} sx={{mt:'3px'}}> میوه فروش</Box>
                <StoreMallDirectoryIcon  color="blue[900]" fontSize="large"/>
            </Typography>



          <InputWithIcon  //اسم کوچک مغازع میوه فروش
            label={" نام "}
            type="text"
            required
            value={name}
            onChenge={(e) => {
              setName(e.target.value);
            }}
          ></InputWithIcon>

          <InputWithIcon  //نام خانوادگی مغازع میوه فروش
            label={" نام خانوادگی"}
            type="text"
            required
            value={lname}
            onChenge={(e) => {
              setLname(e.target.value);
            }}
          ></InputWithIcon>

          <InputWithIcon  //phone number
            label={'تلفن همراه'}
            required
            value={phone}
            onChenge={ (e) => 
              {
                setPhone(e.target.value)
              }
            }
          >  
          </InputWithIcon>

        <InputWithIcon   //address
          label={"ادرس"}
          type="text"
          maxRows={3}
          multiline
          required
          absoluteChildrenPosition={false}
          value={address}
          onChenge={(e) => {
            setAddress(e.target.value)
          }}
        >   <Button startIcon={<LocationOnIcon  sx={{color:'white' ,fontSize:'24px'}}   />} variant="contained">
                  <Typography variant="caption" color={'white'} sx={{mr:'5px'}}>نقشه</Typography>
            </Button>
    

        </InputWithIcon>
        <InputWithIcon   //بروانه کسب
          label={"بروانه کسب"}
          type="text"
          required
          value={license}
          onChenge={(e) => {
            setLicense(e.target.value)
          }}
        ></InputWithIcon>
        <InputWithIcon  // postcode
          label={"کد بستی"}
          required
          value={postcode}
          onChenge={(e) => {
            setPost(e.target.value)
          }}
        ></InputWithIcon>


        <InputWithIcon //رمز عبور

          label={"رمز"}
          required
          value={pass}
          type="password"
          onChenge={(e) => 
              {
                setPass(e.value.target)
              }
           }
          
        ></InputWithIcon>


        <InputWithIcon //نکرار رمز
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
                    >ثبت اطلاعات </Button>
                </Box>
              

              
            <Dialog    //بنجره دیالوگ
                    open= {open}
                    onClose={handleClose}
                    sx={{
                          display:'flex',
                          justifyContent:'center',
                          boxShadow : "0px  0px 1px 0px #00b7c3" 
                    }}
                   
                >
                  <Box  sx={{p:6}}>

                          <DialogTitle>
                              <Typography variant="body2" sx={{p:5 ,
                                display : 'flex',
                                justifyContent: 'center'
                              }}>کد ارسالی به گوشی خود را وارد کنید</Typography>
                          </DialogTitle>
                              
                              <Box 
                                sx={
                                  {
                                    display: 'flex',
                                    justifyContent:'center'
                                  }
                                }
                              >
                                  <DigitCode setval={setDigitcode} len={6} />
                              </Box>

                          <DialogActions
                            sx={
                              {
                                pt:'50px',
                                display:'flex',
                                justifyContent:'center',
                              }
                            }
                          >
                              <Button variant="custom"> ثبت</Button>
                          </DialogActions>
                    </Box>
                </Dialog>
      </Box>
    </Box>
  );
};

export default UserForm;
