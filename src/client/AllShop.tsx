import React, { Fragment, useEffect, useState } from "react";
import ShopBox from "./ShopBox";
import { GetApi } from "@/server/GetApi";
import shop1 from "../../public/imgs/shop1.jpeg";
import shop2 from "../../public/imgs/shop2.jpeg";
const AllShop = ({dataProps}:Array<object>) => {
 

  return (
    <Fragment >
      {dataProps && dataProps?.map((d:object) => {
        return <ShopBox key={d.s_name} name={d.s_name} adress={d.s_address} src={d.src} slug={d.s_slug} />;
      })}
    </Fragment>
  );
};

export default AllShop;
