import React from "react";
import DATA from '../data';

const Service = () => {

  const card = (props) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <img src={props.img} className="card-img-top" alt={props.id} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5 py-4">
            <h1>Services</h1>
            <hr />
          </div>
        </div>
        <div className="row">
        {
             this.props.DATA.map(card)
        }
        </div>
      </div>
    </>
  );
};

export default Service;
