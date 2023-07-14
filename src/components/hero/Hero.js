import React from "react";
import "./HeroStyles.css";
import { AiOutlineSearch } from "react-icons/ai";

import Video from "../../assets/videoTravel.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>최고급 여행이 기다립니다.</h1>
        <h2>상위 1% 여행지를 만나 보세요!</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="떠날 여행지를 찾아보세요!" />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
