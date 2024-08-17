import { Suspense, lazy, useContext,useState, useEffect} from "react"
import { getUserAppointments } from "../../api/appointmentService";
import { AuthContext } from "../../api/Authcontext";

const Alert = lazy(() => import("../../components/Alerts"));
const Header = lazy(() => import("../../components/DonorHeader"));
const Button = lazy(()=>import("../../components/Button"))
const ManageAppointments = () => {
  
     
  return (
   <div className="">
      <Suspense>
        <Header />
      </Suspense>
      <h1 className="text-text font-heading text-center text-4xl">Manage your upcoming appointments</h1>
      <Alert message="If you want to reschedule or cancel your appointment, please try to give us at least 3 days notice" className="w-[40%] mt-12 ml-5" />

      <div className="flex justify-center mt-12">
        <div className="bg-white shadow-dark rounded-base w-[70%] border-2 border-black p-5">
          <h3 className="text-text font-[600] text-2xl mb-5">Your next appointment...</h3>
          <h2 className="text-text font-heading font-body text-2xl text-center mb-5">Date: Monday,  24th June 2025</h2>
          <h2 className="text-text font-heading font-body text-2xl text-center mb-5">Time: 4:00PM</h2>
          <h2 className="text-main font-[600] font-body text-2xl text-center mb-5">Donation Centre: Stoke-on-Trent Donation centre</h2>
          <h2 className="text-main font-base font-heading font-body text-2xl text-center mb-5">Location📍: Belmont road, Etruria, Stoke-on-Trent, ST1 4BT</h2>
          <h2 className="text-main font-body font-base text-2xl text-center mb-5">(Click to view on maps)</h2>
          <div className="flex flex-col items-center px-48 gap-12 ">
              <Button children="Reschedule this appointment" className="text-white text-center justify-center font-heading w-[30rem] text-xl py-5"/>
              <Button children="Cancel this appointment" className="text-white  text-center  justify-center font-heading font-body w-[30rem] text-xl bg-mainAccent py-5"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageAppointments
