'use client'

import { useState } from "react";
import InputWithIcon from "../InputWithIcon";
import { Card, Typography } from "@mui/material";


function Invoice() {

   const [ nameProduct , setNameProduct ] = useState('');
   const [ weight , setWeight ] = useState('');
   const [ unitPrice , setUnitPrice ] = useState('')
   const price = parseFloat(weight) * parseFloat(unitPrice)


    return (  
        <>
            <InputWithIcon
                label={'نام کالا'}
                value={nameProduct}
                onChenge={(e) => {
                    setNameProduct(e.target.value)
                }}
            ></InputWithIcon>

            <InputWithIcon
                label={'وزن'}
                value={weight}
                onChenge={(e) => {
                    setWeight(e.target.value)
                }}
            ></InputWithIcon>

            <InputWithIcon
                label={'قیمت واحد'}
                value={unitPrice}
                onChenge={(e) => {
                    setUnitPrice(e.target.value)
                }}
            ></InputWithIcon>




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
                                >قیمت کل</Typography>
                    <Typography 
                                    sx={{
                                        color : '#00b7c3',
                                        ml: '30px',
                                        mb: '8px'
                                    }}
                    >{!price?'نا معتبر':price}</Typography>
                            
        </Card>
        </>
    );
}

export default Invoice;