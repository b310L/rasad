"use client";
import React, { createContext, useMemo, useState } from "react";

export const currentUserContext = createContext<null|string>(null);

const CurrentUserProvider = ({ children }:any) => {
  const [currentUser, setCurrentUser] = useState<null|string>(null);

  return (
    <currentUserContext.Provider value={[currentUser,setCurrentUser]}>
      {children}
    </currentUserContext.Provider>
  );
};

export default CurrentUserProvider;
