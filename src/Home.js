import React from "react";
import emergencyButton from "./logos/emergencyButton.png";
import locationIcon from "./logos/location.png";
import { Link } from "react-router-dom";

import "./App.css";

function Home() {
  return (
    <>
      <div className="card-container">
        <div className="emergency-card">
          <div className="emergency-heading">
            <p>Having an Emergency?</p>
          </div>
          <div className="emergency-sub">
            <p>
              Press the button below
              <br />
              Help will arrive soon!
            </p>
          </div>
          <div className="emergency-icon">
            <button type="button">
              <img src={emergencyButton} alt="Button Image" />
            </button>
          </div>
        </div>
        <div className="notice-card">
          <div className="notice-heading">
            <h2>Notices:</h2>
          </div>
          <hr className="content-hr"></hr>
          <div className="notice-content">
            <p>NO Emergency situations near you</p>
          </div>
        </div>
        <div className="articles-card">Random Articles Pull up Here</div>
      </div>
      <div className="bottom-part">
        <div className="location-icon">
          <img src={locationIcon} alt="Location icon" />
        </div>
        <div className="locate-text">
          <Link
            to="https://google.com/maps/search/hospital"
            target="_blank"
            rel="noopener noreferrer"
          >
            Locate your nearest Hospital
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
