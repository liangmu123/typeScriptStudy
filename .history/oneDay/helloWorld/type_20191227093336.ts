function area(shape:string,width:number,height:number){
    var area2 = width* height
    return "I am a" + shape + ",my area is" + area2 + "cm2"
}

document.body.innerHTML = area("rectangle", 30, 15)