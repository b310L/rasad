import axios from "axios";

export const GetApi = async (url: string) => {
  const apiData = axios(url).then((r) => {
    console.log(r)
    return r.data;
  }).catch((err) => {
    return err
  });
  return apiData;
};
