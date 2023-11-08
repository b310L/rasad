import { cloud, shop1, shop2, yazd } from "@/ImageDefinition/ImageDefiinition";
import { Box, Button, Divider, Link, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { primary } from "../BaseColor";
//icons
import StarRateIcon from "@mui/icons-material/StarRate";
import MixLink from "../MixLink";
import { sxGrwoWidth } from "@/special-style/GrowWidth";
const StoreBox = () => {
  const id=1
  return (
    <Paper sx={{ overflow: "hidden",borderRadius:'15px'}} >
      <Box height={150} position={'relative'} borderRadius={0} overflow={'hidden'}>
      <Image  alt="Store" fill src={cloud}  style={{borderRadius:0,objectFit:'cover'}} />

      </Box>

      <Box
        position={'relative'}
        p={1}
        mt={-2}
        borderRadius={'20px 20px 0 0'}
        bgcolor={'#fff'} 
        width={"100%"}
        display={"flex"}
        textAlign={'center'}  flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography variant="h4" fontWeight={'600'} mb={1} color={primary[700]}>فروشگاه ترنج</Typography>
        <Typography variant="body1" color={primary[600]}>
          فروشگاهی با محصولاتی با کیفیت و خوش فیمت
        </Typography>
        <Divider/>
        <Typography color={primary[500]}>
          بلوار رضایی، کوچه هفتم، پلاک ۱۲۳
        </Typography>
        <Divider/>

        <Box color={primary[500]} display={"flex"} alignItems={"center"} m={1} justifyContent={'space-around'}>
          <Box display={"flex"}>
            <StarRateIcon fontSize="small" sx={{ mb: 0.5 }} />
            <Typography>
              امتیاز: 4.7
            </Typography>
          </Box>

          <Typography >
            (۳۴۳ رای)
          </Typography>
        </Box>
        <Button component={Link} href="/about"  sx={{...sxGrwoWidth}}>
        ورود به فروشگاه
</Button>
      </Box>
    </Paper>
  );
};

export default StoreBox;
