"use client";
import ProductItem2 from "@/client/ProductItem2";
import { GetApi } from "@/server/GetApi";
import { Box, Divider } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const page = () => {
  const queryClient = useQueryClient();
  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["showProdocut"],
    queryFn: async () => {
      const response = await fetch("http://0.0.0.0:8088/api/product/add/");

      return response.json();
      await axios("http://0.0.0.0:8088/api/product/add/").then((res) => {
        return res.data;
      });
    },
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return (
    <Box>
      show products
      <ul>
        {JSON.stringify(data)}
        {data.map((d) => (
        
          <ProductItem2 title={d.p_name} imageSrc={d.image}  /* ,desc,date,weight,degree,atMostPrice,salePrice, *//>
        
        ))}
      </ul>
      <Divider/>
      
    </Box>
  );
};

export default page;
