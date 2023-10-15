import { Box, Card, Grid, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";

const MainLinksGriddy = () => {
  return (
    <Box sx={{ flexGrow: 1 ,p:2}}>
      <Grid container spacing={2}  sx={{ boxSizing: "border-box" }}>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>
          
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <LinkBox/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLinksGriddy;


const LinkBox = ({href='#',name='link'}) => {
  return (
    <Paper sx={{display:'flex',justifyContent:'center',p:2}} >
        <Link href={href}>{name}</Link>
    </Paper>
  )
}
