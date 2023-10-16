// login page design

"use client"; 
import React from "react";
import InputWithIcon from "./InputWithIcon";  //component related to inputfiled
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from "@mui/material"; //component related to matarial ui
import LoginIcon from '@mui/icons-material/Login';;; // icon related to icon store


import { useState } from "react";
import DigitCode from "./DigitCode";   //component related to dialog
import Link from "next/link";
import Ok from '@/client components/Ok'

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
    // design related to login user
      <Box      // design form login
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
                <Box component={"span"} sx={{mt:'3px' , p:'3px'}}> ورود</Box>    
                <LoginIcon  color="blue[900]" fontSize="large"/>
            </Typography>



          

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


        <InputWithIcon //password

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


        
              
                <Box    //دکمه ثبت اطلاعات 
                  sx={
                    {
                      display:'flex',
                      justifyContent:'center',
                      padding:'50px',
                      mt:'50px'
                    }
                  }
                >
                    <Button onClick={()=>setOpen(!open)} color="success" variant="custom" 
                      size="large" 
                      fullWidth
                      sx={{fontSize:'18px'}}
                    >
                        <Link href='/' style={{ color:'white'}}>ورود</Link>
                    </Button>
                </Box>

                <Box
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        mb:"85px"
                    }}
                >
                    
                        <Button onClick={()=>setOpen(!open)} color="success" variant="text"
                            size="large" 
                            fullWidth
                            sx={{color:'#00b7c3'}}
                        >
                            <Link href="../../ok" style={{color:'#00b7c3'}}>رمز عبور خود را فراموش کردید؟</Link>
                        </Button>






                        <Button onClick={()=>setOpen(!open)} color="success" variant="text"
                            size="large" 
                            fullWidth
                            sx={{color:'#00b7c3'}}
                        >
                            <Link href="#" style={{color:'#00b7c3'}}> قبلا ثبت نکردید؟؟</Link>
                        </Button>

                        
                    
                </Box>
              
                
              
            
      </Box>
    </Box>
  );
};

export default UserForm;

