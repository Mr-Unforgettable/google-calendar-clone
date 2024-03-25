import dayjs from "dayjs";
import GlobalContext from "./GlobalContext";
import React, { useEffect, useReducer, useState } from "react";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "PUSH":
      return [...state, payload];
    case "UPDATE":
      return state.map((event) => (event.id === payload.id ? payload : event));
    case "DELETE":
      return state.filter((event) => event.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

export default function ContextWrapper(props) {
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);

  const [savedEvents, dispatchCalledEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("saveEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setMonthIndex(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  return (
    <GlobalContext.Provider
      value={{
        daySelected,
        setDaySelected,
        monthIndex,
        setMonthIndex,
        smallCalenderMonth,
        showEventModal,
        setShowEventModal,
        setSmallCalenderMonth,
        dispatchCalledEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
