import React from 'react';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <span>&#8594;</span>
    </button>
  );
};

export default SampleNextArrow;
