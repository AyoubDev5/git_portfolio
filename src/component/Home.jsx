import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div>
      <section className="container my-5 py-4">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h1 className="display-5 mb-4">
              I'm Web Developer
              <br />
              <span>Ayoub</span>
              <span>Taqi</span>
            </h1>
            <p className="lead mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              minus voluptatum et ipsam, autem itaque recusandae magnam!
              Perspiciatis, unde? Saepe sequi, blanditiis explicabo eaque nulla
              temporibus placeat corporis architecto magnam.
            </p>
            <NavLink className="btn btn-outline-primary me-4" to="/contact" role="button">
                Get Started
            </NavLink>
            <NavLink className="btn btn-primary" to="/about" role="button">
                More About Me
            </NavLink>
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
              <img src="../../assets/images/bg1.png" alt="ayoub taqi" height={300} width={300}/>
          </div>
        </div>
      </section>
      <About/>
    </div>
  );
};

export default Home;
