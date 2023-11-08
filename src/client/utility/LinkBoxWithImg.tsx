import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { primary, secondary } from "../BaseColor";
import MixLink from "../MixLink";
import Logo from "@/client/utility/Logo";
import search from "../../../public/imgs/search.png";
import Image, { StaticImageData } from "next/image";

interface Props{
    src?: string|StaticImageData;
    title?:string;
    desc?:string;

}
const LinkBoxWithImg = ({ src=search,title='جستجوی فروشگاه' ,desc='فروشگاه مورد نظر خود را بیابید'}:Props) => {
  return (
    // <Box
    //   display={"flex"}
    //   flexDirection={{ xs: "column", md: "row" }}
    //   justifyContent={{ xs: "center", md: "space-between" }}
    // >
    <MixLink href="/stores" sx={{'&:hover':{color:primary[800]}}}>
      <Box  sx={{"&:hover .desc": {color:'primary.main',mt:0 },}}  flexGrow={1} bgcolor={'#eee'} height={{md:'200px'}} width={{md:'200px'}} flexDirection={{sm:'row',md:'column'}} display={"flex"} gap={1} alignItems={'center'} border={1} p={2} borderRadius={8} borderColor={'#aaa'}>
        <Logo src={src} width={"auto"} />
        <Box   flexGrow={1} width={'100%'}  position={'relative'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={.5}>
          <Typography   variant="h4" className="title">{title}</Typography>
          <Typography mt={-3.5}  variant="h5" sx={{transition:'all .5s',color:'transparent'}} className="desc">{desc}</Typography>
        </Box>
        <IconButton
          sx={{
            bgcolor: primary[500],
            width: "fit-content",
            color: "#fff",
            alignSelf:{md:'end'},
            overflow: "clip",
            borderRadius: 50,

            "&:hover ": { bgcolor: primary[600] },
          }}
        >
          <KeyboardBackspaceIcon sx={{}} />
        </IconButton>
      </Box>
  
    </MixLink>
     
    // </Box>

  );
};

export default LinkBoxWithImg;
