export default class Initialize {

  constructor() {

    this.weather = {
      author: "The Weatherman",
      month: ["januar", "februar", "marts", "april", "maj", "juni"],
      averagTemprature: [-10, -10, -10, 12, 15, 20, 25]
    }

    this.container = document.createElement('div');
    this.container.id = "container";
    this.container.className = "container";
    document.body.appendChild(this.container);

    this.container.innerHTML = this.weather.month.map((item, index) => {
      return `
      
      <div class=${"maps" + index} id=${'block'}>${item}</div>
      
            `
    }).join('');

  }; // END constructor



} // END class
