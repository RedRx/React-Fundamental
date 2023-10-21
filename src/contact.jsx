import { useContext } from "react";
import DataContext from "./utils/context-api";

const Contact = () => {
  const context = useContext(DataContext);
  return (
    <div>
      <h1>Name: {context.data.name}</h1>
      <h2>Email: {context.data.email}</h2>
      <h3>Phone: {context.data.phone}</h3>
    </div>
  );
};

export default Contact;
