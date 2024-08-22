import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import DonorHeader from "./components/DonorHeader";

export default function ErrorPage() {
  const [task, setTask] = useState("")
  const getTask = async () => {
    try {
      const response = await axios.get('https://bored.api.lewagon.com/api/activity', { crossDomain: true });
      const data = await response.data;
      setTask(data);
      console.log(data)
    } catch (error) {
      console.error(error.message);
      // Handle the error, you can set an error message state here
    }

  };
  useEffect(() => {
    getTask()
  }, [])
  return (
    <>
      <Suspense>
        <DonorHeader />
      </Suspense>
      <div id="error-page" className="mt-12">
        <h1 className="text-mainAccent font-heading text-center text-5xl">Error 404</h1>
        <h1 className="text-main font-heading text-center text-3xl">Oops! The page you were looking for can't be found</h1>
        <h2 className="text-text font-heading text-center text-2xl">But here's something else you can do: {task.activity}</h2>
      </div>
    </>
  );
}
