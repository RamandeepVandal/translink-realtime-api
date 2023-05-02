import React, { useState } from "react";
import XMLParser from "react-xml-parser";
import { Header } from "../component/Header";
import { BusForm } from "../component/BusForm";
import { StopInfo } from "../component/StopInfo";

export const StopEstimatePage = () => {
  const [stopEstimate, setStopEstimate] = useState([{}]);
  const [showStopEstimate, setShowStopEstimate] = useState(false);

  const getData = async (stopNum) => {
    await fetch(
      `https://api.translink.ca/rttiapi/v1/stops/${stopNum}/estimates?apikey=${
        import.meta.env.VITE_API_KEY
      }&count=3&timeframe=120`
    )
      .then((res) => res.text())
      .then((data) => {
        let xml = new XMLParser().parseFromString(data);
        console.log(xml);
        setStopEstimate(xml);
        setShowStopEstimate(true);
      });
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card m-3 p-5" style={{ border: "none" }}>
          <BusForm getData={getData} />
          {showStopEstimate ? (
            <StopInfo stopEstimate={stopEstimate} />
          ) : (
            <p className="mt-2">No data to show.</p>
          )}
        </div>
      </div>
    </div>
  );
};
