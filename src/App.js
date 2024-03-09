import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

/* PAGES */
import Overview from "./pages/Overview";
import SunsetHorizon from "./pages/no1/SunsetHorizon";
import CirclesFalling from "./pages/no2/CirclesFalling";
import CirclesPlanetary from "./pages/no3/CirclesPlanetary";
import Squares from "./pages/no4/Squares";
import Dna from "./pages/no5/Dna";

export default function App() {
  return <>
    <nav>
      <NavLink to="/">
        <div className="nav-link">
          <h4>Menu</h4>
        </div>
      </NavLink>
    </nav>
    <Routes>
      <Route exact path="/" element={<Overview/>}></Route>
      <Route exact path="/sunset-horizon" element={<SunsetHorizon/>}></Route>
      <Route exact path="/circles-falling" element={<CirclesFalling/>}></Route>
      <Route exact path="/circles-planetary" element={<CirclesPlanetary/>}></Route>
      <Route exact path="/squares" element={<Squares/>}></Route>
      <Route exact path="/dna" element={<Dna/>}></Route>
    </Routes>
  </>
}
