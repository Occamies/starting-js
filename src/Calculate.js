import gsap from "gsap";
class Calculate {
  
  constructor(averagTemp, domObj) {

      //let getChildElements = document.querySelectorAll("#childCon > #block");
      let averagTempLength = averagTemp.length;
  
      for (let i = 0; i < averagTempLength; i++) {
  
        gsap.to(domObj[i], {
          duration: 1,
          scaleY: averagTemp[i] / 10,
          transformOrigin: "bottom",
          ease: "elastic.out"
        });
  
  
        //samme som if statements under.
      const avaragColor = averagTemp[i]>10 && averagTemp[i]<20 ? '#F2A922'
        :averagTemp[i]>=20 ? '#F27F1B'
        :'#b4e0eb'
  
        document.querySelector(".maps" + i).style.backgroundColor = avaragColor;
        
  
       /*  if (averagTemp[i] > 10 && averagTemp[i] < 20) 
        {
          document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#F2A922";
        } 
        if (averagTemp[i] > 20) 
        {
          document.querySelector("#childCon > .maps" + i).style.backgroundColor = "#F27F1B";
        }  */
  
      }//end loop
  
    }
}
export default Calculate
