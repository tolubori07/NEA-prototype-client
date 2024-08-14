import { lazy } from "react"
import { Link } from "react-router-dom"

const Button = lazy(() => import("../components/Button"))
const Header = lazy(() => import("../components/DonorHeader"))

const DonorDashboard = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-body font-heading text-text ml-14 mt-12">Welcome, User</h1>
      <div className="flex justify-center">
        <div className="nextappointment bg-white p-10 shadow-dark mt-12 w-[70%] rounded-base border-2 border-black">
          <div className="flex justify-between">
            <h1 className="text-text text-3xl font-body font-heading">Your next appointment...</h1>
           <Link to="/manageappointment"><Button children="Manage appointment" className="p-3 text-white font-body font-bold" /></Link>
          </div>
          <h3 className="font-body text-text font-heading text-3xl mt-12 text-center">Date: Monday, 24th June 2025</h3>
          <h3 className="font-body text-text font-heading text-3xl mt-6 text-center">Time: 4:00 pm</h3>
          <h3 className="font-body text-main font-heading text-2xl mt-6 text-center">Donation Centre: 4:00 pm</h3>
          <h3 className="font-body text-main font-heading text-2xl mt-6 text-center">Location: Belmont Road, Etruria, Stoke-on-Trent, ST1 4BT
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
