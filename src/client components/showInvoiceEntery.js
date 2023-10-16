'use client'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PersonIcon from '@mui/icons-material/Person';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

import { Box, Card, CardActions, CardContent, Divider, Link, Typography } from "@mui/material";

const customerInfo = [
    { name : '16' , phone:'09*******24' ,namesale : 'میوه فروشی تمشک' , code : '8591*****8' },
    { name : '45' , phone:'09*******25' ,namesale : 'میوه فروشی آلبالو' , code : '8591*****5' },
    { name : '23' , phone:'09*******26' , namesale : 'میوه فروشی آلبالو' , code : '8591*****5'},
    { name : '4' , phone:'09*******27' ,namesale : 'میوه فروشی بهشت' , code : '8591*****3' },
    { name : '23' , phone:'09*******28' , namesale : 'میوه فروشی هفته بیجار' , code : '8591*****2'},
    { name : '33' , phone:'09*******20' ,namesale : 'میوه فروشی ترش و شیرین' , code : '8591*****8' },
    { name : '43' , phone:'09*******29' ,namesale : 'میوه فروشی باغ بهشتی' , code : '8591*****3' },
    { name : '5' , phone:'09*******30' , namesale : 'میوه فروشی باغ طلایی' , code : '8591*****1'},
    { name : '4' , phone:'09*******85' ,namesale : 'بهشت سبزی و میوه' , code : '8591*****9' },
    { name : '34' , phone:'09*******56' , namesale : 'میوه فروشی رنگارنگ' , code : '8591*****6'},
    { name : '67' , phone:'09*******69' , namesale : 'میوه فروشی باغ گیلاس' , code : '8591*****2'},
    { name : '45 ' , phone:'09*******10' ,namesale : 'میوه فروشی خوشه زرین' , code : '8591*****5' },
    { name : '56  ' , phone:'09*******67',namesale : 'سوپر میوه ویتامین' , code : '8591*****7'},
    { name : '65' , phone:'09*******14' ,namesale: 'ایستگاه ویتامین' , code : '8591*****1' },
    { name : '85 ' , phone:'09*******44' ,namesale : 'میوه فروشی نوبرانه' , code : '8591*****8'},
]

function SIE() {

    return ( 
        <>
            <Box
                sx={{
                    width : { lg : '400px' , md : '100%' , xs:'100%'},
                    height : { lg : 'auto' , md : '100%' , xs : '100%'},
                    display : 'flex',
                    flexDirection : 'column',
                    gap :'2',
                    m: {lg:'auto'}
                }}
            >

                <Box
                    sx={{
                        textAlign : 'center',
                        // m:'20px',
                        p:'12px',
                        bgcolor :'#00b7c3'
                    }}
                >
                    <Typography
                        sx={{color:'white'}}
                    >
                        فاکتور های غرفه دار
                    </Typography>
                </Box>
             {
                customerInfo.map(
                    (item) => (
                        <Card key={item.code}>
                            <CardContent>
                                <Card sx={{
                                    // m:'10px',
                                    // boxShadow : '0px  0px 1px 0px #00b7c3'
                                }}>
                                    <CardContent>
                                        
                                        <Typography>
                                            <StoreMallDirectoryIcon
                                                sx={{
                                                    color:'#00b7c3',
                                                    fontSize:'30px'
                                                }}
                                            />
                                            نام فروشگاه:
                                            <span> {item.namesale}</span>
                                        </Typography>


                                        <Typography>
                                            <MarkunreadMailboxIcon sx={{color:'#00b7c3' , ml:'10px'}}/>
                                            پلاک خودرو:
                                            <span> {item.code}</span>
                                        </Typography>
                                            

                                        <Typography>
                                            <PersonIcon sx={{color:'#00b7c3' , ml:'10px'}}/>
                                                وزن خالص بار:
                                            <span> {item.name}</span>
                                        </Typography>
                                        
                                    </CardContent>
                                </Card>
                            </CardContent>
                            <Divider ></Divider>

                        </Card>




                                

                    )
                )
            }
        </Box>

        </>
     );
}

export default SIE;