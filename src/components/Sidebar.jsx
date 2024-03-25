import React from "react";
import SmallCalender from "./SmallCalender";
import CreateEventButton from "./CreateEventButton";

export default function Sidebar() {
  return (
    <div className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalender />
    </div>
  );
}
