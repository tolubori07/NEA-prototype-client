import { lazy, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../api/Authcontext"
import { getNextAppointment } from "../../api/appointmentService"

const Button = lazy(() => import("../../components/Button"))
const Header = lazy(() => import("../../components/DonorHeader"))
const Appointment = lazy(() => import("../../components/Appointment"))

const DonorDashboard = () => {
  const navigate = useNavigate()
  const user = useContext(AuthContext) // No need to parse, useContext returns the context value directly
  const [appointment, setAppointment] = useState({}) // useState to manage state, not useEffect

  const getNext = async () => {
    const token = user.token
    const appointmentData = await getNextAppointment(token) // Await the API call
    setAppointment(appointmentData)
  }

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/dlogin')
    } else { 
      getNext() // Call the function directly, no need for additional variable
    }
  }, [user, navigate])

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-body font-heading text-text ml-14 mt-12">
        Welcome, {user.firstname}
      </h1>
      <div className="flex justify-center">
        <div className="nextappointment bg-white p-10 shadow-dark mt-12 w-[70%] rounded-base border-2 border-black">
          <div className="flex justify-between">
            <h1 className="text-text text-3xl font-body font-heading">Your next appointment...</h1>
            <Link to="/manageappointment">
              <Button className="p-3 text-white font-body font-bold">Manage appointment</Button>
            </Link>
          </div>
          {appointment ? (
            <Appointment user={user} appointment={appointment}/>
            ) : (
            <h3 className="font-body text-text font-heading text-3xl mt-12 text-center">No upcoming appointments</h3>
          )}
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

