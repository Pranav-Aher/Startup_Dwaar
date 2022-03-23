import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container bg-secondary">
      <div className="home-discription bg-primary">
        <div>
          <span className="home-title-main fg-white">Startup</span>
          <span className="home-title-main fg-font-dark">Dwaar</span>
        </div>
        <div className="text-xl fg-white">
          HAVE NO FEAR, WE GOT EVERYTHING HERE!
        </div>
      </div>
      <div className="home-discription bg-primary">
        <ul className="fg-white bold">
          <li>Connect with Investors</li>
          <li>Meet Industry Mentors</li>
          <li>Find Professional Workers</li>
          <li>Find Best Incubation Centers</li>
          <li>Invest in Best Startups</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
