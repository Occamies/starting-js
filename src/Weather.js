import { RotateMode } from "pixi-spine";
import Calculate from "./Calculate";
import Data from "./temperature.json";
import Menu from "./Menu";
import Sun from "./sun";


export default class Weather {

  constructor() {

    this.data = Data;

    this.objToCalc;

    new Sun
    

    this.container = document.createElement('div');
    this.container.id = "container";
    this.container.className = "container";
    document.body.appendChild(this.container);

    this.container.innerHTML = this.data.month.map((item, index) => {
      return `
        <div id="childCon">
        <div class=${"maps" + index} id=${'block'}></div>

        <div id="temperature" class=${"temp"+index}>
          ${this.data.temperature[0].averagTemprature[index]}
        </div>

        <div class="month">${item}</div>

        </div>
              `//END return
    }).join('');

    this.objToCalc = document.querySelectorAll("#childCon > #block");

    
    let calc = new Calculate(this.data.temperature[0].averagTemprature, this.objToCalc);

    new Menu(this.data.temperature,this.objToCalc)
    
  }; // END constructor

} // END class
