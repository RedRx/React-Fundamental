import { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState();

  // ╭──────────────────────────────────────────────────────────╮
  // │  component did mount                                     │
  // ╰──────────────────────────────────────────────────────────╯
  useEffect(() => {
    // Code to run once the component has mounted
    setCount(20);
  }, []);

  // ╭──────────────────────────────────────────────────────────╮
  // │   component did update                                   │
  // ╰──────────────────────────────────────────────────────────╯
  useEffect(() => {
    // Code to run every time the component updates
  }); // No dependency array, runs on every update

  useEffect(() => {
    // Code to run when `someValue` changes
    console.log("Count changed !!");
    if (count === 30) {
      console.log("Now count is 30");
    }
  }, [count]);

  // ╭──────────────────────────────────────────────────────────╮
  // │  component will unmount                                  │
  // ╰──────────────────────────────────────────────────────────╯
  useEffect(() => {
    // Code to run once the component has mounted

    return () => {
      // Cleanup code to run just before the component unmounts
    };
  }, []);

  const [message, setMessage] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      setMessage("Timer is still running...");
    }, 3000);

    return () => {
      clearInterval(timer);
      setMessage("Timer cleared");
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(30)}>Change Count</button>
      <button onClick={() => setCount(count + 1)}>Add Count + 1</button>
      <h1>Message: {message}</h1>
    </div>
  );
};

export default Effect;
