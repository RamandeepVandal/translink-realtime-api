import React, { useState } from "react";
import XMLParser from "react-xml-parser";
import { Header } from "../component/Header";
import { Form } from "../component/Form";
import { Destination } from "../component/Destination";

export const Homepage = () => {
  const [busData, setBusData] = useState({});
  const [listBuses, setListBuses] = useState({});
  const [showDestination, setShowDestination] = useState(false);
  const [showBusActive, setShowBusActive] = useState(false);

  const getData = async (routeNum) => {
    // route data
    await fetch(
      `https://api.translink.ca/rttiapi/v1/routes/${routeNum}?apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.text())
      .then((data) => {
        let xml = new XMLParser().parseFromString(data);
        setBusData(xml);
        setShowDestination(true);
      });

    // bus data
    await fetch(
      `https://api.translink.ca/rttiapi/v1/buses?apikey=${
        import.meta.env.VITE_API_KEY
      }&routeNo=${routeNum}`
    )
      .then((res) => res.text())
      .then((data) => {
        let xml2 = new XMLParser().parseFromString(data);
        console.log(xml2);
        setShowBusActive(true);
        setListBuses(xml2);
      });
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-5 m-3" style={{ border: "none" }}>
          <Form getData={getData} />
          {showDestination ? (
            <Destination
              busData={busData}
              showBusActive={showBusActive}
              listBuses={listBuses}
            />
          ) : (
            <p className="mt-2">No data to show</p>
          )}
        </div>
      </div>
    </div>
  );
};
