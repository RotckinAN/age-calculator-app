import React from 'react';
import InputField from './InputField';

const InputsDashboard = () => {
   return (
      <div className="flex gap-2.5">
         <InputField inputName="day" placeholder="dd" />
         <InputField inputName="month" placeholder="mm" />
         <InputField inputName="year" placeholder="yyyy" />
      </div>
   );
};

export default InputsDashboard;
