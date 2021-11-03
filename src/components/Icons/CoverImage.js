import React from 'react';
import { useSelector } from 'react-redux';

export default function CoverImage() {
  const theme = useSelector((state) => state.app.darkTheme);
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="10"
        stroke={theme ? '#fff' : '#000'}
        strokeWidth="2"
      />
    </svg>
  );
}
