"use client";
import { Box, ButtonBase, Fade, Grow, IconButton, Slide } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { primary, secondary } from "./BaseColor";
//static image data
import main from "../../public/imgs/main.jpg";
import yazd from "../../public/imgs/yazd.jpg";
import yazd2 from "../../public/imgs/yazd2.jpg";
import yazd3 from "../../public/imgs/yazd3.jpg";
import overlay from "../../public/imgs/overlay.jpg";

//mui icon
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
interface T {
  bgcolor?: string;
  height?: number | object | string;
  showBtn?: boolean;
  imgSrcList?: Array<object>;
  children?: any;
  timeOfInterval?: number;
}
const Crousel = (props: T) => {
  const {
    bgcolor = "transparent",
    height = { xs: 150, sm: 250, md: 300, lg: 450 },
    showBtn = true,
    imgSrcList = [
      { src: main, objectFit: "cover", objectPosition: "center" },
      { src: yazd, objectFit: "cover", objectPosition: "top" },
      { src: yazd2, objectFit: "cover", objectPosition: "bottom" },
      { src: yazd3, objectFit: "cover", objectPosition: "center" },
    ],
    children,
    timeOfInterval = 5000,
  } = props;
  const [index, setIndex] = useState<number>(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("left");

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
    setIndex((i) => {
      if (i === imgSrcList.length - 1) {
        return 0;
      }
      return (i % imgSrcList.length) + 1;
    });
    adjustInterval();
  };
  const handleBeforePage = () => {
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
          overflow: "hidden",
          position: "relative",
          bgcolor: bgcolor,
        }}
      >
        <Box position={"absolute"}></Box>
        {showBtn === true && (
          <IconButton
            onClick={handleBeforePage}
            size="small"
            sx={{
              ...relativepos,
              opacity: 0.7,
              left: 0,
              p: 0.3,
              ml: 1,
              bgcolor: primary[100],
              "&:hover,&:active": {
                bgcolor: primary[300],
              },
            }}
          >
            <NavigateBeforeIcon fontSize="large" sx={{ color: primary[800] }} />
          </IconButton>
        )}
        <Box
          sx={{
            backgroundImage: `url(${overlay.src})`,
            pointerEvents: "none",
            background: `linear-gradient(to right, ${secondary[500] + "22"}, ${
              primary[500] + "42"
            }) no-repeat top center;`,
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        ></Box>

        <Fade in={true} key={index} timeout={500}>
          <Image
            src={imgSrcList[index].src}
            fill
            alt="crousel"
            style={{
              objectFit: imgSrcList[index].objectFit
                ? imgSrcList[index].objectFit
                : "cover",

              objectPosition: imgSrcList[index].objectPosition
                ? imgSrcList[index].objectPosition
                : "center",
            }}
          />
        </Fade>

        {showBtn === true && (
          <IconButton
            sx={{
              ...relativepos,
              opacity: 0.7,
              right: 0,
              p: 0.3,
              bgcolor: primary[100],
              mr: 1,
              "&:hover": { bgcolor: primary[100] },
              "&:hover,&:active": {
                bgcolor: primary[300],
              },
            }}
            onClick={handleNextPage}
          >
            <NavigateNextIcon fontSize="large" sx={{ color: primary[800] }} />
          </IconButton>
        )}
        {children}
      </Box>
    </>
  );
};

export default Crousel;
