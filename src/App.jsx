import {Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from './error-page';
import Loading from './Loading';

const Donordashboard = lazy(()=>import('./pages/donordashboard'))
const Manageappointments = lazy(()=>import('./pages/manageAppointments'))
const Profile = lazy(()=>import('./pages/Profile'))

const App = () => {
  return (
    <Router>
      <main className="min-h-screen bg-bg pb-12">
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/donor" element={<Donordashboard/>} />
          <Route path="/donor/manageappointment" element={<Manageappointments/>} />
          <Route path="/donor/profile" element={<Profile/>} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        </Suspense>
      </main>
    </Router>
  )
}

export default App
