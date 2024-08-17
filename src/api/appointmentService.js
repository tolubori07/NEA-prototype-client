import axios from "axios";

const url = "http://localhost:3000/appointments";

export const getUserAppointments=async(token)=>{ 
  try {
  const config ={
    headers:{
    Authorization: `Bearer ${token}`
      }
    }
 
 const response = await axios.get(url,config)
    console.log(response.data)
    return response.data
 } catch (error) {
  console.error(error)
 }
}
