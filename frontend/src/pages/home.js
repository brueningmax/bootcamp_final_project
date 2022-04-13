import Footer from "../components/footer";
import Header from "../components/header";
import React, { useState, useEffect } from "react"; 
import Axios from "axios"
import Graph from "../components/graph"; 
import NarrowBar from "../components/narrowbar";
import MiddleBar from "../components/middlebar";
import Sidebar from "../components/sidebar";
import MainPage from "../style/main.style";
import { baseurl } from "../store/baseurl";

const Home = () => {

  const [applicationsData, setLatestApplications] = useState([]);
  const [bootcampsData, setLatestBootcamps] = useState([]);
  
  useEffect(() => {
    getLatestApplications();
    getLatestBootcamps();
  }, [])
  
  const getLatestApplications = async() => {
    const response = await Axios(`${baseurl}applications/all/`);
    setLatestApplications(response.data)
  }

  const getLatestBootcamps = async() => {
    const response = await Axios(`${baseurl}bootcamps/all/`);
    setLatestBootcamps(response.data)
  }

  // useEffect(() => {
  //   fetchLatestApplications();
  // }, [])
  
  // const fetchLatestApplications = async() => {
  //   const response = await Axios("https://testest.free.beeceptor.com");
  //   setLatestApplications(response.data)    
  // }
  
  const data = [
    {
      "first_name": "Mike",
      "last_name": "Jack",
      "bootcamp_name": "Full Stack",
      "applied": "2022-04-21T18:25:43.511Z",
      "bootcamp_location": "Zurich"
    },
    {
      "first_name": "Max",
      "last_name": "Max",
      "bootcamp_name": "Full Stack",
      "applied": "2022-04-23T18:25:43.511Z",
      "bootcamp_location": "Zurich"
    },
    {
      "first_name": "Avi",
      "last_name": "Avi",
      "bootcamp_name": "Full Stack",
      "applied": "2022-03-23T18:25:43.511Z",
      "bootcamp_location": "Zurich"
    },

  ]

  const applicationsTable = 
    data.map((item, index) =>
      <tr key={item.last_name}>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.bootcamp_name}</td>
        <td>{item.bootcamp_location}</td>
      </tr>
    )
  
  return (
    <div>
    <MainPage>
      <Header />
      {/* <Sidebar /> */}
      Dashboard
      <NarrowBar />
      <NarrowBar />
      <NarrowBar />
      <NarrowBar />
      <MiddleBar />
    </MainPage>

      <div className="latest-applications">

          <h1>Latest Applications</h1>

          <table id="applications-table">
            <tbody>
              {applicationsTable}
            </tbody>
          </table>
          
          <Graph />
      
      </div>

      <Footer />
    </div>
) 
}

export default Home;
