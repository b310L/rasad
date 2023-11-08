
import Link from "next/link";
import { Link as MuiLink} from "@mui/material";
import React from "react";
import { primary } from "../BaseColor";

  interface Props{
    sx?:object;
    href:string;
    children:any;
  }
const MixLink = ({href='#',sx,children}:Props) => {
  return (
    <Link href={"/"} passHref>
      <MuiLink href={href} sx={{  ...sx}}>
        {children}
      </MuiLink>
    </Link>
  );
};

export default MixLink;
