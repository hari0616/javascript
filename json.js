//json
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj);
//delete option in array
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var text="";var x;
console.log("before deletion");
myfun();
function myfun(){
for(x in person){
    text+=person[x]+" ";
}
console.log(text);
}

console.log("after deletion");
delete person.age;
myfun();