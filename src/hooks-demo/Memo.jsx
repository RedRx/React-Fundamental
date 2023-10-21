import { useMemo, useState } from "react";

const Memo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // const isEvent = () => {
  //   return counterOne % 2 === 0;
  // };

  const isEvent = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col gap-5 mb-10">
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span
          className={`${
            counterOne % 2 === 0 ? "text-green-500" : "text-red-500"
          } font-bold`}
        >
          {/* {isEvent() ? "Even" : "Odd"} */}
          {isEvent ? "Even" : "Odd"}
        </span>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
};

export default Memo;
