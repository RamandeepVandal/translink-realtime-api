import React, { useState } from "react";

export const BusForm = ({ getData }) => {
  const [stopNum, setStopNum] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    getData(stopNum);

    //reset the state
    setStopNum('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group d-flex flex-column">
        <label htmlFor="stopNum" style={{ fontSize: 1.5 + "em" }}>
          Stop Number
        </label>
        <div className="d-flex">
          <input
            type="number"
            className="form-control me-1"
            value={stopNum}
            onChange={(e) => setStopNum(e.target.value)}
          />
          <button type="submit" className="btn btn-info btn-lg">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
