// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function getShortDescription(strCategoryDescription, wordCount) {
  const words = strCategoryDescription.split(" ");
  const shortDescription = words.slice(0, wordCount).join(" ");
  return shortDescription;
}

const Menu_card = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props.item;
  const shortDescription = getShortDescription(strCategoryDescription, 20);

  return (

          <div className="card m-2" style={{ width: "18rem", height: "25rem" }}>
            <img src={strCategoryThumb} alt={strCategory} />
            <div className="card-body">
              <h5 className="card-title">{strCategory}</h5>
              <p className="card-text">{shortDescription}</p>
              <Link to="#" className="btn">
                Add Cart
              </Link>
            </div>
          </div>
      
  );
};

export default Menu_card;
