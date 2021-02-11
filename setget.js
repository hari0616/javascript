var places={
    name:"kantha",
    town:"villupuram",
    city:"chennai",
    get lang(){
        return this.city.toUpperCase();
    }
};
console.log(places.lang);
// set lang
var places1={
    name:"kantha",
    town:"villupuram",
    city:"",
    set lang(values){
        return this.city=values.toLowerCase();
    }
};
places1.lang="chennai";
console.log(places1.city);
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
      return this.firstName + " " + this.lastName
    };
  }
  var myfun=new Person("hari","sankar",21,"blue");
  console.log(myfun.name());