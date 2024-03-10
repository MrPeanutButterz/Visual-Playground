import "./Barcode.css"
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function Barcode() {

  gsap.registerPlugin(TextPlugin)

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

    gsap.fromTo(".bar-code", {
      text: "97619253457322",
    }, {
      text: "13490857654378",
      duration: 5,
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
        <h3 className="bar-code"></h3>
      </div>
    </section>
  </>
};