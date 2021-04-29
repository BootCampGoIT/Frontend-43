import React from "react";
import { CarsListItemContainer, ColorItem } from "./CarsListItemStyled";
import PropTypes from "prop-types";

const CarsListItem = ({ model, photo, colors, isUsed, price, id }) => {
  return (
    <CarsListItemContainer>
      <div className='wrapper'>
        <h2 className='carsListTitle'>
          {model.length > 20 ? model.slice(0, 20) + "..." : model}
        </h2>
        <img src={photo} alt={model} className='carsListImage' />
        <div>
          <p>Colors:</p>
          <ul className='carsListColors'>
            {colors.map((color) => (
              <ColorItem color={color} marginRight={"10px"} key={color} />
            ))}
          </ul>
        </div>
        <p className='used'>Used / New: {isUsed ? "used" : "new"}</p>
        <p className='price'>Price: {price || "No info"} </p>
        <button className='addToFavorites'>Add to favorites</button>
      </div>
    </CarsListItemContainer>
  );
};

export default CarsListItem;

CarsListItem.propTypes = {
  model: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  isUsed: PropTypes.bool.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string.isRequired,
};

CarsListItem.defaultProps = {
  photo:
    "https://c.files.bbci.co.uk/1433C/production/_117684728_zeroconceptcar.jpg",
};
