Array.prototype.myFilter= function(callback){

    if(typeof callback !== 'function'){
        throw new Error("callback must be function")
    }

    let arr=[];
   

    for(let i=0;i<this.length;i++){

        console.log(callback.call(null,this[i]))

        if(callback.call(null,this[i])){
            arr.push(this[i])
        }
    }

    return arr;
}
console.log([10,20,30,56].myFilter(function(val){
    return val<=20
}))