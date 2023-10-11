"use client";
import { Box, ButtonBase, Fade, Grow, IconButton, Slide } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
//static image data
import pizza1 from "../public/pizza1.jpg";
import hamber from "../public/hamber.jpg";
import pizza2 from "../public/pizza2.jpg";
//mui icon
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Crousel = () => {
  const [index, setIndex] = useState<number>(0);
  const imgSrcList: (string | StaticImageData)[] = [
    pizza1,
    hamber,
    pizza2,
    "https://eatfooddrinkbeer.com/wp-content/uploads/2022/08/Uptop.jpg",
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
    bgcolor: "#e1044b77",
    
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
          height: { xs: 200, sm: 250, md: 300, lg: 450 ,},
          position: "relative",
        }}
      >
        <IconButton
          sx={{ ...relativepos, left: 0, ml: 1 }}
          onClick={handleBeforePage}
        >
          <NavigateBeforeIcon fontSize="large" />
        </IconButton>
        
        <Slide  direction={direction} in={true}
            key={index}
        
        >
          
          <Image
            src={imgSrcList[index]}
            key={index}
            fill
            alt="crousel"
            style={{ objectFit: "cover" }}
          />
        </Slide>

        <IconButton
          sx={{ ...relativepos, right: 0, mr: 1 }}
          onClick={handleNextPage}
        >
          <NavigateNextIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
};

export default Crousel;
