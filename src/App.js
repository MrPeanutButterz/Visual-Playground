import './App.css';
import {Route, Routes} from "react-router-dom";

/* PAGES */
import SunsetHorizon from "./pages/no1/SunsetHorizon";
import Overview from "./pages/Overview";

export default function App() {
  return <>
    <Routes>
      <Route exact path="/" element={<Overview/>}></Route>
      <Route exact path="/sunset-horizon" element={<SunsetHorizon/>}></Route>
    </Routes>
  </>
}
