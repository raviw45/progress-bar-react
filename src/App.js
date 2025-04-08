import { useEffect, useState } from "react";
import "./styles.css";

const Progress = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          color: progress < 5 ? "black" : "white",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div className="App">
      <h1>Animated Progress bar</h1>
      {bars.map((bar) => (
        <Progress progress={bar} key={bar} />
      ))}
    </div>
  );
}
