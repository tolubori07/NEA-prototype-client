import { lazy } from "react"
import { Link } from "react-router-dom"
const Button = lazy(() => import('../components/Button'))
const Appointment = ({ user, appointment,children,className }) => {
  const date = new Date(appointment.Date)
  const time = new Date(appointment.Time)
  const location = appointment.Donation_Centre
  console.log(appointment)
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
  return (
    <div>
      <div className="flex justify-center">
        <div className={`nextappointment bg-white p-10 shadow-dark mt-12 w-[70%] rounded-base border-2 border-black ${className}`}>
          <div className="flex justify-between">
            {children}
            <Link to="/manageappointment"><Button children="Manage appointment" className="p-3 text-white font-body font-bold" /></Link>
          </div>
          <h3 className="font-body text-text font-heading text-3xl mt-12 text-center">Date: {`${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</h3>
          <h3 className="font-body text-text font-heading text-3xl mt-6 text-center">Time:{time.getUTCHours() == '0'?'00':`${time.getUTCHours()}`}:{time.getMinutes() < 10? `0${time.getUTCMinutes()}`:`${time.getMinutes()}`} </h3>
          <h3 className="font-body text-main font-heading text-2xl mt-6 text-center">Donation Centre: {location.Name}</h3>
          <h3 className="font-body text-main font-heading text-2xl mt-6 text-center">Location: {location.Address}, {location.Postcode}
            <br />
            (Click to view on map)
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Appointment
