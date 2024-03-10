import {NavLink} from "react-router-dom";

export default function Overview() {

  return <>
    <section className="menu">
      <NavLink to="/sunset-horizon">
        <div className="link">
          <h2>1</h2>
          <p>Sunset Horizon</p>
        </div>
      </NavLink>
      <NavLink to="/circles-falling">
        <div className="link">
          <h2>2</h2>
          <p>Circles Falling</p>
        </div>
      </NavLink>
      <NavLink to="/circles-planetary">
        <div className="link">
          <h2>3</h2>
          <p>Circles Planetary</p>
        </div>
      </NavLink>
      <NavLink to="/squares">
        <div className="link">
          <h2>4</h2>
          <p>Squares Twisting</p>
        </div>
      </NavLink>
      <NavLink to="/dna">
        <div className="link">
          <h2>5</h2>
          <p>Moving Dna</p>
        </div>
      </NavLink>
      <NavLink to="/barcode">
        <div className="link">
          <h2>6</h2>
          <p>Barcode</p>
        </div>
      </NavLink>
    </section>
  </>
};