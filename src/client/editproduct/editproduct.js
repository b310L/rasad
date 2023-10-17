'use client'

import { Box, Button, Card, CardContent, FormControl, InputLabel, NativeSelect, Typography, styled } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import InputWithIcon from "../InputWithIcon";
import { useState } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

function Edit() {
    const [ name , setName ] = useState('');
    const [ describtion , setDescribtion ] = useState('')
    const [ pricing , setPricing ] = useState('')
    const product = [ ' نوع را انتخاب کنید' ,'سیب' , 'پرتغال' , 'انگور' , 'نارنگی' , 'گلابی'   , 'زردالو' , 'گیلاس', 'شفتالو', 'کاهو', 'کلم' , 'خیارسبز', 'هندوانه', 'کیوی', 'خربزه', 'طالبی']
    const type = [ 'پیش فرض','میوه' , ' گوشت' , 'سبزیجات' , 'حبوبات']
    const Degree = [ "ممتاز",'درجه ۱' , 'درجه ۲' , 'درجه ۳' , 'درجه ۴']
    return ( 
        <>
            <Box 
                    className = 'center'
                    sx={{
                        width : { lg:'400px' , md :'100%' , xs : '100%'},
                        height : { lg : 'auto' , md : '100%' , xs : '100%'},
                        boxShadow: "0px  0px 1px 0px #00b7c3",
                    }}
                    component='form'
                >
                        <Box //main
                            sx={{
                                display: "relative",
                                p: "5px",
                                marginX : '10px'
                        }}
                        >
                                {/* header and icon */}

                                <Typography
                                    variant="h4"
                                    sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    mt: "20px",
                                    }}
                                    color="#00b7c3"
                                >
                                    <Box component={"span"}>  ویرایش کالا</Box>
                                    <EditIcon color="#00b7c3" fontSize="large"></EditIcon>
                                </Typography>


                                <FormControl fullWidth
                                     sx={{
                                        mt:'15px',
                                    }}
                                >
                                    <NativeSelect
                                        placeholder="نوع را انتخاب کنید"
                                    >
                                        {
                                            type.map((item) => (
                                                <option key={item}>{item}</option>
                                            ))
                                        }
                                    </NativeSelect>
                                </FormControl>
                                


                                <FormControl fullWidth
                                     sx={{
                                        mt:'15px',
                                    }}
                                >
                                    <NativeSelect
                                        defaultValue='fruit'
                                    >
                                        {
                                            product.map((item) => (
                                                <option key={item}>{item}</option>
                                            ))
                                        }
                                    </NativeSelect>
                                </FormControl>



                                <FormControl fullWidth
                                    sx={{
                                        mt:'15px',
                                    }}
                                >
                                    
                                    <NativeSelect
                                        defaultValue='fruit'
                                    >
                                        {
                                            Degree.map((item) => (
                                                <option key={item}>{item}</option>
                                                ))
                                            }
                                    </NativeSelect>
                                </FormControl>

                                <InputWithIcon
                                        label={"توضیحات"}
                                        required
                                        value={describtion}
                                        onChenge={(e) => {
                                        setDescribtion(e.target.value);
                                        }}
                                ></InputWithIcon>
        

                                <Card
                                    sx={{
                                        mt:'15px'
                                    }}
                                >
                                    <CardContent>
                                        <InputWithIcon
                                            label={"قیمت گذاری "}
                                            placeholder="قیمت جدید را وارد کنید"
                                            required
                                            value={pricing}
                                            onChenge={(e) => {
                                                setPricing(e.target.value);
                                            }}
                                    ></InputWithIcon>
                                    </CardContent>
                                </Card>

        

                                

                                <Box sx={{mt:'20px'}}>
                                    <Button variant="contained" component='label' size="large" fullWidth startIcon={<DriveFolderUploadIcon sx={{
                                        color:'white',
                                        ml:'10px'
                                    }}/>}>
                                        <Typography sx={{color:'white'}}>اپلود عکس</Typography>
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Box>


                                <Box sx={{mt:'20px'}}>
                                    <Button variant="contained" component='label' size="large" fullWidth >
                                        <Typography sx={{color:'white'}}>ثبت</Typography>
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Box>

                        </Box>

                    
            </Box>
        </>
     );
}

export default Edit;