import React from 'react';

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      <span>&#8592;</span>
    </button>
  );
};

export default SamplePrevArrow;
