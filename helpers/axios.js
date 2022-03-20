import axios from "axios";

export const rssApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    Accept: "application/json",
  },
});
