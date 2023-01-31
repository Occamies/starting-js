import { gsap } from "gsap";
export default class Initialize {

  constructor() {

    this.weather = {
      author: "The Weatherman",
      month: ["januar", "februar", "marts", "april", "maj", "juni", "juli"],

      temprature: [
        {
          year: "2018",
          averagTemprature: [5, 4, 3, 11, 14, 21, 23]
        },
        {
          year: "2019",
          averagTemprature: [2, 5, 5, 12, 13, 22, 24]
        },
        {
          year: "2020",
          averagTemprature: [12, 8, 2, 14, 17, 29, 22]
        }
      ]
    } //END weather object

    this.container = document.createElement('div');
    this.container.id = "container";
    this.container.className = "container";
    document.body.appendChild(this.container);


    /*     this.weather.month.forEach((item) => { 
    
          this.block = document.createElement( 'div');
          this.block.id ='block';
          this.container.appendChild(this.block);
    
          let mtn =document.createTextNode(item);
          this.block.appendChild(mtn);
        }); */



    this.container.innerHTML = this.weather.month.map((item, index) => {
      return `
        <div id="childCon">

        <div class=${"maps" + index} id=${'block'}></div>

        <div id="temperature">
          ${this.weather.temprature[0].averagTemprature[index]}
        </div>

        <div class="month">${item}</div>

        </div>
              `//END return
    }).join('');

    //hvordan man alver en section
    /* this.createDiv('div','poul');
    this.createDiv('h2','');
    this.createDiv('section','jens');
    this.createDiv('article','hans'); */
    this.calculate(this.weather.temprature[0].averagTemprature)

  }; // END constructor

  calculate(averagTemp) {

    let averagTempLength = averagTemp.length;

    for (let i = 0; i < averagTempLength; i++) {
      gsap.to(document.querySelectorAll("#childCon > .maps" + i), {
        duration: 1,
        scaleY: (averagTemp[i] / 10).toFixed(2),
        transformOrigin: "bottom",
        ease: "elastic.out(1, 0.3)"
      });

      if (averagTemp[i] > 10 && averagTemp[i] < 20) 
      {
        document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#F2A922";
      } 
      else if (averagTemp[i] > 20) 
      {
        document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#F27F1B";
      } 
      else 
      {
        document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#b4e0eb";
      }


    }



  }

  /*     createDiv(a,b){
        let md = document.createElement(a);
        document.body.appendChild(md);
        md.id =b;
      }; */


} // END class
