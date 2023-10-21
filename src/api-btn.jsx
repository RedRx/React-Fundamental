import { useState } from "react";

const ApiDemo2 = () => {
  const [dataFromApi, setDataFromApi] = useState();

  const handleFetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setTimeout(() => {
      setDataFromApi(data);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center">
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
      <button onClick={handleFetchData} className="m-6">
        FetchData
      </button>
    </div>
  );
};

export default ApiDemo2;
