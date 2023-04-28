import { instance } from "./instance";

export const getWeather = async () => {
  try {
    const response = await instance.get();
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
