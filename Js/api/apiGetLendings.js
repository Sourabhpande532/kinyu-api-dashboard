// apiGetLendings.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiGetLendings = async () => {
  try {
    const { data } = await axios.get("/api/lendings");
    return { error: null, data: data.lendings };
  } catch (err) {
    return { error: err, data: null };
  }
};
/*
-This function return a object like this in return formate 
 {error:null, data: data.lendings} which has data and error
-So, when we make API call,we'll get data in this formate see return obj
-Either error or data..Let's import this our home card /pages/home.js
*/