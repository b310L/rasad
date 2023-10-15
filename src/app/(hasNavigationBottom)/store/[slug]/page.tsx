
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import shop1 from "../../../../../public/imgs/shop1.jpeg";
import shop2 from "../../../../../public/imgs/shop2.jpeg";
import { primary } from "@/client/BaseColor";

//icon
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";
import { GetApi } from "@/server/GetApi";

const page = async({ params }: { params: { slug: string } }) => {
  // const [apiData,setApiData]=useState(null)
  const dataFromAPi = await GetApi("http://0.0.0.0:8088/api/store/detail/"+params.slug);
  const {u_store_id,id,s_name,s_description,s_address,s_location,s_postal_code,s_license,s_slug,u_id}=dataFromAPi
  console.log(dataFromAPi.data)
  // useEffect(() => {
  //   const getDataFromApi = async () => {
  //     const dataFromAPi = await GetApi("http://0.0.0.0:8088/api/store/detail/"+params.slug);
  //     console.log(JSON.stringify(dataFromAPi))
  //     return dataFromAPi;
  //   };
  //   getDataFromApi()
   
  // }, [])
  
  // return (<div>
  //   My Post: {params.slug}
  //  {JSON.stringify(dataFromAPi)} 
  //   </div>)
 
 

  return (
    <Box
      display={"flex"}
      gap={0.5}
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
        {/* <Image  style={{opacity:.9,borderRadius:'inherit',filter:'blur(5px)'}} src={dataFromAPi.src} alt="shop img"  fill objectFit="cover"  /> */}
        <Image
          style={{
            opacity: 1,
            borderRadius: "inherit",
            backdropFilter: "blur(10px)",
          }}
          src={''}
          // src={s_src}
          alt="shop img"
          priority={true}
          fill
        />
      </Box>
      <Divider sx={{ mb: 1 }} />
      {/* <Divider sx={{position:'absolute'}} orientation="vertical"/> */}

      <Typography variant="h3">{s_name}</Typography>
      <Typography variant="body">{s_description}</Typography>
      <Box display={"flex"}>
        <Box flexGrow={1}>


        <Typography variant="body2" color={"primary.main"}>
          آدرس: {s_address}
        </Typography>
        <Typography variant="body2" color={"primary.main"}>
        کد پستی: {s_postal_code}
        </Typography>
        </Box>

        <Button size="small" sx={{ color: "#fff" }} variant="contained">
          <PlaceIcon fontSize="large" />
        </Button>
      </Box>
      <Typography variant="body2">
        شماره تماس: {'s_phoneNumber'?'s_phoneNumber':'null'}
      </Typography>
      <Link href={"/product-list/"+dataFromAPi.u_id} >
        <Button fullWidth variant="custom">
          <Typography color="#fff">نمایش کالاهای فروشگاه</Typography>
        </Button>
      </Link>
    </Box>
  );
};

export default page;
