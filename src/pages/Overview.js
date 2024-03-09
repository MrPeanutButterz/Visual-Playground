import {NavLink} from "react-router-dom";

export default function Overview() {

  return <>
    <section className="menu">
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
      <NavLink to="/circles-planetary">
        <div className="link">
          <h2>3</h2>
          <p>Circles planetary</p>
        </div>
      </NavLink>
      <NavLink to="/squares">
        <div className="link">
          <h2>4</h2>
          <p>Squares</p>
        </div>
      </NavLink>
    </section>
  </>
};