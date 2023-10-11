import React from "react";
import MuiProviders from "./MuiProviders";
import CurrentUserProvider from "./CurrentUserProvider";
const Provider = ({ children }) => {
  return (
    <MuiProviders>
      <CurrentUserProvider>{children}</CurrentUserProvider>
    </MuiProviders>
  );
};

export default Provider;
