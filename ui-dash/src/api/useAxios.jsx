import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Correct import statement
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);
  const [isRefreshingToken, setIsRefreshingToken] = useState(false);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).isBefore(dayjs());

    if (!isExpired) return req;

    // If token is expired, check if token refresh is already in progress
    if (!isRefreshingToken) {
      setIsRefreshingToken(true);
      try {
        const response = await axios.post(`${baseURL}/token/refresh/`, {
          refresh: authTokens.refresh,
        });
        // Update tokens and user data
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));

        // Retry the original request with the new access token
        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
      } catch (error) {
        console.error("Error refreshing token:", error);
        // Handle token refresh failure
        // For example, logout user and redirect to login page
      } finally {
        setIsRefreshingToken(false);
      }
    }

    // If token refresh is already in progress, wait for it to complete
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (!isRefreshingToken) {
          clearInterval(interval);
          resolve(req);
        }
      }, 100);
    });
  });

  return axiosInstance;
};

export default useAxios;
