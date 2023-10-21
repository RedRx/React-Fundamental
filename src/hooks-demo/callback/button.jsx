import React from "react";
// eslint-disable-next-line
const Button = ({ handleClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={handleClick}>{children}</button>;
};

// eslint-disable-next-line
export default React.memo(Button);
