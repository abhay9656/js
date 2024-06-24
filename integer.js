
// function isInteger(num){
//     return Number.isInteger(num)
// }

// console.log(isInteger(45));

const arr=[1,2,3,4,4,5,5]
let c=0
const rep=arr.filter((item,index)=>{
     return arr.indexOf(item)=== index
})
console.log(rep);

const set=[...new Set(arr)]
console.log(set);