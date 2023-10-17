'use client'

import { Height } from "@mui/icons-material";
import { Box, Card, CardActions, Typography } from "@mui/material";
import Link from "next/link";

const selectInvoiceForShow = [
    { name : 'فاکتور مشتری' , src : '../../showInvoiceCustomer'},
    { name : ' فاکتور مغازه دار' , src : '../../showInvoiceSales'},
    { name : 'فاکتور غرفه دار' , src : '../../showInvoiceEntery'},
]


function Show() {
    return ( 
        <>
            <Box
                className= 'center'
                sx={{
                    width : { lg : '400px' , md : '100%' , xs : '100%'},
                    Height : { lg : 'auto' , md: '100%' , xs : '100%'},
                    boxShadow : '0px  0px 1px 0px #00b7c3'
                }}
            >
                <Box>
                   {
                        selectInvoiceForShow.map((item) => (
                            <Card key={item.src}
                                sx={{
                                    m: '10px',
                                    p: '20px',
                                }}
                            >
                                <CardActions>
                                    <Link href={item.src}>
                                        <Typography sx={{ mr:'85px' , color:'#00b7c3'}}>
                                            {item.name}
                                        </Typography>
                                    </Link>
                                </CardActions>
                            </Card>
                        ))
                   }
                </Box>
            </Box>
        </>
     );
}

export default Show;