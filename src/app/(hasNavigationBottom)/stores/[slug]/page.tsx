'use client'
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import shop1 from "../../../../../public/imgs/shop1.jpeg";
import replaceImage from "../../../../../public/imgs/no_image.png";
import { primary } from "@/client/BaseColor";

import Link from "next/link";
import { GetApi } from "@/server/GetApi";


//icon
import PlaceIcon from "@mui/icons-material/Place";
import RadioGroupRating from "@/client/IconRate";
import ErrorDataFetchingBox from "@/client/ErrorDataFetchingBox";



const page = ({ params }: { params: { slug: string } }) => {
  // const getApi= async()=>{
  //   const dataFromAPi = await GetApi("http://0.0.0.0:8088/api/store/detail/"+params.slug);
  //   return dataFromAPi
  // }
  // const apiData=getApi()

  const [apiData,setApiData]=useState(null)
  const [status,setStatus] = useState<'loading'|'loaded'|null|'error'>(null)
  // const {id,s_name,s_description,s_address,s_location,s_postal_code,s_license,s_slug,u_id}=dataFromAPi
  useEffect(() => {
    const getDataFromApi = async () => {
      setStatus('loading')
      const dataFromAPi = await GetApi("http://0.0.0.0:8088/api/store/detail/"+params.slug);
     
      setApiData(dataFromAPi)
      setStatus('loaded')
      if (dataFromAPi===false){
      setStatus('error')

      }

      return dataFromAPi;
    };
    getDataFromApi()
   
  }, [])
  
  // return (<div>
  //   My Post: {params.slug}
  //  {JSON.stringify(dataFromAPi)} 
  //   </div>)
 
 
  return (
    <>
    {status==='loaded'&&
      <Box
      display={"flex"}
      gap={0.5}
      p={2}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Box
        sx={{
          backgroundImage: `url("../../../public/imgs/shop2.jpeg")`,
          overflow: "hidden",
        }}
        bgcolor={primary[500]}
        m={1}
        borderRadius={10}
        flexGrow={1}
        position={"relative"}
        height={"200px"}
      >
        <Image  style={{opacity:.9,borderRadius:'inherit',filter:'blur(5px)'}} src={apiData.src} alt="shop img"  fill objectFit="cover"  />
        {apiData.s_image ? (
        <Image
        // http://0.0.0.0:8088/media/store/images# 
        // /media/store/images/shop2.jpeg

          src={'http://0.0.0.0:8088/'+apiData.s_image }
          style={{ flexShrink: 0, objectFit: "cover", borderRadius: 20 }}
          fill
          alt={apiData.s_name}
          
        />
      ):
      <Image
      src={replaceImage }
      style={{ flexShrink: 0, objectFit: "cover", borderRadius: 20 }}
      fill
      alt="بدون عکس"
    />}
      </Box>
      <Divider sx={{ mb: 1 }} />
      {/* <Divider sx={{position:'absolute'}} orientation="vertical"/> */}

      <Typography variant="h3">{apiData.s_name}</Typography>
      <Typography variant="body">{apiData.s_description}</Typography>
      <Box display={"flex"}>
        <Box flexGrow={1}>


        <Typography variant="body2" color={"primary.main"}>
          آدرس: {apiData.s_address}
        </Typography>
        <Typography variant="body2" color={"primary.main"}>
        کد پستی: {apiData.s_postal_code}
        </Typography>
        </Box>

        <Button size="small" sx={{ color: "#fff" }} variant="contained">
          <PlaceIcon fontSize="large" />
        </Button>
      </Box>
      <Typography variant="body2">
        شماره تماس: {apiData.u_id.u_phone_number}
      </Typography>
      <Link href={"/products/"+apiData.id} >
        <Button fullWidth variant="custom">
          <Typography color="#fff">نمایش کالاهای فروشگاه</Typography>
        </Button>
      </Link>
      <RadioGroupRating/>
    </Box>
    }

{status==='error'&&<Box display={'flex' } justifyContent={'center'} height={'50%'} alignItems={'center'}>
      
      <ErrorDataFetchingBox/>
    </Box>}

    </>
   
  );
};

export default page;




