var str = "1"

var str2:number = <number> <any> str

console.log(typeof str2)

var value:number = 10
var str3:string = "11"

function buildName(firstName?:string,lastName?:string):string{
    firstName = firstName ? firstName : ''
    console.log(lastName)
    lastName = lastName ? lastName : ''
    return firstName + lastName
}

var str4 = buildName("良木")

console.log(str4)


function addNumbers(...nums:number[]):void{
    for(var key in nums){
        console.log(key)
        console.log(nums[key])
    }
}