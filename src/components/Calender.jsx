import React, { useState, useEffect } from "react";

const Calender = () => {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      setDateTime({
        date: now.toLocaleDateString(undefined, dateOptions),
        time: now.toLocaleTimeString(undefined, timeOptions),
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div
      id="calendar"
      className="bg-sky-800/20 border-gray-800 w-[90%] rounded "
    >
      <p id="date" className="text-amber-50/50 ">
        {dateTime.date}
      </p>
      <p id="time" className="text-amber-50/50 ">
        {dateTime.time}
      </p>
    </div>
  );
};

export default Calender;
