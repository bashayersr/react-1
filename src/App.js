import "./App.css";
import Avatar from "./Cat";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <Avatar
            avatar={
              "https://i.pinimg.com/474x/c2/e0/75/c2e075bf8c8c1faec0567269afbd76b4.jpg"
            }
            name={"Snoopy"}
            age={"2 year"}
          />
          <Avatar
            avatar={
              "https://i.pinimg.com/474x/26/c7/35/26c7355fe46f62d84579857c6f8c4ea5.jpg"
            }
            name={"Losy"}
            age={"1 year"}
          />
        </div>
        <div className="column">
          <Avatar
            avatar={
              "https://i.pinimg.com/474x/52/55/d4/5255d4f6909d42c093aecc5265f38b46.jpg"
            }
            name={"Mika"}
            age={"1 mount"}
          />
          <Avatar
            avatar={
              "https://i.pinimg.com/474x/56/ce/5c/56ce5cf1623e3ee5d53ca85d156fcc98.jpg"
            }
            name={"Jeesy"}
            age={"1 year"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
