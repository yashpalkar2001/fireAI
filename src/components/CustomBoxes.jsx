import React from "react";

const CustomBoxes = ({
  iconName,
  name,
  amount,
  iconClass,
  percentage,
  percentageClass,
  boxClass,
}) => {
  return (
    <div className={`p-2 bg-white rounded-md ${boxClass}`}>
      <div className="flex p-1">
        <i className={`pi ${iconName} ${iconClass}`}></i>
        <p className="px-3 text-xs font-medium">{name}</p>
      </div>
      <div className="flex justify-between items-center p-1">
        <h4 className="text-sm font-medium ">{amount}</h4>
        <span className={`p-1 text-xs ${percentageClass} rounded-md`}>
          {percentage}
        </span>
      </div>
    </div>
  );
};

export default CustomBoxes;
