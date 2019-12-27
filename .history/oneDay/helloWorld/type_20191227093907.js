function Area(shape, width, height) {
    var cricle = width * height;
    return "I am a" + shape + ",my area is " + cricle + "cm2";
}
document.body.innerHTML = Area3("rectangle", 30, 15);
