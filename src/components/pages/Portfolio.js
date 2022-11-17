import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Project from "../Project";
import notes from "../../assets/notes.png";
import dnd from "../../assets/dnd.png";
import code from "../../assets/example.png";
import password from "../../assets/passgen.png";
import weather from "../../assets/weather.png";
import work from "../../assets/work.png";
export default function Portfolio() {
  return (
    <div>
      <Header />
      <div className="body">
        <h2 id="h2">Portfolio</h2>
        <div className="container" style={{ paddingTop: "10px" }}>
          <div className="row">
            <Project
              key="1"
              img={notes}
              imgAlt="Notetaker app"
              project="https://new-note.herokuapp.com/"
              projectAlt="Notetaker app"
              projectTitle="New Note"
              gitHubRepo="https://github.com/kyky19/notetaker"
              gitHubAlt="New Note github repo"
              description="Save notes for later use. Made with express."
            />
            <Project
              key="2"
              img={dnd}
              imgAlt="Picture of DnD homepage"
              project="https://serene-journey-88116.herokuapp.com/"
              projectAlt="App to create a custom DnD character"
              projectTitle="DnD Creator"
              gitHubRepo="https://github.com/aalissy/DnD-Project"
              gitHubAlt="Github for DnD creator"
              description="An app that allows users to create an account so that they can create custom DnD characters and save them for future use."
            />
            <Project
              key="3"
              img={code}
              imgAlt="Picture of code quiz"
              project="https://kyky19.github.io/codequiz/"
              projectAlt="Link to code quiz"
              projectTitle="Code Quiz"
              gitHubRepo="https://github.com/kyky19/codequiz"
              gitHubAlt="Link to code quiz github"
              description="A timed codequiz challenge. After completion, submit initials to save your highscore."
            />
          </div>
          <div className="row">
            <Project
              key="4"
              img={password}
              imgAlt="Picture of password generator"
              project="https://kyky19.github.io/passwordgen/"
              projectAlt="Password generator homepage"
              projectTitle="Password Generator"
              gitHubRepo="https://github.com/kyky19/passwordgen"
              gitHubAlt="Github of Password Generator"
              description="An app that generates a random password based on criteria given by user."
            />
            <Project
              key="5"
              img={weather}
              imgAlt="Picture of weather app"
              project="https://kyky19.github.io/weather/"
              projectAlt="Weather App homepage"
              projectTitle="Weather App"
              gitHubRepo="https://github.com/kyky19/weather"
              gitHubAlt="Github of Weather App"
              description="An app that allows users to input their city and receive a 5-day forecast using a weather API."
            />
            <Project
              key="6"
              img={work}
              imgAlt="picture of day scheduler"
              project="https://kyky19.github.io/daycalander/"
              projectAlt="Work Day Scheduler homepage"
              projectTitle="Work Day Scheduler"
              gitHubRepo="https://github.com/kyky19/daycalander"
              gitHubAlt="Github of Work Day Scheduler"
              description="An app that allows users to create a schedule for their work day. The schedule updates with live time, showing hours that have already passed as red as well as showing upcomming hours in green."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
