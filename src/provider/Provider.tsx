import React from "react";
import MuiProviders from "./MuiProviders";
import CurrentUserProvider from "./CurrentUserProvider";
import TabValueProvider from "./TabValueProvider";
const Provider = ({ children }: any) => {
  return (
    <MuiProviders>
      <CurrentUserProvider>
        <TabValueProvider>{children}</TabValueProvider>
      </CurrentUserProvider>
    </MuiProviders>
  );
};

export default Provider;
