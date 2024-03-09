import "./Squares.css"
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function Squares() {

  useGSAP(() => {

    gsap.to(".square", {
      scale: 0.8,
      backgroundColor: "whitesmoke",
      repeat: 2,
      duration: 2,
      delay: 3,
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