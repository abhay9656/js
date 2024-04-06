let str = ['red', 'green'];
str.splice(1, 0, 'blue', 'gray');
console.log(str);
str.includes('red')
console.log(str.includes('red'));

let n=[2,3,4,5,6,7]
const fil=n.filter((b)=>{
      return b%2===0
})
console.log(fil);