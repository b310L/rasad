"use client";
import ResultSearch from "@/client/ResultSearch";
import Search from "@/client/Search";
import ShopBox from "@/client/ShopBox";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import yazdImg from "../../../../public/imgs/home-img.png";

import AllShop from "@/client/AllShop";
import { GetApi } from "@/server/GetApi";
import { PostApi } from "@/server/PostApi";
import Link from "next/link";
import { shop1, shop2 } from "@/ImageDefinition/ImageDefiinition";

const page = () => {
  const data3 = [
    {
      s_name: "فروشگاه رفاه",
      s_adress: "میدان مهدیه بلوار امام جعغرصادق علیه السلام ",
      s_image: shop2,
    },
    {
      s_name: "فروشگاه ترنج",
      s_adress: "میدان مهدیه بلوار امام جعغرصادق علیه السلام ",
      s_image: shop1,
    },
    {
      s_name: "فروشگاه خوبی",
      s_adress: "میدان مهدیه بلوار امام جعغرصادق علیه السلام ",
      s_image: shop2,
    },
    {
      s_name: "فروشگاه نارنجی",
      s_adress: "میدان مهدیه بلوار امام جعغرصادق علیه السلام ",
      s_image: shop1,
    },
    {
      s_name: "فروشگاه دریا",
      s_adress: "میدان مهدیه بلوار امام جعغرصادق علیه السلام ",
      s_image: shop2,
    },
  ];
  const [data, setData] = useState<Array<object>>([]);
  const [offdata, setOffData] = useState<Array<object>>(data3);
  const [status, setStatus] = useState<string>("No");

  const getDataFromApi = async () => {
    setStatus('Fetching');

    const dataFromAPi = await GetApi("http://0.0.0.0:8088/api/store/");
    setData(dataFromAPi);
    if (dataFromAPi.length > 0) {
      setStatus('Recieved');
    }

    // console.log("dataFromAPi: " + dataFromAPi);
  };
  useEffect(() => {
    getDataFromApi();
    return () => {};
  }, []);

  const [searchVal, setSearchVal] = useState("");
  const [close, setClose] = useState(false);

  const handleChange = (e: any) => {
    setSearchVal(e.target.value);
    if(status!=='Recieved' ){
      const filterData=data3.filter((d)=>{
        return d.s_name.includes(e.target.value) 
      });
      console.log('## '+JSON.stringify(filterData))
      setOffData(filterData);
    }
    else {
      if (e.target.value.trim().length >= 1) {
        const getDataFromApi = async () => {
          const dataFromAPi = await PostApi(
            "http://0.0.0.0:8088/api/store/search/",
            { search: e.target.value.trim() }
          );
          // console.log("dataFromAPi" + dataFromAPi);
          setData(dataFromAPi);
          return dataFromAPi;
        };
        getDataFromApi();
      }
      if (e.target.value.trim().length == 0) {
        getDataFromApi();
      }
    }
   
    
   
  };
  return (
    <>
      {status == "Recieved" ? (
        // data from api
        <Box
        key={1}
          p={2}
          display={"flex"}
          gap={1}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 4,
              backgroundColor: "#fff",
            }}
          >
            <Box>
              <Search searchVal={searchVal} onChange={(e) => handleChange(e)}>
                {/* <Suspense fallback={<CircularProgress />}>
              <Box
                sx={{
                  width: "100%",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {searchVal.length >= 2 && (
                  <ResultSearch close={close} setClose={setClose} data={data} />
                )}
              </Box>
            </Suspense> */}
              </Search>
              <Link href={"/stores-map"}>
                <Button fullWidth variant="custom">
                  جستجوی فروشگاه از نقشه{" "}
                </Button>
              </Link>
            </Box>

            <Divider variant="middle" sx={{ m: 1 }} />
            <Typography textAlign={"center"}>لیست تمام فروشگاه ها</Typography>
          </Box>

          <Box overflow={"auto"} display={"flex"} flexDirection={"column"}>
            {<AllShop dataProps={data} />}
          </Box>
        </Box>
      ) : (
        // offline data
        <Box
          key={2}
          p={2}
          display={"flex"}
          gap={1}
          flexDirection={"column"}
          justifyContent={"center"}
        >Fake Data
          <Box
            width={"100%"}
            height={"100%"}
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 4,
              backgroundColor: "#fff",
            }}
          >
            <Box>
              <Search searchVal={searchVal} onChange={(e) => handleChange(e)}>
                {/* <Suspense fallback={<CircularProgress />}>
              <Box
                sx={{
                  width: "100%",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {searchVal.length >= 2 && (
                  <ResultSearch close={close} setClose={setClose} data={data} />
                )}
              </Box>
            </Suspense> */}
              </Search>
              <Button fullWidth variant="custom">
                جستجوی فروشگاه از نقشه{" "}
              </Button>
            </Box>

            <Divider variant="middle" sx={{ m: 1 }} />
            <Typography textAlign={"center"}>لیست تمام فروشگاه ها</Typography>
          </Box>

          <Box overflow={"auto"} display={"flex"} flexDirection={"column"}>
            {<AllShop dataProps={offdata} />}
          </Box>
        </Box>
      )}
    </>
  );
};

export default page;
