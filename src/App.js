import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Team from "./components/team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <Routes>
          <Route path="/team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>

      <div className="main"></div>
    </div>
  );
}

export default App;
