import { primary } from "@/client/BaseColor";

export const sxGrwoWidth = {
    position: "relative",
    color: '#000',
    py: .5,
    px:1,
    textDecoration: "none",
    overflow: "clip",
    borderRadius: 1,
    transition: "all .5s",
  
    "&::before": {
      width: "0%",
      inset: 0,
      height: "100%",
      position: "absolute",
      bgcolor: primary[500],
      content: '""',
      transition: "width .5s",
      zIndex: -1,
    },
    "&:hover::before": {
      width: "100%",
      transition: "width .5s",
    },
    "&:hover": {
      color: "#fff",
      transition: "color .5s",
    },
  };