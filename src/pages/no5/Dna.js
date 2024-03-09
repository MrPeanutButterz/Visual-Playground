import "./Dna.css"
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function Dna() {

  useGSAP(() => {

    gsap.fromTo(".l", {
      x: 0,
      backgroundColor: "#2f2f2f",
    }, {
      x: 15,
      backgroundColor: "#F5F5F5FF",

      ease: "sine.inOut",
      duration: 1.9,
      repeat: -1,
      stagger: {
        each: .2,
        repeat: -1,
        yoyo: true,
      }
    })

    gsap.fromTo(".string", {
      width: 150,
      backgroundColor: "#F5F5F5FF",
    }, {
      width: 0,
      backgroundColor: "#151515",

      ease: "sine.inOut",
      duration: 1.9,
      repeat: -1,
      stagger: {
        each: .2,
        repeat: -1,
        yoyo: true,
      }
    })

    gsap.fromTo(".r", {
      x: -0,
      backgroundColor: "#2f2f2f",
    }, {
      x: -15,
      backgroundColor: "#F5F5F5FF",

      ease: "sine.inOut",
      duration: 1.9,
      repeat: -1,
      stagger: {
        each: .2,
        repeat: -1,
        yoyo: true,
      }
    })
  })

  return <>
    <section>
      <div className="contentMC">
        <div className="dna-wrapper">

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

          <div className="string-wrapper">
            <div className="string-end l"></div>
            <div className="string"></div>
            <div className="string-end r"></div>
          </div>

        </div>
      </div>
    </section>
  </>
};