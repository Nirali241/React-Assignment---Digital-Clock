import React, { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="Clock">
      <h3 id="time">{timer}</h3>
      {timer}
    </div>
  );
};

export default App;
