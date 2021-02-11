//arrow mathod
var hello;
hello =(val) =>{
    return "welcome"+val;
}
console.log(hello(8));
// classes
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
      }
    }
  
  myclass=new Car("honda",900);
  console.log("my car name is"+"\b"+myclass.name+" "+"my car is"+" "+myclass.age());