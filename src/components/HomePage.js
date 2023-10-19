import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white p-3" data-aos="slide-right">
              Mern Developer
            </h2>
            <div className="h-50">
              <lottie-player
                src="https://lottie.host/06ea00fe-15dd-4175-aadd-9df188aedac8/W8MwF9W4vg.json"
                background="##FFFFFF"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white p-3" data-aos="slide-left">
              Java Developer
            </h2>
            <div className="h-50">
              <lottie-player
                src="https://lottie.host/abe4274c-8adf-4b8b-93af-891ca1b7afae/GrrRvDlD0y.json"
                background="##fff"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
