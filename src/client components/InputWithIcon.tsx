"use client";
import { Box, TextField } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
interface LineIn{
  disableLine:boolean
}


interface CompProps {
  
    bgcolor?: any;
    childOrder?: any;
    absoluteChildrenPosition?: boolean;
    InputLabelProps?: any;
    variant?: string;
    inputProps?: any;
    maxRows?: any;
    multiline?: any;
    required?: boolean;
    sx?: object;
    fullWidth? :any;
    value?:any;
    onChenge?:any;
    label?:any;
    Icon?:any;
    placeholder?:string;
    type?:string;
    children?: any;
    border_radius?:any;
    size?:any;
    disableLine?:any;
    disabled?:boolean;
}

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;


const InputWithIcon = ({
  bgcolor,
  childOrder,
  absoluteChildrenPosition = true,
  InputLabelProps,
  variant = "standard",
  inputProps,
  maxRows,
  multiline,
  required = false,
  fullWidth = true,
  value,
  onChenge,
  label,
  Icon,
  placeholder = "لطفا " + label + " وارد کنید. ",
  type = "text",
  children,
  border_radius='40px',
  size='small',
  disableLine=false,
  sx,
  disabled=false
  
}:CompProps) => {

  return (
    <Box
      sx={{...sx,
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        gap: 0.5,
        px: 1,
        bgcolor: bgcolor,
      }}
    >
      {Icon && <Icon sx={{ color: "action.active", mb: 0.5 }} />}

      <TextField
        sx={{borderRadius:border_radius}}
        InputLabelProps={InputLabelProps} 
        variant={variant}
        label={label}
        value={value}
        type={type}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        // inputProps={{ minLength: 3, maxLength: 100,disableUnderline: noLine }}
        InputProps={{ disableUnderline:disableLine  }}
        fullWidth={fullWidth}
        onChange={onChenge}
        multiline={multiline}
        maxRows={maxRows}
        size={size}
      />
      <Box
        sx={{
          position: absoluteChildrenPosition ? "absolute" : "static",
          left: 5,
          color: "action.active",
          order: childOrder,
        }}
      >
        {children}
      </Box>
      <Box sx={{ mb: 4 }}></Box>
      
    </Box>
  );
};

export default InputWithIcon;
