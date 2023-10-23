"use client";
import {
  Box,
  ButtonBase,
  Card,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { jsonData } from "./FakeData";
import apples from "../../public/imgs/Apples.webp";
import { primary, secondary } from "./BaseColor";
const ProductItem = ({u_store_id,data}) => {
  const router = useRouter();
 console.log(data)
//  /invoice/customer/product-entity/show/store/{u_store_id}/
  return (
    <ButtonBase
      onClick={() => router.push("/product/"+data.id)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "start",
        width: "100%",
        flexGrow: 1,
        px: 1,
      }}
    >
      {/* title and desc */}
      <Box
        display={"flex"}
        gap={1}
        flexDirection={"column"}
        flexGrow={1}
        overflow={"clip"}
        textOverflow={"ellipsis"}
      >
        <Box display={"flex"} alignItems={"center"} gap={1} overflow={"clip"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            flexGrow={1}
            gap={1}
            justifyContent={"center"}
          >
            <Typography
              variant="h4"
              maxHeight={60}
              overflow={"hidden"}
              sx={{ overflow: "clip" }}
            >
         {data.p_id.p_name}
            </Typography>

            <Typography
              variant="body1"
              maxHeight={50}
              overflow={"hidden"}
              sx={{ textOverflow: "ellipsis" }}
            >
              {data.p_id.p_name} های تازه و خوشمزه از بهترین باغهای ایران
              
            </Typography>
            <Divider />

            <Typography color={"primary.main"}>
              تاریخ خرید:
              {data.pe_date_time}
            </Typography>
          </Box>
          {/* img */}
          <Box
            position={"relative"}
            width={100}
            height={100}
            borderRadius={5}
            flexShrink={0}
            overflow={"hidden"}
          >
            <Image src={'http://0.0.0.0:8088/'+data.p_id.image} fill alt={data.p_id.p_name} />
          </Box>
        </Box>
        <Divider />
        {/* date */}
      
 {/* degree and entity */}
 <Box display={"flex"} justifyContent={"center"} gap={1} flexGrow={1} borderColor={'#999'} >
          <Typography
            sx={{
              flexBasis: "50%",
              verticalAlign: "middle",

              textAlign: "center",
            }}
          >
            موجودی: {data.pe_weight} کیلوگرم
          </Typography>
          <Typography
            sx={{
              borderRadius: 30,
              color: secondary[500],
              textAlign: "center",
              flexBasis: "50%",
              fontWeight: "bold",
            }}
          >
          {data.p_id.d_id.d_title }
          </Typography>
        </Box>
        <Divider />

        {/* price */}
        <Box display={"flex"} gap={1}>
                
          <Box display={"flex"} flexDirection={"column"} sx={{flexBasis: "50%"}}>
            <Typography
              sx={{
                flexBasis: "50%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              حداکثر قیمت مجاز:
            </Typography>
            <Typography
              sx={{
                bgcolor: "rgba(100, 220, 98, 1)",
                textAlign: "center",
                borderRadius: 50,
                color: "#fff",
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.isi_price}
            </Typography>

          </Box>

          <Box display={"flex"} flexDirection={"column"} sx={{flexBasis: "50%"}}>
            <Typography
              sx={{
                flexBasis: "50%",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
               قیمت فروش:
            </Typography>
            <Typography
            sx={{
              bgcolor: primary[400],
              flexBasis: "50%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              color: "#fff",
              verticalAlign: "middle",
              p: 1,
            }}
          >
          {data.sale_price}

          </Typography>
       

          </Box>
          
        </Box>
         
      </Box>
      
    </ButtonBase>
  );
};

export default ProductItem;
