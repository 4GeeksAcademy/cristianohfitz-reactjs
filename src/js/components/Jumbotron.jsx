import React from 'react';

function Jumbotron() {
  return (
    <div className="container my-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Hi Slavina or Ernesto!</h1>
          <p className="fs-4">
          "Glad you’re here! We promise not to ask for your email… unless you're into that kind of thing."
          </p>
          <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
        </div>
      </div>
    </div>
  );
}
export default Jumbotron;