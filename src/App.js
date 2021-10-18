import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AboutUs from "./components/page/AboutUs/AboutUs";
import Contact from "./components/page/Contact/Contact";
import Home from "./components/page/Home/Home/Home";
import OurDoctors from "./components/page/OurDoctors/OurDoctors";
import ServicesDetails from "./components/page/ServicesDetailes/ServicesDetails";
import ServicesPage from "./components/page/ServicesPage/ServicesPage";
import Footer from "./components/page/Shared/Footer/Footer";
import NavBar from "./components/page/Shared/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/services">
          <ServicesPage></ServicesPage>
        </Route>
        <Route exact path="/our-doctors">
          <OurDoctors></OurDoctors>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Router path="/services/:servicesId">
          <ServicesDetails></ServicesDetails>
        </Router>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
