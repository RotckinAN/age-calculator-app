import React from 'react';
import InputField from './InputField';
import { useDispatch, useSelector } from 'react-redux';
import {
   getAge,
   getDaysInputValue,
   getMonthsInputValue,
   getYearsInputValue,
} from '../store/inputValuesSlice';

const InputsDashboard = () => {
   const date = new Date();
   const {
      daysInputValue,
      monthsInputValue,
      yearsInputValue,
      daysInputValid,
      monthsInputValid,
      yearsInputValid,
   } = useSelector((state) => state.inputValues);

   const dispatch = useDispatch();

   const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch(getAge());
   };

   return (
      <form
         className="flex desktop:gap-8 border-b-2 border-b-off-white desktop:pb-[50px] mobile:pb-[46px] mb-[48px] mobile:gap-[15px] relative"
         noValidate
         onSubmit={(evt) => handleSubmit(evt)}
      >
         <InputField
            inputName="day"
            placeholder="dd"
            maxValue={31}
            value={daysInputValue}
            setValue={getDaysInputValue}
            inputValid={daysInputValid}
         />
         <InputField
            inputName="month"
            placeholder="mm"
            maxValue={12}
            value={monthsInputValue}
            setValue={getMonthsInputValue}
            inputValid={monthsInputValid}
         />
         <InputField
            inputName="year"
            placeholder="yyyy"
            maxValue={date.getFullYear()}
            value={yearsInputValue}
            setValue={getYearsInputValue}
            inputValid={yearsInputValid}
         />
         <button
            type="submit"
            className="bg-submitButton desktop:w-[95px] desktop:h-[95px] mobile:w-[66px] mobile:h-[66px] bg-purple rounded-full desktop:bg-[length:48px_48px] mobile:bg-[length:27px_27px] bg-no-repeat bg-center absolute desktop:right-0 mobile:right-[117px] desktop:top-[135px] mobile:top-[110px] hover:bg-off-black"
         />
      </form>
   );
};

export default InputsDashboard;
