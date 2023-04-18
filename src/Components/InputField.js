import React from 'react';

const InputField = ({ placeholder, inputName }) => {
   return (
      <form className="font-bold flex flex-col">
         <label className="uppercase text-xs" htmlFor={`input-${inputName}`}>
            {inputName}
         </label>
         <input
            className="w-[35px]"
            type="text"
            placeholder={placeholder}
            id={`input-${inputName}`}
         />
         <span>This field is required</span>
      </form>
   );
};

export default InputField;
