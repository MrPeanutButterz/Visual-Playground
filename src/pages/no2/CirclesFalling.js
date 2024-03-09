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

        </div>
      </div>
    </section>
  </>
};