import dayjs from "dayjs";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";

export default function SmallCalender() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalenderMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const today = dayjs().format(format);
    const currentDay = day.format(format);
    const selectedDay = daySelected && daySelected.format(format);

    if (today === currentDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currentDay === selectedDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>

        <div>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 rounded-full hover:bg-slate-100">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 rounded-full hover:bg-slate-100">
              chevron_right
            </span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, idx) => (
          <span key={idx} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}

        {currentMonth.map((row, idx) => (
          <React.Fragment key={idx}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalenderMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`py-1 w-full rounded-full hover:bg-slate-100 ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
