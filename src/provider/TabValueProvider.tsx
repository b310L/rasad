"use client"
import NavigationB from "@/client/NavigationB";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const TabValueContext = createContext<any>(null);

const TabValueProvider = ({ children }: any) => {

  const [tabValue, setTabValue] = useState(0);

  return (
    <TabValueContext.Provider value={[tabValue, setTabValue]}>
      {children}
    </TabValueContext.Provider>
  );
};

export default TabValueProvider;
