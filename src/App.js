import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import { Team } from "./components/team";
import Comunity from "./components/comunity";
import UserInformation from "./components/userInformation";

const tabs = [
  "Community",
  "User information",
  "Account Settings",
  "Billing",
  "Invoices",
  "Payment Processing",
  "CRM",
  "Team",
  "Add ON",
  "App Market",
  "Help",
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard tabs={tabs} />
        <Routes>
          <Route path="/team" element={<Team tabs={tabs} />}></Route>
          <Route path="/community" element={<Comunity />}></Route>
          <Route path="/user-information" element={<UserInformation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
