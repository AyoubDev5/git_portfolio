import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4">
            <h1>About me</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <img
              src="../../assets/images/bg1.png"
              alt="ayoub taqi"
              height={300}
              width={300}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5">Ayoub Taqi</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              ad odio nihil. Ab sunt ipsum reiciendis perspiciatis ex suscipit
              nihil itaque beatae dolorum accusantium quo inventore culpa,
              sapiente, dolore excepturi. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ullam quisquam eum, qui commodi
              vero tempore minus delectus maiores aliquid nesciunt dicta esse?
              Laborum quod sequi mollitia asperiores omnis culpa iste.
            </p>
            <div className="progress my-4">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{width:"70%"}}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >HTML5/CSS3/JavaScript</div>
              <span className="pro">70%</span>
            </div>
            <div className="progress my-4">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{width:"50%"}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >React.js/Bootstrap</div>
              <span className="pro">50%</span>
            </div>
            <div className="progress my-4">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{width:"75%"}}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >PHP/Java/C#/C++</div>
              <span className="pro">75%</span>
            </div>
            <div className="progress my-4">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{width:"80%"}}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >Oracle/MySql/PostgreSql/Language Sql</div>
              <span className="pro">80%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
