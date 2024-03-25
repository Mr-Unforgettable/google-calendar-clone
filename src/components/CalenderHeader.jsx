import dayjs from "dayjs";
import logo from "../assets/logo.png";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function CalenderHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      // Caused bug due to useEffect optimization effect
      // If prev value === same value.
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <div className="px-4 py-2 flex items-center">
      <img src={logo} alt="calender" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calendar </h1>

      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 hover:bg-gray-100"
      >
        Today
      </button>

      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 hover:bg-slate-100 rounded-full mx-2">
          chevron_left
        </span>
      </button>

      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 hover:bg-slate-100 rounded-full mx-2">
          chevron_right
        </span>
      </button>

      <h2 className="ml-4 text-xl text-gray-500 font-medium">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </div>
  );
}
