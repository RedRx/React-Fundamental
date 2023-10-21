import { useCallback, useState } from "react";
import Count from "./count";
import Title from "./title";
import Button from "./button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(60000);

  // const incrementAge = () => {
  //   setAge(age + 1);
  // };
  // const incrementSalary = () => {
  //   setSalary(salary + 1000);
  // };

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
