var people={
    name:"gautum",
    age:23,
    language:"english"
};
Object.defineProperty(people,"yop",{value:"2050"});
var text="";
var x;
for(x in people){
    text+=people[x]+people.yop;
}
console.log(text);
(function(){
    console.log("hello");
})();
console.log(screen.Width);