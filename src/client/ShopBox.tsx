"use client";
import { Box, ButtonBase, Card, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import replaceImage from '../../public/imgs/no_image.png'
import errorImage from '../../public/imgs/error.png'
import khiyar from '../../public/imgs/khyiar.jpeg'
import { ChechImageExitence } from "./ChechImageExitence";

const ShopBox = (data: any) => {
  const router = useRouter();
  console.log('data isssss '+JSON.stringify(data));
  const data2=data.data
  return (
    <ButtonBase
      onClick={() => router.push("/stores/" + data2.s_slug)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "start",
        flexGrow: 1,
        p:1
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Typography component={"h1"} variant="h4">
          {data2.s_name}
        </Typography>

        <Typography sx={{overflow:'hidden',textOverflow:'ellipsis'}} textOverflow={'clip'} maxheight={'40px'} variant='body'>{data2.s_description}</Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "primary.main",
          }}
          textOverflow={"clip"}
          maxheight={"40px"}
          variant="body"
        >
          {data2.s_adress}
        </Typography>
      </Box>
      {data2.s_image ? (
        <Image
        // http://0.0.0.0:8088/media/store/images# 
        // /media/store/images/shop2.jpeg

          src={(typeof data2.s_image)=='string'?'http://0.0.0.0:8088/'+data2.s_image:data2.s_image }
          style={{ flexShrink: 0, objectFit: "cover", borderRadius: 20 }}
          width={120}
          height={120}
          alt={data2.s_name}
          
        />
      ):
      <Image
      src={replaceImage }
      style={{ flexShrink: 0, objectFit: "cover", borderRadius: 20 }}
      width={120}
      height={120}
      alt="بدون عکس"
    />}

    </ButtonBase>
  );
};

export default ShopBox;
