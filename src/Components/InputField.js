import React from 'react';
import { useDispatch } from 'react-redux';

const InputField = ({
   placeholder,
   inputName,
   maxValue,
   value,
   setValue,
   inputValid,
}) => {
   const dispatch = useDispatch();
   const inputTitleClassName = `uppercase desktop:text-base desktop:tracking-[0.12em] mobile:text-[13px] mobile:tracking-[0.16em] ${
      inputValid === null
         ? 'text-smokey-grey'
         : inputValid
         ? 'text-smokey-grey'
         : 'text-light-red'
   }`;
   const inputClassName = `desktop:w-[160px] desktop:h-[75px] mobile:w-[90px] mobile:h-[55px] border-solid border rounded-lg desktop:text-[32px] mobile:text-xl desktop:px-6 mobile:px-4 uppercase focus:outline-none focus:border-purple ${
      inputValid === null
         ? 'border-light-grey'
         : inputValid
         ? 'border-light-grey'
         : 'border-light-red'
   }`;
   const errorMessageClassName = `font-sans italic font-normal desktop:text-sm mobile:text-[8px] text-light-red ${
      inputValid === null ? 'invisible' : inputValid ? 'invisible' : 'visible'
   }`;

   const handleChange = (evt) => {
      const { target } = evt;

      if (+target.value > +target.max) {
         dispatch(setValue(value));
      } else if (+target.value < +target.min && target.value !== '') {
         dispatch(setValue(target.min));
      } else {
         dispatch(setValue(target.value));
      }
   };

   return (
      <div className="font-bold flex flex-col desktop:gap-[6px] mobile:gap-[4px]">
         <label className={inputTitleClassName} htmlFor={`input-${inputName}`}>
            {inputName}
         </label>
         <input
            className={inputClassName}
            type="number"
            placeholder={placeholder}
            id={`input-${inputName}`}
            min={1}
            max={maxValue}
            value={value}
            onChange={(evt) => handleChange(evt)}
            required
         />
         <span className={errorMessageClassName}>This field is required</span>
      </div>
   );
};

export default InputField;
