import { FunctionComponent, SVGAttributes } from 'react';

const Modules: FunctionComponent<SVGAttributes<SVGElement>> = ({ fill, ...props }) => {
  return (
    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.5 0C4.25824 0 0 4.191 0 9.35C0 14.509 4.25824 18.7 9.5 18.7H10.0588V22C15.4906 19.426 19 14.3 19 9.35C19 4.191 14.7418 0 9.5 0ZM10.6176 15.95H8.38235V13.75H10.6176V15.95ZM10.6176 12.1H8.38235C8.38235 8.525 11.7353 8.8 11.7353 6.6C11.7353 5.39 10.7294 4.4 9.5 4.4C8.27059 4.4 7.26471 5.39 7.26471 6.6H5.02941C5.02941 4.169 7.03 2.2 9.5 2.2C11.97 2.2 13.9706 4.169 13.9706 6.6C13.9706 9.35 10.6176 9.625 10.6176 12.1Z"
        fill={fill ?? '#FAF8F6'}
      />
    </svg>
  );
};

export default Modules;
