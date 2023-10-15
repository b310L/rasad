import axios from "axios";

export const PostApi = async (url: string,data:any) => {
  const apiData = axios.post(url,data).then((r) => {
    console.log(r)
    return r.data;
  }).catch((err) => {
    console.log(err)
    return err
  });
  return apiData;
};


