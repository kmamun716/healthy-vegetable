import ReactDetails from "./Components/ReactDetails";
import UseStateDetails from "./Components/UseStateDetails";
import Vegitables from "./Components/Vegitables/Vegitables";

function App() {
  return (
    <div className="container">
      <header className="text-center mb-5">
        <h3>Select Healthy Vegitable</h3>
      </header>
      <Vegitables />
      <ReactDetails />
      <UseStateDetails />
    </div>
  );
}

export default App;
