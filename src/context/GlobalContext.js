import React from "react";

const GlobalContext = React.createContext({
  daySelected: null,
  setDaySelected: (day) => {},
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalenderMonth: 0,
  setSmallCalenderMonth: (index) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalledEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: []
});

export default GlobalContext;
