import { Suspense, lazy, useContext, useState, useEffect } from "react";
import { getUserAppointments } from "../../api/appointmentService";
import { AuthContext } from "../../api/Authcontext";
import Loading from '../../Loading';

const Appointment = lazy(() => import('../../components/Appointment'));
const Header = lazy(() => import('../../components/DonorHeader'));

const AllAppointments = () => {
  const user = JSON.parse(useContext(AuthContext));
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading

  const getAppointment = async () => {
    try {
      const res = await getUserAppointments(user.token);
      setAppointments(res);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    } finally {
      setLoading(false); // Set loading to false whether request succeeds or fails
    }
  };

  useEffect(() => {
    getAppointment();
  }, []); // Empty dependency array to run the effect only once

    console.table(appointments[0])

  if (loading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
<Header/>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <Appointment key={appointment.ID} user={user} appointment={appointment} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-12">No appointments found.</div>
      )}
    </Suspense>
  );
};

export default AllAppointments;
