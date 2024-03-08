import "./CirclesFalling.css"
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function CirclesFalling() {

  useGSAP(() => {

    gsap.to(".circle", {
      height: 0,
      duration: 1.5,
      ease: "power2.in",
      stagger: {
        amount: 2,
        each: 1,
      }
    })

    gsap.to(".circles-wrapper > h1", {
      y: -150,
      duration: 2.2,
      delay: 1.4,
      opacity: 1,
      ease: "power1.out",
    })

  })

  return <>
    <section>
      <div className="contentMC">
        <div className="circles-wrapper">

          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>

          <h1>Circles Falling</h1>

        </div>
      </div>
    </section>
  </>
};