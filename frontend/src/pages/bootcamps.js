import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getBootcamps } from "../store/actions";
import { baseurl } from "../store/baseurl";
import Axios from "axios";
import BootcampGraph from "../components/bootcampGraph";
import UpComingBootcampsCard from "../components/upcomingBootcampsCard";
import Sidebar from "../components/sidebar";
import UpcomingBootcampsGraph from "../components/upcomingBootcampsGraph";
const Bootcamps = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [bootcamp_type, setBootcampType] = useState("");
  const [bootcamp_location, setBootcampLocation] = useState("");
  const [bootcampsData, setBootcamps] = useState([]);

  useEffect(() => {
    getBootcamps();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${baseurl}bootcamps/upcoming`;
    const data = { start_date, end_date, bootcamp_type, bootcamp_location };
    getBootcamps();
  };

  const getBootcamps = async () => {
    const response = await Axios(`${baseurl}bootcamps/upcoming/10`);
    console.log(response.data);
    setBootcamps(response.data);
  };

  // const bootcampsTable =
  //   bootcampsData.map((item) =>
  //     <li key={item.name}>
  //       {item.name}
  //       <p>{item.bootcamp_location}</p>
  //       {item.start_date}
  //     </li>
  // )
  return (
    <div className="flex w-full h-screen border-green-800 border-4">
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full h-full border-red-700 border-solid border-2">
          {/* <form>
        <label>
          Start Date Range:
          <input
            name="start_date"
            type="date"
            value={start_date_applications}
            onChange={(e) => setStartDateApplications(e.target.value)}
          />
        </label>
      </form> */}

          <div className="flex h-full w-full border-yellow-300  border-solid border-2 justify-evenly items-center">
            {bootcampsData.map((item) => (
              <UpComingBootcampsCard data={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="flex h-full w-full border-black border-2 border-solid">
          <UpcomingBootcampsGraph data={bootcampsData} />
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
