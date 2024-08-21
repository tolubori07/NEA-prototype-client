import { lazy, useState, useEffect } from "react";
import { getCentres } from "../../api/appointmentService";
import { Heading1 } from "lucide-react";
import { Link } from "react-router-dom";

const SearchBar = lazy(() => import("../../components/SearchBar"));
const Header = lazy(() => import('../../components/DonorHeader'));
const Loading = lazy(() => import('../../Loading'));

const SearchAppointment = () => {
  const [centres, setCentres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('');

  const searchCentre = async () => {
    try {
      setLoading(true);// Ensure loading is set to true before the request
      const res = await getCentres(city);
      setCentres(res);
    } catch (error) {
      console.error("Failed to fetch donation centres", error);
    } finally {
      setLoading(false); // Set loading to false whether request succeeds or fails
    }
  };

  const onSubmit = async (e) => { 
    e.preventDefault();
    searchCentre();
  };

  useEffect(() => {
    searchCentre(); // Load initial data
  }, []); // Empty dependency array to run the effect only once

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <Header />
      <h1 className="text-text font-heading text-3xl ml-12 my-12">
        Find a donation centre near you...
      </h1>
      <SearchBar onChange={setCity} onSubmit={onSubmit} value={city} />
      <div className="results mt-12">
        <h1 className="text-text text-2xl font-heading m-5">
          {`Showing results for "${city}"`}
        </h1>

        <div className="flex justify-center flex-wrap gap-12">
          
          {centres.length>0?centres.map((centre, index) => (
            <div key={index} className="bg-white shadow-dark w-full max-w-lg border-2 border-black text-center rounded-lg p-5">
              <Link to={`/book/${centre.ID}`}><h1 className="text-main text-2xl font-heading">{centre.Name}</h1></Link>
              <h2 className="text-text text-lg font-body">
                {centre.Address}, {centre.City}, {centre.Postcode}
              </h2>
              <h2 className="text-text text-2xl font-semibold">
                Next available donation date: Monday, 24th June 2024
              </h2>
              <hr className="h-px my-2 bg-gray-200 border-0" />
              <h1 className="text-main text-2xl font-heading">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.Name)}`} target="_blank" rel="noopener noreferrer">
                  Click to view on maps
                </a>
              </h1>
            </div>
          )): <h1 className="text-text font-body font-heading text-3xl">Sorry, There are no centres in {city} 🙁 </h1>}
        </div>
      </div>
    </div>
  );
};

export default SearchAppointment;
