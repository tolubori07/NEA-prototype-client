import { lazy } from "react";

const SearchBar = lazy(() => import("../../components/SearchBar"));
const Header = lazy(() => import('../../components/DonorHeader'));

const SearchAppointment = () => {
  return (
    <div className="w-full">
      <Header />
      <h1 className="text-text font-heading text-3xl ml-12 my-12">
        Find a donation centre near you...
      </h1>
      <SearchBar />
      <div className="results mt-12">
        <h1 className="text-text text-2xl font-heading m-5">
          Showing results for {"\"Stoke-on-Trent\""}
        </h1>
        <div className="flex justify-center flex-wrap gap-12">
          <div className="bg-white shadow-dark w-full max-w-lg border-2 border-black text-center rounded-lg p-5">
            <h1 className="text-main text-2xl font-heading">Stoke-On-Trent Donor Centre</h1>
            <h2 className="text-text text-lg font-body">
              Belmont Road, Etruria Stoke-on-Trent, ST1 4BT
            </h2>
            <h2 className="text-text text-2xl font-semibold">
              Next available donation date: Monday, 24th June 2024
            </h2>
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <h1 className="text-main text-2xl font-heading">
              <a href="https://www.google.com/maps/search/?api=1&query=Stoke+Blood+Donor+Centre" target="_blank" rel="noopener noreferrer">
                Click to view on maps
              </a>
            </h1>
          </div>

          <div className="bg-white shadow-dark w-full max-w-lg border-2 border-black text-center rounded-lg p-5">
            <h1 className="text-main text-2xl font-heading">Stoke-On-Trent Donor Centre</h1>
            <h2 className="text-text text-lg font-body">
              Belmont Road, Etruria Stoke-on-Trent, ST1 4BT
            </h2>
            <h2 className="text-text text-2xl font-semibold">
              Next available donation date: Monday, 24th June 2024
            </h2>
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <h1 className="text-main text-2xl font-heading">
              <a href="https://www.google.com/maps/search/?api=1&query=Stoke+Blood+Donor+Centre" target="_blank" rel="noopener noreferrer">
                Click to view on maps
              </a>
            </h1>
          </div>

          <div className="bg-white shadow-dark w-full max-w-lg border-2 border-black text-center rounded-lg p-5">
            <h1 className="text-main text-2xl font-heading">Stoke-On-Trent Donor Centre</h1>
            <h2 className="text-text text-lg font-body">
              Belmont Road, Etruria Stoke-on-Trent, ST1 4BT
            </h2>
            <h2 className="text-text text-2xl font-semibold">
              Next available donation date: Monday, 24th June 2024
            </h2>
            <hr className="h-px my-2 bg-gray-200 border-0" />
            <h1 className="text-main text-2xl font-heading">
              <a href="https://www.google.com/maps/search/?api=1&query=Stoke+Blood+Donor+Centre" target="_blank" rel="noopener noreferrer">
                Click to view on maps
              </a>
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchAppointment;
