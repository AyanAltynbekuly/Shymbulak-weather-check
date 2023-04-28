import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/forecast?lat=43.128056&lon=77.080833&appid=8f6066cc2f4903e7c6ad130efd41ea7b",
});
