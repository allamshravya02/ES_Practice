let arr=[4,8,3,11,2,9]

//foreach
arr.forEach((e)=>console.log(e))

//Filter
let earr=arr.filter(e=>!(e%2))
let oarr=arr.filter(e=>e%2)
console.log(arr) //array
console.log(earr) //evenarray
console.log(oarr) //oddarray

//Map
let farray=arr.map(e=>e+2)
console.log(farray)  //map to add 2
let sqarr=arr.map((ele)=>ele*ele)
console.log(sqarr) //square array

//Sort
let sarr=arr.sort((a,b)=>a-b)
console.log(sarr) //ascend
let dsarr=arr.sort((a,b)=>b-a)
console.log(dsarr) //descend

//some (boolean)
let narr=arr.some(e=>e+11)// doubtfull
console.log(narr)
let truel=arr.some(e=>e<=1)
console.log(truel)

//Find (Gives only 1 output)
let farr=arr.find(e=>e>9)
console.log(farr)
let find=arr.find(e=>e<8)
console.log(find)

//every (boolean)
let eaarr=arr.every(e=>e>=11)
console.log(eaarr)
let eearr=arr.every(e=>e>=1)
console.log(eearr)

//reduce
let sum=arr.reduce((a,b)=>a+b)
console.log(sum)