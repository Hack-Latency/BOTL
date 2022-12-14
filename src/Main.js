import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <div className="box">
        <Link to="/sponsor/login" style={{ textDecoration: "none" }}>
          <button type="button" className="btn">
            Sponsor Login
          </button>
        </Link>
        <Link to="/event/login" style={{ textDecoration: "none" }}>
          <button type="button" className="btn">
            Event Manager Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
