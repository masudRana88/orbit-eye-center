import { NotFound } from "http-errors";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PageNotFound from "./components/page/404/PageNotFound";
import AboutUs from "./components/page/AboutUs/AboutUs";
import Contact from "./components/page/Contact/Contact";
import Home from "./components/page/Home/Home/Home";
import Login from "./components/page/LogIn/Login/Login";
import Singup from "./components/page/LogIn/Singup/Singup";
import OurDoctors from "./components/page/OurDoctors/OurDoctors";
import ServicesPage from "./components/page/ServicesPage/ServicesPage";
import Footer from "./components/page/Shared/Footer/Footer";
import NavBar from "./components/page/Shared/NavBar/NavBar";
import SingleService from "./components/page/SingleService/SingleService";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import AuthProvider from "./ContexApi/AuthProvider/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
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
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/Singup">
         <Singup></Singup>
        </Route>
        <Route exact path="/services">
          <ServicesPage></ServicesPage>
        </Route>
        <PrivateRouter exact path="/service/:serviceId">
            <SingleService></SingleService>
          </PrivateRouter>
        <Route path="*">
          <PageNotFound></PageNotFound>    
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
