import axios from "axios";
const BASE_URL = "https://pet.tizenmile.keenetic.pro/api/static/friends";
//const BASE_URL = "http://localhost:3000/api/contacts";
export const getFrends = async () => {
  const response = await axios.get(BASE_URL);

  return response;
};
