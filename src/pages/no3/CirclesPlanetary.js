import "./CirclesPlanetary.css"
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function CirclesPlanetary() {

  useGSAP(() => {

    gsap.to(".outer-circle", {
      rotate: 360,
      duration: 8,
      ease: "none",
      repeat: -1,
    })

    gsap.to(".inner-circle", {
      rotate: 360,
      duration: 6,
      ease: "none",
      repeat: -1,
    })

  })

  return <>
    <section>
      <div className="contentMC">
        <div className="circles-planets-wrapper">

          <div className="outer-circle">
            <div></div>
          </div>

          <div className="inner-circle">
            <div></div>
          </div>

        </div>
      </div>
    </section>
  </>
};