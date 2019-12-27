function aarearea(shape:string,width:number,height:number){
    var cricle = width* height
    return "I am a" + shape + ",my area is " + cricle + "cm2"
}

document.body.innerHTML = area("rectangle", 30, 15)