"use client";
import { Box, IconButton, Tab, Tabs, Typography } from "@mui/material";
import MyDrawer from "../../client/utility/MyDrawer";
import LinkBoxWithImg from "../../client/utility/LinkBoxWithImg";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { primary } from "@/client/BaseColor";
import Logo from "@/client/utility/Logo";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { building, complaint, survey, yazd } from "@/ImageDefinition/ImageDefiinition";
//icon
import iconImage from "../../../public/imgs/ostandari.png";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MobileAppbar from "@/client/Appbar/MobileAppbar";
import CrouselWithMUI from "../../client/CrouselWithMUI";
import Image from "next/image";
const Page = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleTabChange = () => {};
  return (
    <Box
      height={"100vh"}
      sx={{
        background: ` url(${building.src})  no-repeat  bottom`,
        backgroundSize: "contain",
      }}
    >
  {/*     <CrouselWithMUI
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
      </CrouselWithMUI> */}

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          mt={4}
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-evenly" }}
          gap={4}
          border={{ md: ".1px solid " + primary[500] + "33" }}
          p={{ md: 10 }}
          py={{ md: 14 }}
          borderRadius={5}
          bgcolor={"#ffffff83"}
          position={"relative"}
        >
          <LinkBoxWithImg href={'/stores'} />
          <LinkBoxWithImg src={complaint} desc='شکایت خود را ثبت کنید' title="ثبت شکایت" />
          <LinkBoxWithImg src={survey} desc='نظر خود را اعلام کنید'  title="اعلام نظر"/>
          <Box
            display={"flex"}
            justifyContent={"center"}
            position={{ md: "absolute" }}
            sx={{ bottom: { md: 20 }, right: { md: 20 } }}
          >
            <PhoneEnabledIcon sx={{ color: primary[700] }} />
            &nbsp;
            <Typography display={"inline"}> پشتیبانی: </Typography> &nbsp;
            <Typography display={"inline"}> 021-987654 </Typography>
          </Box>
        </Box>
      </Box>
      <MyDrawer open={openDrawer} setOpen={setOpenDrawer}>
        <Box p={2}>سلام</Box>
      </MyDrawer>
    </Box>
  );
};

export default Page;

// "use client";
// import Advertisement from "@/client/Advertisement";
// import { Box, Button, IconButton, Typography } from "@mui/material";
// import Image from "next/image";
// import iconImage from "../../../public/imgs/ostandari.png";
// import yazdImg from "../../../public/imgs/home-img.png";
// import building from "../../../public/imgs/building.png";
// import search from "../../../public/imgs/search.png";
// import MainLinksGriddy from "@/client/MainLinksGriddy";
// import CrouselWithMUI from "../../client/CrouselWithMUI";
// import MainAppbar from "@/client/Appbar/MainAppbar";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import Link from "next/link";
// import { primary } from "@/client/BaseColor";
// export default function Home() {
//   return (
//     <Box display={"flex"} flexDirection={"column"}>

//        <CrouselWithMUI
//         timeOfInterval={7000}
//         height={{ xs: "200px", sm: "300px", md: "350px", lg: "350px" }}
//       >
//         <Box
//           display={"flex"}
//           flexDirection={"column"}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           <Box sx={{ width: "90px", position: "relative" }}>
//             <Image
//               src={iconImage}
//               style={{
//                 objectFit: "cover",
//                 backgroundColor: "#ffffff5",
//                 borderRadius: 20,
//                 padding: 10,
//                 top: 10,
//               }}
//               fill
//               alt={"arm"}
//             />
//           </Box>
//         </Box>
//       </CrouselWithMUI>

//       <MainLinksGriddy />

//       <Box
//         position={"relative"}
//         width={"100%"}
//         height={{ xs: "100px", sm: "180px", md: "260px", lg: "350px" }}
//         display={"flex"}
//         flexDirection={"column"}
//         justifyContent={"center"}
//       >
//         <Image
//           src={yazdImg}
//           style={{ objectFit: "cover", objectPosition: "center " }}
//           fill
//           alt={"yazd image"}
//         />
//       </Box>
//     </Box>
//   );
// }
