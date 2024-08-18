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


export const getNextAppointment = async(token)=>{ 
  try{ 
    const config ={
      headers:{ 
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get("http://localhost:3000/nextAppointment",config)
    return response
  }catch(error){ 
    console.error(error)
  }
}
