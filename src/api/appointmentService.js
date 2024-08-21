import axios from "axios";

const url = "https://nea-backend-api.onrender.com/appointments";

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

    const response = await axios.get("https://nea-backend-api.onrender.com/nextAppointment",config)
    return response.data
  }catch(error){ 
    console.error(error)
  }
}




export const getCentres = async (city) => {
  try {
    const response = await axios.post(
      "https://nea-backend-api.onrender.com/search",
      { city }, // Send the city as an object
      { crossDomain: true }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch donation centres", error);
    return []; // Return an empty array on error to avoid breaking the app
  }
};

export const getCentre = async(id)=>{ 
  try{
    const response = await axios.get(`https://nea-backend-api.onrender.com/getcentre?id=${id}`,{crossDomain:true})
    return response.data
  }catch(error){
    console.error(error)
    return {}
  }
}

export const getAvailableTimes =async(date,id)=>{ 
  try{
    const response = await axios.get(`https://nea-backend-api.onrender.com/availableSlots?date=${date}&id=${id}`,{crossDomain:true});
    return response.data
  }catch(error){
    console.error(error)
    return {}
  }
}