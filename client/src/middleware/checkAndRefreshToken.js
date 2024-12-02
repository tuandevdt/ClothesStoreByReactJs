import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const checkAndRefreshToken = async (token) => {
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // Token đã hết hạn, thực hiện yêu cầu làm mới token

    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post('http://localhost:3000/v1/api/auth/refresh', {refreshToken}, { withCredentials: true });
      const newToken = response.data.accessToken;
      console.log(newToken);
      
      localStorage.setItem("accessToken", newToken);
      return newToken; // Trả về token mới
    } catch (error) {
      console.error("Token refresh failed", error);
      return null; // Nếu không thể làm mới token, trả về null
    }
  }

  return token; // Nếu token còn hạn, trả về token hiện tại
};

export default checkAndRefreshToken;