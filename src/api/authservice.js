import axios from "axios"

const API_URL = "http://localhost:3000"

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/dlogin`, userData,{crossDomain:true});
    if (response.data) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      // Set the value of the user atom
    }
    return response.data;
  } catch (err) {
    console.error(err);
  }
};


export const logout = () => {
  localStorage.removeItem('user');
};


export const register = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    if (response.data) {

      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;

  } catch (error) {
    console.error(error)
  }
};


const authServices = {
  login,
  logout,
  register
}
export default authServices


