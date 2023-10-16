import axios from "axios";
import React from "react";

export const ChechImageExitence = ({ path }: any): boolean => {
  let a = false;
  axios
    .get(path)
    .then(() => {
      a = true;
      return true;
    })
    .catch(() => {
      return false;
    });

  return a;
};
