import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import CustomBtn from "../components/CustomBtn";
import { Dropdown } from "primereact/dropdown";
import CustomBoxes from "../components/CustomBoxes";
import LineChart from "../components/LineChart";
import ChartbBoxCard from "../components/ChartbBoxCard";
import { orders } from "../fackData/OrderHistory.json";
import { useSelector, useDispatch } from "react-redux";
import { setDark } from "../redux/ordersSlice";
import "../index.css";

import DoughnutChart from "../components/DoughnutChart";

const Orders = () => {
  const selectedState = useSelector((state) => state.orders.dark);
  const dispatch = useDispatch();

  return (
    <>
      <MainLayout>
        <div
          className={`w-full ${selectedState ? "!bg-black !text-white" : ""}`}
        >
          {/* header  */}
          <div
            className={`flex justify-between items-center bg-white p-3 ${
              selectedState ? "!bg-black !text-white" : ""
            }`}
          >
            <h1 className="text-xl font-bold w-full ">Welcome back, Alex</h1>

            <div className="w-full ">
              <CustomBtn
                name={"Request Payout"}
                iconClass={"rounded-full p-1 bg-white text-black"}
                iconName={"pi-dollar"}
              />

              <CustomBtn name={"Share Materices"} iconName={"pi-share-alt"} />
              <CustomBtn name={""} iconName={"pi-key"} />

              <CustomBtn
                name={`${selectedState ? "Light" : "Dark"} Mode`}
                iconName={`${selectedState && "pi-sun"}`}
                onclick={() => dispatch(setDark(!selectedState))}
              />
              {/* </div> */}
            </div>
          </div>
          <div className="px-5 ">
            {/* chart box  */}
            <div className={`"mt-4 flex w-full `}>
              <div
                className={`w-[40%] bg-white p-3 rounded-md ${
                  selectedState ? "!bg-black !text-white !border " : ""
                }`}
              >
                <h1>Total Balncing</h1>
                <LineChart />
              </div>
              <div className="w-full mx-4">
                <div className="flex justify-between gap-4">
                  <ChartbBoxCard
                    headingName="Profit Target"
                    iconName="pi-sort-amount-up"
                    iconClass="bg-blue-400"
                    chartbBoxClass={`${
                      selectedState ? "!bg-black !text-white !border " : ""
                    }`}
                  />
                  <ChartbBoxCard
                    headingName="Daily Loss Limit"
                    iconName={"pi-sort-amount-down"}
                    iconClass="bg-orange-400"
                    chartbBoxClass={`${
                      selectedState ? "!bg-black !text-white !border " : ""
                    }`}
                  />
                </div>
                <div
                  className={`bg-white p-3 mt-4 rounded-md ${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                >
                  <div className="flex justify-between font-medium text-sm">
                    <h3>Most Traded</h3>
                    <i className="pi pi-ellipsis-v"></i>
                  </div>
                  <div className="flex ">
                    <div className="text-xs grid grid-cols-2 grid-rows-3 w-full">
                      <p className="p-1">
                        <span className="w-2 bg-red-700 text-red-500">y</span>{" "}
                        NZDUSD
                      </p>
                      <p className="p-1">
                        <span className="w-2 bg-green-700 text-green-500">
                          y
                        </span>{" "}
                        GBPUSD
                      </p>
                      <p className="p-1">
                        <span className="w-2 bg-pink-700 text-pink-500">y</span>{" "}
                        AUDCHF
                      </p>
                      <p className="p-1">
                        <span className="w-2 bg-blue-700 text-blue-500">y</span>{" "}
                        USDCHF
                      </p>
                      <p className="p-1">
                        <span className="w-2 bg-violet-700 text-violet-500">
                          y
                        </span>{" "}
                        XAUUSD
                      </p>
                      <p className="p-1">
                        <span className="w-2 bg-slate-700 text-slate-500">
                          y
                        </span>{" "}
                        AUDNZD
                      </p>
                    </div>
                    {/* <div className="w-full ">
                      <DoughnutChart />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* middle box  */}
            <div className="flex w-full gap-5 my-4">
              <div className="w-full grid grid-cols-3 grid-rows-2 gap-5">
                <CustomBoxes
                  iconName={"pi-chart-bar"}
                  iconClass={"text-blue-500"}
                  name={"Avarage Win"}
                  amount={"$647.00"}
                  percentage={"^ 7%"}
                  percentageClass={"text-purple-500 bg-purple-50"}
                  boxClass={`${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                />
                <CustomBoxes
                  iconName={"pi-chart-bar"}
                  iconClass={"text-red-500"}
                  name={"Avarage Loss"}
                  amount={"0.00"}
                  percentage={"^ 0%"}
                  percentageClass={"text-red-500 bg-red-50"}
                  boxClass={`${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                />
                <CustomBoxes
                  iconName={"pi-chart-bar"}
                  iconClass={"text-sky-500"}
                  name={"Profit Factor"}
                  amount={"6.2"}
                  boxClass={`${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                />
                <CustomBoxes
                  iconName={"pi-angle-double-down"}
                  iconClass={"text-sky-500"}
                  name={"Best Trade"}
                  amount={"$8,647.99"}
                  boxClass={`${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                />
                <CustomBoxes
                  iconName={"pi-sparkles"}
                  iconClass={"text-green-500"}
                  name={"Avarage Win"}
                  amount={"$647.00"}
                  boxClass={`${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                />
                <CustomBoxes
                  iconName={"pi-sparkles"}
                  iconClass={"text-red-500"}
                  name={"Win Ratio"}
                  amount={"-$4,647.00"}
                  boxClass={`${
                    selectedState ? "!bg-black !text-white !border " : ""
                  }`}
                />
              </div>
              <div
                className={`bg-white p-2 rounded-md w-full ${
                  selectedState ? "!bg-black !text-white !border " : ""
                }`}
              >
                <div className="flex justify-between items-center rounded-md p-2">
                  <h4>
                    <i className="pi pi-info-circle text-[#e8d9d9] pr-3"></i>
                    Notifications
                  </h4>
                  <Dropdown
                    value={"Last 30 day"}
                    //   onChange={(e) => setSelectedCity(e.value)}
                    options={[]}
                    optionLabel="name"
                    placeholder="Last 30 day"
                    className="w-fit border border-gray-300 rounded-md"
                  />
                </div>
                <table className="text-xs w-full">
                  <thead>
                    <tr
                      className={`w-full text-slate-400 bg-[#f7f7f7] p-1 ${
                        selectedState ? "!bg-black !text-white !border " : ""
                      }`}
                    >
                      <th className="p-1">Time</th>
                      <th>Type</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="w-full text-center p-1 border-b border-slate-300 mt-1">
                      <td className="p-1">12 DayAgo</td>
                      <td className="text-slate-400  ">
                        <span className="bg-[#f7f7f7] rounded-md ">
                          {" "}
                          RulesSoftBreache
                        </span>
                      </td>
                      <td>Losed trade not placed with a stop-loss</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* last box of order history  */}
            <div
              className={`text-sm bg-white rounded-md p-2 ${
                selectedState ? "!bg-black !text-white !border " : ""
              }`}
            >
              <div className=" flex items-center justify-between p-2">
                <h5 className="text-base"> Order History</h5>
                <div>
                  <CustomBtn name={"Open Trades"} />
                  <CustomBtn name={"Close Trades"} />
                  <Dropdown
                    value={"Last 30 day"}
                    //   onChange={(e) => setSelectedCity(e.value)}
                    options={[]}
                    optionLabel="name"
                    placeholder="Last 30 day"
                    className="w-fit border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <table className="text-xs w-full ">
                <thead>
                  <tr
                    className={`w-full bg-[#f7f7f7] rounded-full p-2 ${
                      selectedState ? "!bg-black !text-white !border " : ""
                    }`}
                  >
                    <th className="p-2">Symbol</th>
                    <th>Type</th>
                    <th>Open Date</th>
                    <th>Open Price</th>
                    <th>SL</th>
                    <th>TP</th>
                    <th>Close Date</th>
                    <th>Close Price</th>
                    <th>Lots</th>
                    <th>Profit</th>
                    <th>Duration</th>
                    <th>Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) => (
                    <tr
                      className="w-full text-center p-2 border-b border-slate-200"
                      key={index}
                    >
                      <td className="p-2">{item.symbol}</td>
                      <td
                        className={`${
                          item.Type == "Sell" && "text-red-400 bg-red-50"
                        } ${
                          item.Type == "Buy" && "text-purple-400 bg-purple-50"
                        }`}
                      >
                        {item.Type}
                      </td>
                      <td>{item.OpenDate}</td>
                      <td>{item.OpenPrice}</td>
                      <td>{item.SL}</td>
                      <td>{item.TP}</td>
                      <td>{item.CloseDate}</td>
                      <td>{item.ClosePrice}</td>
                      <td>{item.Lots}</td>
                      <td
                        className={`${
                          item.profit.charAt(0) == "+"
                            ? "text-purple-400"
                            : "text-red-400"
                        } `}
                      >
                        {item.profit}
                      </td>
                      <td>{item.duration}</td>
                      <td
                        className={`${
                          item.gain.charAt(0) == "+"
                            ? "text-purple-400"
                            : "text-red-400"
                        } `}
                      >
                        {" "}
                        {item.gain}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Orders;
