import React, { useState } from "react";

export const Form = ({ getData }) => {
  const [routeNum, setRouteNum] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    getData(routeNum);

    //reset the state
    setRouteNum('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group d-flex flex-column">
        <label htmlFor="stopNum" style={{ fontSize: 1.5 + "em" }}>
          Route Number
        </label>
        <div className="d-flex">
          <input
            type="number"
            className="form-control me-1"
            value={routeNum}
            onChange={(e) => setRouteNum(e.target.value)}
          />
          <button type="submit" className="btn btn-info btn-lg">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};
