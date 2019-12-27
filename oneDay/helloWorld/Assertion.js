var str = "1";
var str2 = str;
console.log(typeof str2);
var value = 10;
var str3 = "11";
function buildName(firstName, lastName) {
    firstName = firstName ? firstName : '';
    console.log(lastName);
    lastName = lastName ? lastName : '';
    return firstName + lastName;
}
var str4 = buildName("良木");
console.log(str4);
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var key in nums) {
        console.log(key);
        console.log(nums[key]);
    }
}
addNumbers(11, 22, 33, 44, 55);
