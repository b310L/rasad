import React from 'react'
import CrouselWithMUI from './CrouselWithMUI'
import { Box } from '@mui/material'
import Image from 'next/image'
const Advertisement = () => {
  return (
    <div>
        <CrouselWithMUI>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Box sx={{ width: "100%", height: "80px", position: "relative" }}>
        <Image
            src={iconImage}
            style={{ objectFit: "contain" }}
            fill
            alt={"arm"}
          />
        </Box>
      </Box>
        </CrouselWithMUI>
        
    </div>
  )
}

export default Advertisement