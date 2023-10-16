"use client";
import { Box, ButtonBase, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { primary, secondary } from "./BaseColor";
import apples from "../../public/imgs/Apples.webp";
import { GetApi } from "@/server/GetApi";
import no_image from "../../public/imgs/no_image.png";
const ProductItemAllDetail = ({ id }) => {
  // /invoice/customer/product-entity/show/detail/{id}/
  const [apiData, setApiData] = useState(null);
  const [status, setStatus] = useState<"loading" | "loaded" | null | "error">(
    null
  );
  useEffect(() => {
    const getDataFromApi = async () => {
      setStatus("loading");

      const dataFromAPi = await GetApi(
        "http://0.0.0.0:8088/api/invoice/customer/product-entity/show/detail/" +
          id +
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
  return (
    // id
    <>
      {apiData && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            p: 2,
            gap: 1,
            flexDirection: "column",
          }}
        >
          {/* img */}
          <Box
            position={"relative"}
            width={"100%"}
            height={200}
            borderRadius={5}
            flexShrink={0}
            flexGrow={1}
            overflow={"hidden"}
          >
            {apiData.p_id.image ? (
              <Image
                // http://0.0.0.0:8088/media/store/images#
                // /media/store/images/shop2.jpeg

                src={"http://0.0.0.0:8088/" + apiData.p_id.image}
                style={{ flexShrink: 0, objectFit: "cover", borderRadius: 20 }}
                alt={apiData.p_id.p_name}
                fill
              />
            ) : (
              <Image
                src={no_image}
                style={{ flexShrink: 0, objectFit: "cover", borderRadius: 20 }}
                fill
                alt="بدون عکس"
              />
            )}
          </Box>
          <Box flexGrow={1} width={"100%"}>
            {/* title and desc */}
            <Typography
              variant="h4"
              overflow={"hidden"}
              sx={{ overflow: "clip" }}
            >
              {apiData.p_id.p_name}
            </Typography>

            <Typography
              variant="body1"
              overflow={"hidden"}
              sx={{ textOverflow: "ellipsis" }}
            >
              {apiData.p_id.p_name} های تازه و خوشمزه از بهترین باغهای ایران
             
            </Typography>
            <Divider />

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              overflow={"clip"}
            >
              <Box
                display={"flex"}
                flexGrow={1}
                gap={1}
                justifyContent={"center"}
                alignItems={'center'}
              >
                <Typography p={1} color={"primary.main"}>
                  تاریخ خرید:
      {apiData.pe_date_time}
                </Typography>
                <Typography
                  sx={{
                    borderRadius: 30,
                    color: secondary[500],
                    textAlign: "center",
                    flexBasis: "50%",
                    fontWeight: "bold",
                    p: 1,
                  }}
                >
                  {apiData.p_id.d_id.d_title}
                </Typography>
              </Box>
            </Box>
            <Divider />
            {/* date */}

            {/* price */}
            <Box display={"flex"} gap={1}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ flexBasis: "50%" }}
              >
                <Typography
                  sx={{
                    flexBasis: "50%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  حداکثر قیمت مجاز:
                </Typography>
                <Typography
                  sx={{
                    bgcolor: "rgba(100, 220, 98, 1)",
                    textAlign: "center",
                    borderRadius: 50,
                    color: "#fff",
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { sm: 20, md: 30 },
                    fontWeight: "bold",
                  }}
                >
                  {apiData.sale_price}
                </Typography>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ flexBasis: "50%" }}
              >
                <Typography
                  sx={{
                    flexBasis: "50%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  قیمت فروش:
                </Typography>
                <Typography
                  sx={{
                    bgcolor: primary[400],
                    flexBasis: "50%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    color: "#fff",
                    verticalAlign: "middle",
                    p: 1,
                    fontWeight: "bold",
                    fontSize: { sm: 20, md: 30 },
                  }}
                >
                  {apiData.sale_price}
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"}>
              {/* degree and entity */}

              <Typography
                sx={{
                  flexBasis: "100%",
                  verticalAlign: "middle",

                  textAlign: "center",
                  p: 1,
                }}
              >
                موجودی: {apiData.pe_weight} کیلوگرم
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductItemAllDetail;
