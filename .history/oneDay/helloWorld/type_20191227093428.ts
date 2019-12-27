function area(shape:string,width:number,height:number){
    var crice = width* height
    return "I am a" + shape + ",my area is " + area + "cm2"
}

document.body.innerHTML = area("rectangle", 30, 15)