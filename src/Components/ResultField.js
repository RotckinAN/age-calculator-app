import React from 'react';

const ResultField = ({ numberResult, paragraph }) => {
   return (
      <p>
         <span className="text-purple">{numberResult}</span>
         &nbsp; {numberResult > 1 ? `${paragraph}s` : paragraph}
      </p>
   );
};

export default ResultField;
