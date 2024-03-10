import "./Barcode.css"
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function Barcode() {

  useGSAP(() => {

    gsap.fromTo(".bar", {
      scaleX: 1,
      y: 0,
    }, {
      y: -2,
      scaleX: 2.5,
      repeat: 0,
      delay: 1,
      duration: .1,
      ease: "none",
      stagger: {
        each: .1,
        from: "random",
      }
    })
  })

  return <>
    <section>
      <div className="contentMC">
        <div className="barcode-wrapper">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </section>
  </>
};