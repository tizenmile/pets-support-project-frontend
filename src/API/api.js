import axios from "axios";
const BASE_URL = "https://pet.tizenmile.keenetic.pro/api/static/friends";
export const getFrends = async () => {
  const response = await axios.get(BASE_URL);

  return response;
};
