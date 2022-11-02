import React from "react";
import NavBar from "./components/NavBar";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from './components/pages/Resume';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path='/resume' component={Resume}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
