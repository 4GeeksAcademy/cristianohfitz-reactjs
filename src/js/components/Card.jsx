import React from 'react';

function Card({ title, text }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src="https://makstring.com/images/blog/1.jpg" className="card-img-top" alt="Placeholder" />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
