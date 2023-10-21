const HiContext = (props) => {
  return (
    <div>
      <h1>Username: {props.user.name}</h1>
      <h1>Email: {props.user.email}</h1>
    </div>
  );
};

export default HiContext;
