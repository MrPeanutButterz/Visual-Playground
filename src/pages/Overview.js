import {NavLink} from "react-router-dom";

export default function Overview() {

  return <>
    <NavLink to="/sunset-horizon">
      <div className="link">
        <h2>1</h2>
        <p>Sunset horizon</p>
      </div>
    </NavLink>
    <NavLink to="/circles-falling">
      <div className="link">
        <h2>2</h2>
        <p>Circles falling</p>
      </div>
    </NavLink>
  </>
};