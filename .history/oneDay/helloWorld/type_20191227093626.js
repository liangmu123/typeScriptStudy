function Area2(shape, width, height) {
    var cricle = width * height;
    return "I am a" + shape + ",my area is " + cricle + "cm2";
}
document.body.innerHTML = Area2("rectangle", 30, 15);
