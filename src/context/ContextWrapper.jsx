import dayjs from "dayjs";
import GlobalContext from "./GlobalContext";
import React, { useEffect, useMemo, useReducer, useState } from "react";

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
  const [labels, setLabels] = useState([]);

  const [savedEvents, dispatchCalledEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((event) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(event.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("saveEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setMonthIndex(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((event) => event.label))].map(
        (label) => {
          const currentLabel = prevLabels.find((lbl) => lbl.label === label);
          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

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
        setLabels,
        labels,
        updateLabel,
        filteredEvents
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
