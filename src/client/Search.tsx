'use client'
import { Box } from "@mui/material";
import React, { useState } from "react";
import InputWithIcon from "./InputWithIcon";
import SearchIcon from "@mui/icons-material/Search";
import { fontGrid } from "@mui/material/styles/cssUtils";
const Search = ({searchVal,onChange,children,}:any) => {
    // const [searchVal,setSearchVal]=useState('')

  return (
      <Box
        bgcolor={"#fff"}
        borderRadius={50}
        zIndex={3}
        py={1}
        position={"relative"}
        display={'flex'}
        flexDirection={'column'}
      >
        {/* <InputWithIcon label='sa' Icon={SearchBar}></InputWithIcon>sad */}
        <InputWithIcon
        sx={{ border:1,borderRadius:50,py:1,color: 'primary.main'}}

          childOrder={-3}
          disableLine={true}
          value={searchVal}
          onChange={(e)=>onChange(e)}
          placeholder="جستجو..."
          absoluteChildrenPosition={true}
          // label="رمز"
          // children={<SearchIcon />}
          Icon={SearchIcon}
          sxIcon={{fontSize:'1.5rem'}}
        /> 
        <Box width={'100%'} >

        {children}
         </Box>
      </Box>
     
  );
};

export default Search;
