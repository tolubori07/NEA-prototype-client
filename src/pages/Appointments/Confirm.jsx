import { lazy, useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createAppointment, getCentre } from "../../api/appointmentService";
import { AuthContext } from "../../api/Authcontext";

const Header = lazy(() => import('../../components/DonorHeader'));
const Button = lazy(() => import('../../components/Button'));
const Alert = lazy(() => import('../../components/Alerts'));

const Confirm = () => {
  const { centre, date, time } = useParams();  // Extract centre, date, and time from the URL parameters
  const [Centre, setCentre] = useState({});
  const user = JSON.parse(useContext(AuthContext)); // Directly using useContext without parsing
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const getPlace = async () => {
    try {
      const location = await getCentre(centre);  // Fetch the centre details using the ID from the parameters
      setCentre(location);
    } catch (error) {
      console.error("Failed to fetch centre:", error);
    }
  };

  const bookAppointment = async () => {
    try {
      const response = await createAppointment(date, time, centre, user.token); // Pass user token directly
      if (response) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/')
        }, 3000);  // Navigate to the homepage upon successful booking
      }
    } catch (error) {
      setError(true)
      console.error("Failed to book appointment:", error);
      // You may want to add error handling here, such as showing a message to the user
    }
  };

  useEffect(() => {
    getPlace();
  }, []);

  const appointmentDate = new Date(date);
  const appointmentTime = new Date(time);

  return (
    <div>
      <Header />
      <h1 className="text-text text-4xl mt-12 ml-12 font-body font-heading mb-12">Confirm your appointment details</h1>
      {success && <Alert className={'bg-green-500'} message={'Appointment was booked successfull, you will be redirected to your dashboard soon'} />}
      {error && <Alert message={'Oops! Looks like there was an error while booking your appointment, please try again.'} />}

      <div className="flex justify-center">
        <div className="bg-white border-2 border-black w-[50%] p-5 rounded-base shadow-dark">
          <h3 className="text-text font-heading font-body text-lg mb-4">
            <span className="flex items-center">Location📍:</span> {`${Centre.Name}, ${Centre.Address}, ${Centre.Postcode}`}
          </h3>
          <h3 className="text-text font-heading font-body text-lg mb-4">
            <span>Date:</span> {`${days[appointmentDate.getUTCDay()]}, ${appointmentDate.getDate()} ${months[appointmentDate.getUTCMonth()]} ${appointmentDate.getUTCFullYear()}`}
          </h3>
          <h3 className="text-text font-heading font-body text-xl">
            <span>Time:</span> {`${appointmentTime.getUTCHours()}:${appointmentTime.getUTCMinutes().toString().padStart(2, '0')}`} (24-hour time)
          </h3>
          <div className="flex justify-center">
            <Button className={" bg-green-500 px-12"} onClick={bookAppointment} type={success?'disabled':''}>Confirm</Button>  {/* Changed from onSubmit to onClick */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

