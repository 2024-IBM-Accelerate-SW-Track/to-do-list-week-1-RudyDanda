import React, { Component } from 'react';
import Danda_Rudy from "../assets/Danda_Rudy.jpg";
import "./About.css";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          src={Danda_Rudy}
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Rudy Danda</div>
          <div className="brief_description">
              <p>Interests: Coding, Netflix Originals, Trying New Restaurants</p>
              <p>Fun Fact: I am from Cleveland!</p>
              <p>Hobbies: Golfing with friends and going to the gym</p>
          </div>
          </div>
          </div>
          </div> 
      </div>
    )
  }
}

