import "./App.css";
import Saidbar from "./components/Saidbar/Saidbar";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="app-container w-full">
      <Saidbar />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
