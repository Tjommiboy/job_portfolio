import React, { useState, useEffect } from "react";

const Calender = () => {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
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
    <div id="calendar" className="bg-sky-400/10 border-gray-800 text-center ">
      <p id="date" className="text-amber-50/50 mb-2">
        {dateTime.date}
      </p>
      <p id="time" className="text-amber-50/50 font-bold">
        {dateTime.time}
      </p>
    </div>
  );
};

export default Calender;
