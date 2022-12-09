import React from 'react';

const CustomCheckbox = ({ children }) => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="A3-yes"
          name="A3-confirmation"
          value="yes"
          className="opacity-1 h-[15px] w-[15px]"
        />
        <div className="bg-white border-2 rounded-md border-blue-400 w-[5px] h-2 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500">
          <svg
            className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
        <label for="A3-yes" className="select-none">
          {children}
        </label>
      </div>
    </div>
  );
};

export default CustomCheckbox;
