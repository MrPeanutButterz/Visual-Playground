import {NavLink} from "react-router-dom";

export default function Overview() {

  return <>
    <NavLink to="/">
      <div className="link">
        <h1>Overview</h1>
      </div>
    </NavLink>
    <NavLink to="/sunset-horizon">
      <div className="link">
        <h1>NO: 1</h1>
        <p>sunset horizon</p>
      </div>
    </NavLink>
  </>
};