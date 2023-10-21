import React from "react";
// eslint-disable-next-line
const Title = () => {
  console.log("Rendering Title");
  return <h1>useCallback Hook</h1>;
};

// eslint-disable-next-line
export default React.memo(Title);
