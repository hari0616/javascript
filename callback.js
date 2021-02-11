function mycal(x,y,mycallback){
    //console.log(mycallback);
var sum=x+y;
 mycallback(sum);
 //console.log(mycallback);
}
function mydisplay(some){
console.log(some);
}
var no=mycal(9,8,mydisplay);
var y=[5,7,9,8,4,3,6];
function isodd(values){
    return values%3;
}
var oddno=y.filter(isodd);
console.log(oddno);
//anonymous function
setTimeout(function(){
    console.log("this is print after 3sec");
},3000);
//callback
function homework(sub,callback){
    console.log("today homework is"+sub);
    callback();
}
 homework('maths',function(){
console.log("homework finished");
});