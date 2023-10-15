'use client'
import { Box, ButtonBase, Card, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ShopBox = ({name,adress,src,slug}:any) => {
  const router=useRouter()
  return (
    <ButtonBase onClick={()=>router.push('/store/'+slug)} sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'start',flexGrow:1}}>
        <Box sx={{display:'flex',flexDirection:'column',flexGrow:1,overflow:'hidden'}}>
        <Typography  component={'h1'} variant='h4'>{name}</Typography>

        {/* <Typography sx={{overflow:'hidden',textOverflow:'ellipsis'}} textOverflow={'clip'} maxheight={'40px'} variant='body'>توضیحات توضیحات توضیحات  </Typography> */}
        <Typography sx={{overflow:'hidden',textOverflow:'ellipsis',color:'primary.main'}} textOverflow={'clip'} maxheight={'40px'} variant='body'>{adress}</Typography>

        </Box>
        <Image src={src} style={{flexShrink:0,objectFit:'cover',borderRadius:20}} width={120} height={120} alt='shop img'/>
    </ButtonBase>
  )
}

export default ShopBox