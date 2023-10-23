"use client";
import Advertisement from "@/client/Advertisement";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import iconImage from "../../../public/imgs/ostandari.png";
import yazdImg from "../../../public/imgs/home-img.png";
import building from "../../../public/imgs/building.png";
import search from "../../../public/imgs/search.png";
import MainLinksGriddy from "@/client/MainLinksGriddy";
import CrouselWithMUI from "../../client/CrouselWithMUI";
import MainAppbar from "@/client/MainAppbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { primary } from "@/client/BaseColor";
export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
     
       {/* <MainAppbar /> */}
       <CrouselWithMUI
        timeOfInterval={7000}
        height={{ xs: "200px", sm: "300px", md: "350px", lg: "350px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box sx={{ width: "90px", position: "relative" }}>
            <Image
              src={iconImage}
              style={{
                objectFit: "cover",
                backgroundColor: "#ffffff5",
                borderRadius: 20,
                padding: 10,
                top: 10,
              }}
              fill
              alt={"arm"}
            />
          </Box>
        </Box>
      </CrouselWithMUI> 
    
      <MainLinksGriddy />
      <CrouselWithMUI
        timeOfInterval={3000}
        showBtn={false}
        height={{ xs: 100, sm: 250, md: 300, lg: 450 }}
      ></CrouselWithMUI>
      <Box
        position={"relative"}
        width={"100%"}
        height={{ xs: "100px", sm: "180px", md: "260px", lg: "350px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Image
          src={yazdImg}
          style={{ objectFit: "cover", objectPosition: "center " }}
          fill
          alt={"yazd image"}
        />
      </Box>
    </Box>
  );
}
