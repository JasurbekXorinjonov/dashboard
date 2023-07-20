import "./App.css";
import Saidbar from "./components/Saidbar/Saidbar";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Overview from "./components/overview/overview";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container w-full">
      <Saidbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
