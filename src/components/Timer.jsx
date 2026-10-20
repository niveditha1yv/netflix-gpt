import { useState, useRef, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerIdRef = useRef(null); // Stores the timer ID across renders

  const startTimer = () => {
    if (timerIdRef.current !== null) return;

    timerIdRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null; // Mutating this doesn't force a re-render
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>Time: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
