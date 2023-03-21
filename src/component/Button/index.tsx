import React from 'react';

import type { ButtonType } from '@/@types';

const Button: React.FC<ButtonType> = ({ onClick, btnText, btnStyle }) => {
  return (
    <>
      <button
        className={`item-center inline-block items-center rounded-md bg-green-500 p-2 text-xs font-medium text-white transition
                   hover:scale-105 hover:shadow-md focus:outline-none active:bg-green-700 md:text-sm ${btnStyle}`}
        onClick={onClick}
      >
        {btnText}
      </button>
    </>
  );
};

export default Button;
