"use client";
import Advertisement from "@/client/Advertisement";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import iconImage from "../../../public/imgs/ostandari.png";
import yazdImg from "../../../public/imgs/home-img.png";
import MainLinksGriddy from "@/client/MainLinksGriddy";
import CrouselWithMUI from '../../client/CrouselWithMUI'
export default function Home() {
  return (
    <Box>
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
      <Box   display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Box sx={{ width: "100%", height: "100px", position: "relative" }}>
          <Image
            src={yazdImg}
            style={{ objectFit: "cover" }}
            fill
            alt={"yazd image"}
          />
        </Box>
      </Box>
      <Advertisement />
      <MainLinksGriddy/>
      <CrouselWithMUI showBtn={false} height={{xs: 100, sm: 250, md: 300, lg: 450 }}/>

    </Box>
  );
}
