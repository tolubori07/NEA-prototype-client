import { lazy, useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../api/Authcontext'
import { logout } from '../../api/authservice'
import { useNavigate } from 'react-router-dom'
import { getNextAppointment } from '../../api/appointmentService'

const Input = lazy(() => import('../../components/Input'))
const Modal = lazy(() => import('../../components/Modal'))
const Header = lazy(() => import("../../components/DonorHeader"))
const Button = lazy(() => import("../../components/Button"))


const Profile = () => {
  const user = JSON.parse(useContext(AuthContext))
  const [isModalActive, setIsModalActive] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {

    if (!user) {
      navigate('/dlogin')
    }
  }, [user, navigate])
  return (
    <>
      <Header />
      <h1 className="text-text font-heading font-body text-4xl ml-12 mt-12">Your details...</h1>
      <div className="flex justify-center mt-12">
        <div className="bg-white text-center shadow-dark rounded-base py-8 border-2 border-black w-[50%]">
          <h1 className="text-text font-heading font-body text-2xl mb-3">{`${user.title} ${user.firstname} ${user.lastname}`}</h1>
          <h1 className="text-text font-heading font-body text-2xl mb-3">Donor ID: {user.id}</h1>
          <h1 className="text-mainAccent font-heading font-body text-2xl mb-3">Blood group: {user.bloodgroup}</h1>
          <h1 className="text-text font-heading font-body text-2xl mb-3">Genotype: {user.genotype}</h1>
        </div>
      </div>


      <div className="flex justify-center mt-12">
        <div className="bg-white text-center shadow-dark rounded-base py-8 border-2 border-black w-[60%]">
          <h1 className="text-text font-heading font-body text-center text-4xl">Your personal information</h1>
          <h3 className="text-text font-body font-bold text-xl mt-5">First name: {user.firstname}</h3>
          <h3 className="text-text font-body font-bold  text-xl mt-5">Last name: {user.lastname}</h3>
          <h3 className="text-text font-body font-bold  text-xl mt-5">Email: {user.email}</h3>
          <h3 className="text-text font-body font-bold  text-xl mt-5">Phone Number: {user.phone}</h3>
          <div className="flex flex-row justify-center mt-8 gap-8">
            <h3 className="text-text font-body font-bold  text-xl mt-5">Password: ...................</h3>
            <Button
              onClick={() => {
                setIsModalActive(true)
              }}
            >Update Password
            </Button>
            <Modal active={isModalActive} setActive={setIsModalActive}>
              <form>
                <label className='text-text font-body font-[700] text-left'>Input Your new password</label>
                <Input type={"password"} className={"bg-white"} placeholder={"New password"} />
                <label className='text-text font-body font-[700] text-left'>Confirm new password</label>
                <Input type={"password"} className={"bg-white"} placeholder={"Confirm password"} />
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
