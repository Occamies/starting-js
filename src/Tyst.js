import omMig from "./omMig.json"

class Tyst {
  
  constructor() {
    this.data = omMig;

    this.container1 = document.createElement('main');
    this.container1.className = "tystContainer2";
    document.body.appendChild(this.container1);
    


    let namelength = omMig.name.length;
    for (let i = 0; i<namelength; i++) {

      this.firstName = document.createElement('div');
      this.firstName.className = "tystContainer";
      this.container1.appendChild(this.firstName);
      this.firstName.innerHTML = this.data.name[i];
    }



  }

}
export default Tyst;
