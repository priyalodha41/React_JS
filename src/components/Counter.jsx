import { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = 40; 

    const interval = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === end) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [end]);

  return <span>{count}</span>;
}

export default Counter;
