class Myjs{
    constructor (name){
     this.name=name;
    }
    static hello(x){
        return "helloooo"+x.name;
    }
}

const myC=new Myjs("hsri");
console.log(Myjs.hello(myC));
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let myCar = new Car("Ford");
  console.log(Car.hello());