import { Box, Button } from "@mui/material";
import NextLink from "next/link";
import { primary } from "./BaseColor";
import { Link as MUILink } from "@mui/material";

interface props {
  href?: string;
}
const LinkItem = (props: props) => {
  const { href = "#" } = props;
  return (
    <>
    
      <NextLink href={href}>
      <MUILink variant="body2">
        <Button variant="custom">لیست فروشگاه ها</Button>
      </MUILink>
      </NextLink>
    </>
  );
};

export default LinkItem;
