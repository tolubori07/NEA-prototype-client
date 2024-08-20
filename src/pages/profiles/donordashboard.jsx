import { lazy, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../api/Authcontext"
import { getNextAppointment } from "../../api/appointmentService"
import Loading from "../../Loading"

const Button = lazy(() => import("../../components/Button"))
const Header = lazy(() => import("../../components/DonorHeader"))
const Appointment = lazy(() => import("../../components/Appointment"))

const DonorDashboard = () => {
  const user = JSON.parse(useContext(AuthContext));
  const [appointment, setAppointment] = useState({});
  const [loading, setLoading] = useState(true); // State to handle loading
  const date = new Date(appointment.Date)
  const time = new Date(appointment.Time)
  const location = appointment.Donation_Centre
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December",
  ];

  const getNext = async () => {
    try {
      const res = await getNextAppointment(user.token);
      setAppointment(res);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      setLoading(false); // Set loading to false whether request succeeds or fails
    }
  };

  useEffect(() => {
    getNext();
  }, []); // Empty dependency array to run the effect only once


  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-body font-heading text-text ml-14 mt-12">
        Welcome, {user.firstname}
      </h1>
      <div className="flex justify-center">
        <div className={`nextappointment bg-white p-10 shadow-dark mt-12 w-[70%] rounded-base border-2 border-black`}>
          <div className="flex justify-between">
            <h1 className="text-text font-heading font-body text-3xl">Your next appointment...</h1>
            <Link to="/manageappointment"><Button children="Manage appointment" className="p-3 text-white font-body font-bold" /></Link>
          </div>
          <h3 className="font-body text-text font-heading text-3xl mt-12 text-center">Date: {`${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</h3>
          <h3 className="font-body text-text font-heading text-3xl mt-6 text-center">Time:{time.getUTCHours() == '0' ? '00' : `${time.getUTCHours()}`}:{time.getMinutes() < 10 ? `0${time.getUTCMinutes()}` : `${time.getMinutes()}`} </h3>
          <h3 className="font-body text-main font-heading text-2xl mt-6 text-center">Donation Centre: {location.Name}</h3>
          <h3 className="font-body text-main font-heading text-2xl mt-6 text-center">Location: {location.Address}, {location.Postcode}
            <br />
            (Click to view on map)
          </h3>
        </div>
      </div>
 <h3 className="font-body text-text font-heading text-4xl mt-6 text-center">Essential Information</h3>
      <div className="flex justify-between">
        <div className="bg-white p-5 shadow-dark w-[30%] rounded-base border-2 border-black ml-5">
          <h4 className="text-text font-body font-heading text-2xl text-center">Take an eligibility quiz</h4>
        </div>
        <div className="bg-white p-5 shadow-dark w-[30%] rounded-base border-2 border-black mr-5">
          <h4 className="text-main font-body font-heading text-2xl text-center">About your blood group</h4>
        </div>
      </div>

    </div>
  )
}

export default DonorDashboard

