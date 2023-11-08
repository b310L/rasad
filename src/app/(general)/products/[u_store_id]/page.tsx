"use client";
import { primary } from "@/client/BaseColor";
import ProductItem from "@/client/ProductItem";
import Search from "@/client/Search";
import { GetApi } from "@/server/GetApi";
import { Box, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { fakeProductsOfStoreData } from "./fakeProductsOfStoreData";

const productsListOfStorePage = ({
  params,
}: {
  params: { u_store_id: string };
}) => {
  const [searchVal, setSearcVal] = useState();
  console.log(params.u_store_id);
  const [apiData, setApiData] = useState(null);
  const [status, setStatus] = useState<"loading" | "loaded" | null | "error">(
    null
  );
  useEffect(() => {
    const getDataFromApi = async () => {
      setStatus("loading");
      // /invoice/customer/product-entity/show/store//+u_store_id

      const dataFromAPi = await GetApi(
        "http://0.0.0.0:8088/api/invoice/customer/product-entity/show/store/" +
          params.u_store_id +
          "/"
      );

      setApiData(dataFromAPi);
      setStatus("loaded");
      if (dataFromAPi === false) {
        setStatus("error");
      }

      return dataFromAPi;
    };
    getDataFromApi();
  }, []);
  const handleChange = (e) => {
    setSearcVal(e.target.value);
  };
  return (
    <div>
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
      {(apiData?.length>0)?
    (  apiData?.map((data) => {
        return (
          <Box display={'flex'} flexDirection={'column'} >
            <ProductItem data={data} u_store_id={params.u_store_id} />
            <Divider sx={{my:1,bgcolor:primary[500]}} />
          </Box>
        );
      }))
      :
      fakeProductsOfStoreData?.map((data) => {
        return (
          <Box display={'flex'} flexDirection={'column'} >
            <ProductItem data={data} u_store_id={params.u_store_id} />
            <Divider sx={{my:1,bgcolor:primary[500]}} />
          </Box>
        );
      })
      }
      
      
    </div>
  );
};

export default productsListOfStorePage;
