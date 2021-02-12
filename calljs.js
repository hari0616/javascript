var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  var t=person.fullName.call(person2); 
  console.log(t);
  //function argument
  var t={
      full:function(city,town){
          return this.name+" "+this.namel+" "+city+" "+town;
      }
  }
  var p1={
      name:"hari",
      namel:"sankar"
  }
  var p2={
    name:"hari1",
    namel:"sankar1"
}
var t2=t.full.call(p1,"villu","chennai");
var t3=t.full.call(p1,"villupuram","TN");
console.log(t2);
console.log(t3);