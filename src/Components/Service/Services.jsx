import React from "react";
import img1 from "../../assets/IMG/call.png";
import img2 from "../../assets/IMG/cart.png";
import img3 from "../../assets/IMG/home.png";
import img4 from "../../assets/IMG/box.png";

let Cart = [
  {
    src: img1,
    title: "Call Service",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    src: img2,
    title: "Mall Service",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    src: img3,
    title: "Home Service",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    src: img4,
    title: "Home Service",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="text-center">
            <h1 className="fw-bold text-bg-warning">Services</h1>
          </div>
          {Cart.map((item, index) => {
            return (
              <div className="col-md-3 col-sm-12 col-12 rounded-4 shadow-sm" key={index} >
                <div className="card p-2">
                  <img src={item.src} className="card-img-top" style={{height : "150px", width : "180px", margin : "auto"}} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
