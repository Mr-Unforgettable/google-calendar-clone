import { getMonth } from "./util";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";
import CalenderHeader from "./components/CalenderHeader";
import React, { useContext, useEffect, useState } from "react";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // Using useContext() hook to fetch the global state of monthIndex
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  // Render the App when the monthIndex changes.
  // useEffect hook runs the code at every render.
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    // It is the way to provide invisible parent.
    // <></> does not supports keys and attributes.
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalenderHeader />

        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
