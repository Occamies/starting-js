import Calculate from "./Calculate";


class Menu {
  constructor(dataTemp, obj) {

    /* starting menu */

    this.yearContainer = document.createElement("div");
    this.yearContainer.id = 'yearContainer';
    this.yearContainer.className = 'yearContainer';
    document.body.appendChild(this.yearContainer);

    this.yearContainer.innerHTML =
      dataTemp.map((item, index) => {
        return `
              <div data-index=${index}>
                ${item.year}
              </div>
            
            `//End return
      }).join("");

    this.getChildYearCon = document.querySelectorAll("#yearContainer>div");
    this.getChildYearConLength = this.getChildYearCon.length;

    this.getChildYearCon.forEach((item) => {

      item.addEventListener('click', (event) => {

        for (let i = 0; i < this.getChildYearConLength; i++) {

          this.getChildYearCon[i].style.backgroundColor = "#36aad8"
        }

        event.currentTarget.style.backgroundColor = "#04658c";

        let currentDataIndex = event.currentTarget.dataset.index;

        let getDataFromIndex = dataTemp[currentDataIndex].averagTemprature;

        new Calculate(getDataFromIndex, obj);

        let getChildTempCon = document.querySelectorAll("#childCon>#temperature")

        for (let i = 0; i < getChildTempCon.length; i++) {
          document.querySelector(".temp" + i).innerHTML = dataTemp[currentDataIndex].averagTemprature[i];
        }

      })//End eventlistener

    })//End loop

  }//End constructor


}//End class
export default Menu;