import {lazy} from 'react'
const Header = lazy(()=>import("../components/DonorHeader"))

const Profile = () => {
  return (
    <>
      <Header/>
    <div>Profile</div>
   </>
  )
}

export default Profile
