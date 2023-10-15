"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { primary } from "@/client/BaseColor";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily:  "yekan ,Roboto",
    fontSize:12,
    h1: {
      fontWeight: 500,
      fontSize: '3rem',

    },
    h2: {
      fontWeight: 400,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: '300',
      fontSize: '1.8rem',
    },
    h4: {
      fontWeight: 210,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: '200',
      fontSize: '1rem',
    },
    h6: {
      fontWeight: '100',
      fontSize: '.5rem',
    },
    
  },
  palette: {
    primary: {

      main: "#00b7c3",
      light:primary[100],
      dark:primary[600],
      mainGradient: "linear-gradient(to right, #00b7c3, #33c5cf)",
      
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
    black: {
      main: 'rgba(80,80,80,1.0)',
      
      light: '#fff',
      dark: '#000',
      contrastText: '#fff',
    },
    
  },
  components: {
    // Name of the component
    
    MuiInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // MuiInputBase-input MuiInput-input muirtl-8sgtit-MuiInputBase-input-MuiInput-input
          fontSize: "1rem",
          height:"100%",

        },
      },
    },
    
    MuiFormLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // MuiInputBase-input MuiInput-input muirtl-8sgtit-MuiInputBase-input-MuiInput-input
          fontSize: "1rem",
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          right:0,
          left:'auto'
         
          
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // MuiInputBase-input MuiInput-input muirtl-8sgtit-MuiInputBase-input-MuiInput-input
          transformOrigin:'top right',
          left:'auto'
         
          
        },
      },
    },
    MuiBadge:{
      variants: [
        {
          props: { variant: "l" },
          style: {
            width:'15px',
            height:'15px',
            bgcolor:'#ff',
          },
        },
         
      
     
      
      ],
    },
    MuiButton: {
      variants: [
        {
          // rgba(19, 191, 222, 1) ,rgba(18, 222, 173, 1)
          props: { variant: "halfWhite" },
          style: {
            color: "rgba(225, 4, 75, 1)",
            borderRadius:'0px',
            // transition: "all 2s cubic-bezier(.68,-0.55,.27,1.55)",
            backgroundImage: "linear-gradient(to right, rgba(225, 255,255, .7),rgba(200, 200,200, .7))",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, rgba(225, 255,255, .9),rgba(225, 255,255, .9))",

            },
          },
        },
       
        {
          props: { variant: "custom" },
          style: {
            color: "#fff",
            backgroundImage: "linear-gradient(to right, #00b7c3,#33c5cf)",

            "&:hover": {

              backgroundImage: "linear-gradient(to right, #00929c,#00b7c3)",

            },
          },
        },
      
      ],
      // styleOverrides: {
      //   // Name of the slot
      //   root: {
      //     // Some CSS

      //   },
      // },
    },
  },
});

theme.components.MuiInput = {
  styleOverrides: {
    root: {
      fontSize: '1rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1rem',
      },
    },
  },
};
theme.components.MuiFormLabel = {
  styleOverrides: {
    root: {
      fontSize: '.8rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '.8rem',
      },
    },
  },
};


const MuiProviders = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default MuiProviders;

// MuiInputBase-input
