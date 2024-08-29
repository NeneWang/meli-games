import React from 'react';

const CircleLabel = ({ label, color }) => {

  return (
    
      <span className="labelStyles">
        <span className="labelInside">{label}</span>
      </span>
    
  );
};

export default CircleLabel;