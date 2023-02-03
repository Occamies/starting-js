import gsap from "gsap"
import mSun from "../assets/sun-big-white.png";

class Sun {
  constructor() {
    //SUN
    this.sun = document.createElement('div');
    this.sun.id = "sun";
    this.sun.className = "sun";
    document.body.appendChild(this.sun);
    this.sun.innerHTML = `<img src=${mSun}/>`;


    gsap.to('#sun', {
      duration: 30,
      rotation: 360,
      transformOrigin: "center",
      repeat: -1
    })
  }
}

export default Sun;