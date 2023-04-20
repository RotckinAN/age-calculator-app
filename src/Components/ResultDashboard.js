import React from 'react';
import ResultField from './ResultField';
import { useSelector } from 'react-redux';

const ResultDashboard = () => {
   const {
      totalDay: dayResult,
      totalMonths: monthResult,
      totalYears: yearsResult,
   } = useSelector((state) => state.inputValues);

   return (
      <div className="desktop:text-[6.75rem] mobile:text-[3.75rem] italic font-extrabold desktop:tracking-tighter mobile:tracking-[-0.06em] desktop:leading-[7.15rem] mobile:leading-[4rem] mobile:pt-[15px]">
         <ResultField numberResult={yearsResult} paragraph="year" />
         <ResultField numberResult={monthResult} paragraph="month" />
         <ResultField numberResult={dayResult} paragraph="day" />
      </div>
   );
};

export default ResultDashboard;
