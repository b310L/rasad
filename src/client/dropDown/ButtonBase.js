'use client'
import { AppBar, Box, Button, ButtonGroup, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const select = [
    {name : 'mohammad' , id:'444'},
    {name : 'ali' , id:'444'},
    {name : 'akaba' , id:'444'},
    {name : 'gjkg' , id:'444'},
    {name : 'gfklgjg' , id:'444'},
    {name : 'ggkljg' , id:'444'},
    {name : 'gjfgfgk' , id:'444'},
    {name : 'jdfkljf' , id:'444'},
    {name : 'rtrtt' , id:'444'},
    {name : 'trklt' , id:'444'},
    {name : 'ttrtr' , id:'444'},
    {name : 'mohartrmmad' , id:'444'},
    {name : 'motrtrtghyuhammad' , id:'444'},
    {name : 'moh44treammad' , id:'444'},
    {name : 'moha656mmad' , id:'444'},
    {name : 'mohrrtrammad' , id:'444'},
    {name : 'rtrt' , id:'444'},
    {name : 'mohammad' , id:'444'},
    {name : 'mohammad' , id:'444'},
    {name : 'moherttryte43ammad' , id:'444'},
    {name : 'mohaqrertmmad' , id:'444'},
    {name : 'rtrt' , id:'444'},
    {name : 'mohammad' , id:'444'},
    {name : 'mohatttrmmad' , id:'444'},
    {name : 'mohatmmad' , id:'444'},
    {name : 'mohammad' , id:'444'},
]


function ButtonBase() {

   
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
            component="button"
      >

        
         
        <ButtonGroup
            orientation="vertical"
            // variant="text"
            fullWidth
            size="large"
        > 
          {
            select.map((item) =>
                <Button
                    variant="text"
                 key={item.id} sx={{bgcolor:'white' , color:'#00b7c3',
                        justifyContent:'space-between',
                        p:'20px'
                    }}
                    >
                    <Box>
                        <Typography sx={{
                            textAlign:'justify',
                            maxWidth : '100px'
                        }}>{item.name}</Typography>
                    </Box>
                    <Box
                        sx={{mr:'auto'}}
                    >
                        <Typography sx={{mr:'auto'}}>{item.id}</Typography>
                    </Box>
                </Button>
            )
          }  
        </ButtonGroup>
      </Box>
     );
}

export default ButtonBase;