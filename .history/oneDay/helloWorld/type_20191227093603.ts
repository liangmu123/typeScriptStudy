function Area(shape:string,width:number,height:number){
    var cricle = width* height
    return "I am a" + shape + ",my area is " + cricle + "cm2"
}Area

document.body.innerHTML = Area("rectangle", 30, 15)