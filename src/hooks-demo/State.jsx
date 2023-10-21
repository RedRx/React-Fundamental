import { useState } from "react";

const State = () => {
  const [name, setName] = useState("BearyDev");
  const [number, setNumber] = useState(0);
  const [isBool, setIsBool] = useState(false);

  const changeName = () => {
    if (name === "BearyDev") {
      setName("Beary Developer");
    } else {
      setName("BearyDev");
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1>State of name: {name}</h1>
      <h2>Number: {number}</h2>
      <h2 className={`${isBool ? "text-green-600" : "text-red-600"} font-bold`}>
        isBool: {isBool.toString()}
      </h2>
      <button onClick={changeName}>Change Name</button>
      <button onClick={() => setNumber(10)}>Change number to 10</button>
      {/* <button onClick={() => setIsBool(true)}>Change isBool</button> */}
      <button onClick={() => setIsBool(() => !isBool)}>Change isBool</button>
    </div>
  );
};

export default State;
