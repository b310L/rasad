"use client";
import { Box, ButtonBase, Fade, Grow, IconButton, Slide } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { primary } from "./BaseColor";
//static image data
import pizza1 from "../../public/imgs/Frame.svg";
import hamber from "../../public/imgs/Frame.svg";
import pizza2 from "../../public/imgs/Frame.svg";
//mui icon
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Crousel = ({bgcolor='transparent',height= { xs: 150, sm: 250, md: 300, lg: 450 },showBtn=true},) => {
  const [index, setIndex] = useState<number>(0);
  const imgSrcList: (string | StaticImageData)[] = [
    pizza1,
    hamber,
    pizza2,
  ];
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeOfInterval: number = 5000;
  const [direction, setDirection] = useState<'left'|'right'>('left');


  const adjustInterval = (): void => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNextPage();
    }, [timeOfInterval]);
  };
  useEffect(() => {
    adjustInterval();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const relativepos = {
    position: "absolute",
    color: "#fff",
    zIndex: 5,
    top: "50%",
    bgcolor: bgcolor,
    
    transform: "translateY(-50%)",
  };
  const handleNextPage = () => {
    setDirection('left');
    setIndex((i) => {
      if (i === imgSrcList.length - 1) {
        return 0;
      }
      return (i % imgSrcList.length) + 1;
    });
    adjustInterval();

  };
  const handleBeforePage = () => {
    setDirection('right');
   

    setIndex((i) => {
      if (i === 0) {
        return imgSrcList.length - 1;
      }
      return (i % imgSrcList.length) - 1;
    });
    adjustInterval();
  };
  return (
    <>
      <Box
      id="crousel"
        sx={{
          width: "100%",
          height: height,
          position: "relative",
          bgcolor:bgcolor,
        }}
      >
       { showBtn && <IconButton
          onClick={handleBeforePage}
          size="small"
          sx={{ ...relativepos,opacity:.7, left: 0,p:.3, ml: 1,bgcolor:primary[100] ,'&:hover,&:active':{
            bgcolor:primary[300]
          }}}
        >
          <NavigateBeforeIcon fontSize="large" sx={{color:primary[800]}}/>
        </IconButton>}
        
        <Fade in={true} mountOnEnter unmountOnExit 
            key={index}
        
        >
          
          <Image
            src={imgSrcList[index]}
            fill
            alt="crousel"
            style={{ objectFit: "cover" }}
          />
        </Fade>

       {showBtn && <IconButton
        
        sx={{ ...relativepos,opacity:.7,right: 0,p:.3, bgcolor:primary[100], mr: 1 ,'&:hover,&:active':{
          bgcolor:primary[300]
        }}}
        onClick={handleNextPage}
      >
        <NavigateNextIcon fontSize="large" sx={{color:primary[800]}}/>
      </IconButton>} 
      </Box>
    </>
  );
};

export default Crousel;
