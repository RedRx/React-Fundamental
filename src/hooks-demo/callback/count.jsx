import React from "react";
// eslint-disable-next-line
const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text}: {count}
    </div>
  );
};

// eslint-disable-next-line
export default React.memo(Count);
