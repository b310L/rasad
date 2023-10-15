"use client";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
// interface T{
//   registerTypeIndex:number;
//   setRegisterTypeIndex:Dispatch<SetStateAction<number>>;
// }
const SelectRole = () => {
  const router = useRouter();
  const [registerTypeIndex, setRegisterTypeIndex] = useState(0);
  const roleList = ["user", "wholesale", "store"];
  const handleClick = () => {
    if(registerTypeIndex===0){
      router.push("/register/user");

    }
    else if(registerTypeIndex===1){
      router.push("/register/store");

    }
    else if(registerTypeIndex===2){
      router.push("/register/wholesaler");

    }
    else if(registerTypeIndex===3){
      router.push("/register/other");

    }
  
  };
  return (
    <>
      <Box
        minHeight={"100%"}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FormControl sx={{ display: "flex", flexGrow: 1 }}>
          <FormLabel id="demo-radio-buttons-group-label">
            نقش خود را انتخاب کنید.
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={0}
            onChange={(e) => setRegisterTypeIndex(parseInt(e.target.value))}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={0}
              sx={{ m: 0 }}
              control={<Radio />}
              label="مشتری"
            />
            <FormControlLabel
              sx={{
                m: 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
              value={1}
              control={<Radio />}
              label="فروش(شامل میوه فروش و فروشگاه ها و...)"
            />
            <FormControlLabel
              sx={{ m: 0 }}
              value={2}
              control={<Radio />}
              label="عمده فروش(غرفه دار)"
            />
            <FormControlLabel
              sx={{ m: 0 }}
              value={3}
              control={<Radio />}
              label="سایر"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="custom" onClick={handleClick}>
          ورود به صفحه ثبت نام
        </Button>
        {registerTypeIndex}
      </Box>
    </>
  );
};

export default SelectRole;
