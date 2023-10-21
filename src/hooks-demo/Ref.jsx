import { useEffect, useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    //focus the input element
    inputRef.current.focus();

    console.log(inputRef.current.placeholder);
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
        className="p-3 rounded-md"
      />
    </div>
  );
};

export default Ref;
