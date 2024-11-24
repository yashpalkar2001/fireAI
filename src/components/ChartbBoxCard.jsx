import React from "react";

const ChartbBoxCard = ({
  headingName,
  iconClass,
  iconName,
  chartbBoxClass,
}) => {
  return (
    <>
      <div className={`w-full p-3 bg-white rounded-md ${chartbBoxClass}`}>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-sm">
            <i
              className={`pi ${iconName} p-1 rounded-full ${iconClass} text-white`}
            ></i>
            <span className="px-2 text-xs">
              <p>{headingName}</p>
              <p>of $12,00.80</p>
            </span>
          </div>
          <i className="pi pi-ellipsis-v"></i>
        </div>
        <h1 className="text-lg py-3 font-medium">$8,908.99</h1>
        <p className="pt-2 text-xs border-t border-slate-200">
          Equity Pass Level <span>$124,900.00</span>
        </p>
      </div>
    </>
  );
};

export default ChartbBoxCard;
