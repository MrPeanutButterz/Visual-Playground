import "./Squares.css"
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function Squares() {

  useGSAP(() => {

    gsap.to(".square", {
      scale: .85,
      rotate: 45,
      yoyo: false,
      border: "1px solid whitesmoke",
      ease: "none",
      repeat: 0,
      duration: .5,
      delay: 2,
    })

  })

  return <>
    <section>
      <div className="contentMC">
        <div className="squares-wrapper">

          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>

        </div>
      </div>
    </section>
  </>
};