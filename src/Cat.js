function Avatar(props) {
  return (
    <div>
      <img src={props.avatar} alt=".." />
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default Avatar;
