import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  IconButton,
  TextField,
  colors,
  useMediaQuery,
} from "@mui/material";
import InputWithIcon from "./InputWithIcon";
import { SX } from "./SX";
import { useTheme } from "@mui/material/styles";
import { Close } from "@mui/icons-material";

const SearchBar = () => {
  const theme = useTheme();
  const xs_md_MQ = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const tabletMQ = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktopMQ = useMediaQuery(theme.breakpoints.between("md", "xl"));
  const upper_desktopMQ = useMediaQuery(theme.breakpoints.up("xl"));
  const [open, setOpen] = useState(false);
  return (
    <>
      {xs_md_MQ ? (
        <Box display={'flex'}>
       
        {!open ? <SearchField /> : ''}
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <SearchIcon /> : <Close />}
          
        </IconButton>
        </Box>
      ) : (
       <SearchField/>
      )}
     
    </>
  );
};
export const SearchField =()=>{
  return(
    <Box sx={{ position: "relative" }}>
    <Box
      bgcolor={"#fff"}
      borderRadius={50}
      zIndex={3}
      position={"relative"}
    >
      {/* <InputWithIcon label='sa' Icon={SearchBar}></InputWithIcon>sad */}
      <InputWithIcon
        childOrder={-3}
        disableLine={true}
        absoluteChildrenPosition={false}
        // value={'pass'}
        // onChenge={(e) => console.log('first')}
        placeholder="جستجو..."
        // label="رمز"
        // children={<SearchIcon />}
        Icon={SearchIcon}
      />
    </Box>
    {/* <BoxOfSeach >
    <ItemOfSearch/>
  </BoxOfSeach> */}
  </Box>
  )
}

export const BoxOfSeach = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 5,
        bgcolor: "#fff",
        position: "absolute",
        top: 0,
        zIndex: 2,
        boxSizing: "border-box",
        borderColor: "#000",
      }}
    >
      <Box height={20}></Box>
      <Box
        bgcolor={"#144333"}
        height={"100px"}
        width={"100%"}
        borderRadius={"0px 0px 15px 15px "}
      >
        {children}
      </Box>
    </Box>
  );
};

export const ItemOfSearch = () => {
  return (
    <Box color={"#f33"}>
      <p>SAdasdsa</p>
      <p>SAdasdsa</p>

      <p>SAdasdsa</p>

      <p>SAdasdsa</p>

      <p>SAdasdsa</p>

      <p>SAdasdsa</p>
      <p>SAdasdsa</p>
      <p>SAdasdsa</p>
    </Box>
  );
};

export default SearchBar;
