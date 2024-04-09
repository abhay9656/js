// let  arr=['a','b','c','d']
// // arr.push(2)
// // console.log(arr);

// // console.log(arr.slice(-3,-1));
// arr.shift()
// console.log(arr);

// arr.splice(2,0,'f')
// console.log(arr);

// const str=[2,3,4,1,5,6,9,10]

// const double=str.filter(a=>a%3==0).map((b)=>{ return b**3 })
// console.log(double);

const obj=[
    {name:"samsung",
    color:['black',  'olive green','white'],
    model:'s24'
   },
   {name:"oneplus",
   color:['black','green','white'],
   model:'11pro'
  },
  {name:"apple",
  color:['black','green','white'],
  model:'iphone 15'
 },
]

const fil=obj.filter((a)=>{
    return a.color.includes('black')
}).map((a)=>{return a.name})

console.log(fil);