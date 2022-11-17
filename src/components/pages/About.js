import React from "react";
import Picture from "../../assets/headshot.png";
import Header from "../Header";
import Footer from "../Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="body">
        <h2 id="h2">About Me</h2>
        <img
          className="headshot"
          src={Picture}
          alt="headshot"
          width="150"
        ></img>
        <div className="aboutme">
          <p>My name is Kyle Lane and I live in Nashville, Tennessee!</p>
          <p>
            I am a soon to be college graduate from Southern New Hampshire
            University. I did half of my degree at the University of Tennessee
            Chattanooga before pursuing a career in the culinary arts.
          </p>
          <p>
            After 6 years working in kitchens, I decided to make a change in
            careers in order to see my family more. Now, I am finishing my
            degree as well as completing a full-stack web development bootcamp
            from Vanderbilt University.
          </p>
          <p>
            I am excited to begin my web development career and excited to show
            you my progress!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
