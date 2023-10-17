import { Box, Typography } from '@mui/material'
import React from 'react'
import { secondary } from './BaseColor'
import ErrorIcon from '@mui/icons-material/Error';
const ErrorDataFetchingBox = () => {
  return (<>
  
        <Box display={'flex'} justifyContent={'center'}  gap={1} color={secondary[500]}>
        <ErrorIcon/>
    
        <Typography variant='subtitle1' textAlign={'center'} >
        {'خطا در دریافت اطلاعات'}
        </Typography>
    
        </Box>
        </>
   
   
  )
}

export default ErrorDataFetchingBox