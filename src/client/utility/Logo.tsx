import { Box } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from '../../../public/imgs/logo.png'
interface Props{
    src?: string|StaticImageData;
    width?: number|string|any;
}
const Logo = ({src=logo,width=30}:Props) => {
  return (
        <Image  width={width} alt='alt' src={src}/>
  )
}

export default Logo