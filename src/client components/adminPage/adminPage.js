"use client"
import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Avatar, Box, Button, Container, Divider, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Admin() {
    const [ open , setOpen ] = useState(false)
    const container = [ 
        { name : 'ثبت کاربر جدید' , src:'#'},
        { name : 'ثبت گروه جدید' , src : '#'},
        { name : 'ویرایش محصول' , src : '../../editproduct'},
        // { name : 'قیمت گذاری' , src : '#'},
        { name : 'ویرایش اطلاعات' , src : '#'},
        { name : 'نمایش کل فاکتور' , src : '../../showinvoice'},
    ]
      
     return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                        <IconButton onClick={(e) => {setOpen(!open)}} sx={{color:'white'}}>
                            <MenuIcon/>
                        </IconButton>
                        
                        
                        <Button variant='outlined'  sx={{mr:'auto' , bgcolor:'white' }}>
                            <Typography sx={{color : '#00b7c3'}}>خروج</Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open = {open}
                    anchor='right'
                    onClose={(e) => {
                        setOpen(false)
                    }}
                    sx={{
                        width : {xl:'300px'}
                    }}
                >
                    <Avatar sx={{
                        width:'56px' ,
                        height : '56px',
                        mr:'35px',
                        mt : '15px',
                        bgcolor : '#00b7c3'
                    }}>
                        <AdminPanelSettingsIcon />
                    </Avatar>

                    <Divider sx={{mt:'9px'}}></Divider>

                    
                    {
                        container.map((item) => (
                                <Link href={item.src} key={item.name} 
                                    style={{
                                        height:'15px',
                                        padding:'15px',
                                        marginTop:'20px',
                                        verticalAlign : 'bottom'
                                    }}
                                >

                                    <Typography variant='h5' sx={{color:'#00b7c3' , textAlign:'center',fontSize:'13px' , mb:'8px'}}>{item.name}</Typography>
                                    <Divider ></Divider>
                                </Link>
                        ))
                    }
                </Drawer>

                
            </Box>
        </>
     )
}

export default Admin;