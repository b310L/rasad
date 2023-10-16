import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import InputWithIcon from "../InputWithIcon";
import {select} from '@/client components/dropDown/ButtonBase'
function Drop() {

    return ( 
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
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    m:'100px',
                }}
            >
                <Button variant="contained" sx={{boxShadow : '0px 0px 0px 4px #00b7c3'}} fullWidth>
                    <Link href='../../select'>
                        <Typography sx={{color:'white'}} variant="h5">Select name</Typography>
                    </Link>
                </Button>
            </Box>
          
          <Box 
            className= 'center'
          >
                <InputWithIcon
                    label={'name'}
                    placeholder="please enter the name"
                    // absoluteChildrenPosition = "false"
                >
                    <Button
                        variant="text"
                        sx={{bgcolor:'white' , color:'#00b7c3',
                            justifyContent:'space-between',
                            p:'20px'
                        }}
                        >
                        <Box>
                            <Typography sx={{
                            textAlign:'justify',
                            maxWidth : '100px'
                            }}></Typography>
                        </Box>
                        <Box
                            sx={{mr:'auto'}}
                        >
                            <Typography sx={{mr:'auto'}}></Typography>
                        </Box>
                    </Button>
                </InputWithIcon>
          </Box>

            
              
      </Box>
     );
}

export default Drop;