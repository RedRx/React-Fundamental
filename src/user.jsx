import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default UserPage;
