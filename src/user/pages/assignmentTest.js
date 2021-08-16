function calc(func){

    if(func === 'sum'){
        return (a,b)=>(c,d)=>a+b+c+d;
    }
    if(func == 'prod'){
        return (a,b)=>(c,d)=>a*b*c*d;
    }
}

console.log(calc('sum')(1,2)(3,4))  //10
console.log(calc('prod')(1,2)(3,4)) //24