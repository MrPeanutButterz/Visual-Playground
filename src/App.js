import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

/* PAGES */
import Overview from "./pages/Overview";
import SunsetHorizon from "./pages/no1/SunsetHorizon";
import CirclesFalling from "./pages/no2/CirclesFalling";

export default function App() {
  return <>
    <nav>
      <NavLink to="/">
        <div className="link">
          <h4>Overview</h4>
        </div>
      </NavLink>
    </nav>
    <Routes>
      <Route exact path="/" element={<Overview/>}></Route>
      <Route exact path="/sunset-horizon" element={<SunsetHorizon/>}></Route>
      <Route exact path="/circles-falling" element={<CirclesFalling/>}></Route>
    </Routes>
  </>
}
