import axios, { AxiosInstance } from "axios";

export const reqAPI: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_IP}`,
});

export const getGithubProfile = async (userId: string | undefined) => {
  return reqAPI.get(`/${userId}`);
};
