import clsx from 'clsx';
import React, { FunctionComponent, JSXElementConstructor, ReactElement } from 'react';

type UploaderPopUpTypes = {
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
  title: string;
  message: string;
  backgroundColor: string;
};

const UploaderPopUp: FunctionComponent<UploaderPopUpTypes> = ({ icon, title, message, backgroundColor }) => {
  return (
    <div className={clsx(`flex ${backgroundColor}  w-[550px] rounded-md`)}>
      <div className="self-center mx-3">{icon}</div>
      <div>
        <p className="text-[16px] font-bold color-[#2D3748] mt-3">{title}</p>
        <p className="mb-3 mt-2">{message}</p>
      </div>
    </div>
  );
};

export default UploaderPopUp;
