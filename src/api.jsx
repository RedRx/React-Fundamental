import { useEffect, useState } from "react";

const ApiDemo = () => {
  const [dataFromApi, setDataFromApi] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        setDataFromApi(data);
      });
    });
  }, []);

  return (
    <div>
      {dataFromApi?.map((user) => (
        <div
          key={user.id}
          className="flex justify-center items-center p-3 m-5 w-full bg-teal-700 rounded-lg cursor-pointer hover:bg-teal-800"
          onClick={() => alert(`${user.name} - ${user.email}`)}
        >
          <div className="flex flex-col">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiDemo;
