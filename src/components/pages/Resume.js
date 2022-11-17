import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import resume from "../../assets/resume.png";
export default function Resume() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2 id="h2">Resume</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="image"
                id="resume"
                src={resume}
                alt="resume"
              ></img>
              <p>
                <a
                  href="https://resume.tiiny.site/"
                  alt="open resume PDF"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button" type="submit" value="Submit">
                    Resume
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
