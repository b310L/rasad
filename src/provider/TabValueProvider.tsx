"use client";
import NavigationB from "@/client/NavigationB";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const TabValueContext = createContext<any>(null);

const TabValueProvider = ({ children }: any) => {
  const pathname = usePathname();
  let index;
  if (pathname === "/") {
    index = 0;
  } else if (pathname === "/store") {
    index = 1;
  } else if (pathname === "/profile") {
    index = 2;
  }
  const [tabValue, setTabValue] = useState(index);

  return (
    <TabValueContext.Provider value={[tabValue, setTabValue]}>
      {children}
    </TabValueContext.Provider>
  );
};

export default TabValueProvider;
