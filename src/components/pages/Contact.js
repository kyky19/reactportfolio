import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="body">
        <h2 id="h2">Contact me!</h2>
        <p>
          Feel free to <a href="mailto:kyky19@me.com">email</a> with any
          inquisitions or inquire here:
        </p>
        <p>
          <form className="inputform">
            <label className="inputform">
              Name:
              <input className="inputform" type="text" name="name" />
            </label>
            <label className="inputform">
              Email:
              <input className="inputform" type="email" name="email" />
            </label>
            <label className="inputform">
              Message:
              <input className="inputform" type="text" name="message" />
            </label>
            <input
              className="button"
              style={{ marginTop: "20px" }}
              type="submit"
              value="Submit"
            />
          </form>
        </p>
      </div>
      <Footer />
    </div>
  );
}
