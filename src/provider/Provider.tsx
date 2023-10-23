import React from "react";
import MuiProviders from "./MuiProviders";
import CurrentUserProvider from "./CurrentUserProvider";
import TabValueProvider from "./TabValueProvider";
import QueryProvider from "./QueryClientProvider";
const Provider = ({ children }: any) => {
  return (
    <QueryProvider>
      <MuiProviders>
        <CurrentUserProvider>
          <TabValueProvider>{children}</TabValueProvider>
        </CurrentUserProvider>
      </MuiProviders>
    </QueryProvider>
  );
};

export default Provider;
