import { lazy } from "react"
import { Link } from "react-router-dom"

const Button = lazy(()=>import("./Button"))

const DonorHeader = () => {
  return (
    <header className="bg-white h-24 border-b-4 border-b-black flex flex-row justify-between items-center mb-3 gap-[20rem]">
      <h1 className="text-3xl text-main font-display mt-3 ml-2 stroke-black [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">One Health Lifesavers</h1>
      <div className="navlinks flex gap-[6rem] mr-3">
      <Link to="/profile"><Button children={"About You"} className="text-white font-bold"/></Link>
      <Button children={"Guidance"} className="text-white font-bold"/>
      <Link to="/bookappointment"><Button children={"Book an appointment"} className="text-white font-bold"/></Link>
      </div>
    </header>
  )
}

export default DonorHeader
