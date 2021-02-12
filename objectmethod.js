//in ojects function can create
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());
  //this keyword access property of objects
  var student={
      name:"hari",
      yop:2020,
      lastName:"sankar"
  };
  student.fullName=function(){
      return this.name+this.lastName;
  };
  console.log(student.fullName());
  //object into array
  var person = {name:"John", age:50, city:"New York"};
var myArray = Object.values(person);
console.log(myArray);
//stringify
var people={name:"kit",age:445,village:"chennai"};
var t=JSON.stringify(people);
console.log(t);
//lagproprty(get)
var places={village:"chit",town:"vill",city:"chennai",
get lang(){
    return this.city;
}};
console.log(places.lang);
//lag property(set)
var places={village:"chit",town:"vill",city:"",
set lang(value){
    return this.city=value;
}};
places.lang="villupuram";
console.log(places.city);

