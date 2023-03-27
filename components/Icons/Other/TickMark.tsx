import React, { FunctionComponent, SVGAttributes } from 'react';

const TickMark: FunctionComponent<SVGAttributes<SVGElement>> = ({ ...props }) => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="6.5" cy="6.5" r="6.5" />
      <path
        d="M3.90002 6.5L6.01251 8.61248L9.76803 4.85696"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TickMark;
