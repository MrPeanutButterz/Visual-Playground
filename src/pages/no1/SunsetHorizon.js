import "./SunsetHorizon.css"
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

export default function SunsetHorizon() {

  useGSAP(() => {

    gsap.fromTo("#sun", {
      x: -10,
      y: -40,
    }, {
      x: 50,
      y: 0,
      repeat: 1,
      duration: 10,
      yoyo: true,
    })

  })

  return <>
    <section>
      <div className="contentMC">
        <div className="sunset-horizon-wrapper">

          <div id="sun"></div>
          <div id="horizon">
            <div></div>
          </div>

        </div>
      </div>
    </section>
  </>
};