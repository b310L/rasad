import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import LinkItem from "./LinkItem";
import { primary } from "./BaseColor";

const MainLinksGriddy = () => {
  return (
    <Box sx={{ flexGrow: 1 ,p:2}}>
      {/* <LinkItem /> */}
      <Grid container spacing={2}  sx={{ boxSizing: "border-box" }}>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox href="/profile" name="پروفایل"/>

        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox href="/stores" name="فروشگاه ها"/>
        
          
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <LinkBox/>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid> <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid> <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid> <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid> <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid> <Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid><Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid><Grid item xs={6} sm={4} md={3}>
        <LinkBox/>

        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLinksGriddy;


const LinkBox = ({href='#',name='نمایش تمام کالا ها'}) => {
  return (
    <Paper sx={{display:'flex',justifyContent:'center',p:2,bgcolor:primary[500]}} >
        <Link  color="#fff"  href={href}>
          <Typography variant="h5" color={'#fff'}>

          {name}

          </Typography>
          </Link>
    </Paper>
  )
}
