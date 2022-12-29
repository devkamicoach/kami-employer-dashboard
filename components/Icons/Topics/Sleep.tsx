import { SVGAttributes, FunctionComponent } from 'react';

const Sleep: FunctionComponent<SVGAttributes<SVGElement>> = ({ fill, ...props }) => {
  return (
    <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27 26.7027C21.2664 33.2715 11.4694 33.8234 5.08157 27.842C-1.23741 21.914 -1.73673 11.7848 3.99685 5.21592C6.62925 2.21986 10.2558 0.35781 14.1554 0C8.45629 6.58666 8.99005 16.7159 15.4123 22.626C18.2189 25.2607 21.9207 26.7027 25.7431 26.7027H27Z"
        fill={fill ?? '#284F73'}
      />
    </svg>
  );
};

export default Sleep;
