function area(shape,width:number,height:number){
    var area = width* height
    return "I am a" + shape + ",my area is" + area + "cm2"
}

document.body.innerHTML = area("rectangle", 30, 15)