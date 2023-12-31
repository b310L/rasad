
import Link from "next/link";
import { Link as MuiLink} from "@mui/material";
import React from "react";
import { primary } from "./BaseColor";
import { Title } from "@mui/icons-material";
export const sxGrwoWidth = {
    position: "relative",
    color: '#000',
    py: .5,
    px:1,
    textDecoration: "none",
    overflow: "clip",
    borderRadius: 1,
    transition: "all 1s",
  
    "&::before": {
      width: "0%",
      inset: 0,
      height: "100%",
      position: "absolute",
      bgcolor: primary[500],
      content: '""',
      transition: "width 1s",
      zIndex: -1,
    },
    "&:hover::before": {
      width: "100%",
      transition: "width 1s",
    },
    "&:hover": {
      color: "#fff",
      transition: "color 1s",
    },
  };
  interface Props{
    sx?:object;
    defaultSx?:object;

    href:string;
    children?:any
  }
const MixLink = ({href='#',defaultSx={textDecoration:'none',color:primary[800]},sx,children}:Props) => {
  return (
    <Link href={"/"} passHref>
      <MuiLink href={href} sx={{...defaultSx,...sx  }}>
        {children}
      </MuiLink>
    </Link>
  );
};

export default MixLink;
