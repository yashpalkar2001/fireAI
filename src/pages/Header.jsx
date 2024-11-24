import him from "../assets/him.jpg";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const selectedState = useSelector((state) => state.orders.dark);
  const headerMenu = [
    {
      heading: "Menu",
      submenu: [
        {
          title: "Accounts Overview",
          icon: <i className="pi pi-objects-column"></i>,
        },
        {
          title: "Payouts",
          icon: <i className="pi pi-chart-pie"></i>,
        },
        {
          title: "Certificates",
          icon: <i className="pi pi-trophy"></i>,
        },
        {
          title: "Leaderboard",
          icon: <i className="pi pi-chart-bar"></i>,
        },
        {
          title: "Order List",
          icon: <i className="pi pi-clipboard"></i>,
        },
      ],
    },
    {
      heading: "Apps",
      submenu: [
        {
          title: "News Feeds",
          icon: <i className="pi pi-address-book"></i>,
        },
        {
          title: "Economics Calender",
          icon: <i className="pi pi-calendar"></i>,
        },
        {
          title: "WebTrader Plateform",
          icon: <i className="pi pi-desktop"></i>,
        },
        {
          title: "Margin Calculator",
          icon: <i className="pi pi-calculator "></i>,         
        },
        {
          title: "Profit Calculator",
          icon: <i className="pi pi-calculator "></i>,
        },
      ],
    },
  ];

  return (
    <>
      <header>
        <div className="flex items-center justify-between w-full px-2">
          <h2 className="text-lg font-semibold">Trading</h2>
          <i className="pi pi-angle-right p-1 rounded-full shadow-md"></i>,
        </div>
        <ul
          className={`w-fit h-full bg-white relative px-2 overflow-y-autor ${
            selectedState ? "bg-black text-white" : ""
          }`}
        >
          {headerMenu.map((item, index) => (
            <li
              className={`text-center p-2  cursor-pointer ${
                location.pathname == item.path && "text-blue-500 bg-blue-100"
              }`}
              key={index}
            >
              <h3 className="text-gray-400 font-medium border-b border-gray-300 text-left ">
                {item.heading}
                {item.submenu.map((innerItem, innerIndex) => (
                  <li
                    className={`flex whitespace-nowrap items-center text-center text-sm  py-2 cursor-pointer px-2 rounded-md ${
                      innerItem.title == "Accounts Overview"
                        ? "text-white bg-blue-600"
                        : ""
                    }`}
                    style={innerItem.style}
                    key={innerIndex}
                  >
                    {innerItem.icon} <h3 className="px-3">{innerItem.title}</h3>
                  </li>
                ))}{" "}
              </h3>
            </li>
          ))}
          <div
            className={`text-xs font-medium bg-[#f8f8f8] p-4 rounded-md mt-4 ${
              selectedState ? "bg-black text-white border border-white" : ""
            }`}
          >
            <div
              className={`flex items-center justify-between p-2 rounded-md bg-white ${
                selectedState ? "bg-black text-white border border-white" : ""
              }`}
            >
              <h4 className=" text-gray-400">Account:</h4>
              <h4>
                99999999<i className="pi pi-angle-down"></i>
              </h4>
            </div>
            <div
              className={`flex items-center justify-between p-2 my-2 rounded-md bg-white ${
                selectedState ? "bg-black text-white border border-white" : ""
              }`}
            >
              <h4 className=" text-gray-400">Status</h4>
              <h4>Active</h4>
            </div>
            <div
              className={`flex items-center justify-between p-2 rounded-md bg-white ${
                selectedState ? "bg-black text-white border border-white" : ""
              }`}
            >
              <h4 className=" text-gray-400">Program</h4>
              <h4>$50,000Evl. </h4>
            </div>
          </div>
          <div
            className={`flex justify-between items-center absolute bottom-0 left-0 bg-white w-full ${
              selectedState ? "bg-black text-white border border-white" : ""
            }`}
          >
            <div className="flex items-center py-3 border-b border-slate-200">
              <img
                src={him}
                alt={"imh"}
                className={`"w-8 h-9 rounded-full border-2 border-slate-300 `}
              />
              <div className="px-4">
                <h1 className="text-sm font-semibold">Denial Sulliven</h1>
                <p className="text-xs  text-center w-fit rounded-full text-gray-400">
                  alex@gmail.com
                </p>
              </div>
            </div>
            <i className="pi pi-angle-down"></i>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
