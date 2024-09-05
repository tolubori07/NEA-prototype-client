import axios from "axios";

const url = "http://localhost:3000";

export const getUserAppointments = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get(url, config)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}


export const getNextAppointment = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get("http://localhost:3000/nextAppointment", config)
    return response.data
  } catch (error) {
    console.error(error)
  }
}




export const getCentres = async (city) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/search",
      { city }, // Send the city as an object
      { crossDomain: true }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch donation centres", error);
    return []; // Return an empty array on error to avoid breaking the app
  }
};

export const getCentre = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/getcentre?id=${id}`, { crossDomain: true })
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export const getAvailableTimes = async (date, id) => {
  try {
    const response = await axios.get(`http://localhost:3000/availableSlots?date=${date}&id=${id}`, { crossDomain: true });
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export const createAppointment = async (date, time, centre, token) => {
  try {
    // Ensure all required parameters are provided
    if (!date || !time || !centre || !token) {
      throw new Error('Missing required parameters');
    }

    // Set up headers with authorization token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Make the POST request to create an appointment
    const response = await axios.post(
      `http://localhost:3000/appointments`,
      { date, time, centre },
      config
    );

    // Return the response data
    return response.data;

  } catch (error) {
    console.error('Error creating appointment:', error.message);

    // Return a more descriptive error object
    return { error: true, message: error.message };
  }
};

