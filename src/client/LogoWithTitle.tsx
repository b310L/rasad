import { Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from '../../public/imgs/logo.png'
interface Props{
    title?: string;
    desc?: string;
    src?: StaticImageData|string;

}
const LogoWithTitle = ({title='ناظر قیمت ها',src=logo,desc='سامانه نظارت بر قیمت محصولات'}:Props) => {
  return (
    <Box display={'flex'} gap={1}>
        <Box>
            <Image src={src} height={50} alt='logo'/>
        </Box>
        <Box display={'flex'} flexDirection={'column'}  justifyContent={'center'}>
        <Typography component={'h1'} variant='h4'>{title}</Typography>
        <Typography component={'h1'} variant='h5'>{desc}</Typography>
        </Box>

    </Box>
  )
}

export default LogoWithTitle