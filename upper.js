
// function str(st){  
//    return st.split(" ").map((item)=>{
//        return item.charAt(0).toUpperCase()+item.slice(1)
//     }).join(' ')
// }

// console.log(str("hello js"));

const arr=[1,2,3,4,5]

function sum()
{
    return arr.filter((item)=> item % 2!=0).reduce((acc,num)=> acc+num**2)
}
console.log(sum());