import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Rating.css";

const Star = ({ selected, onSelect = (f) => f, size }) => (
  <FaStar
    size={size}
    className="star"
    color={selected ? "#FFCB45" : "#F2F2F2"}
    onClick={onSelect}
  />
);

const Rating = ({ number = 5, size = 16 }) => {
  const [selected, setSelected] = useState(-1);

  return [...Array(number)].map((n, i) => (
    <Star size={size} key={i} onSelect={() => setSelected(i + 1)} selected={i < selected} />
  ));
};

Rating.propTypes = {
  number: PropTypes.number,
};

export default Rating;
